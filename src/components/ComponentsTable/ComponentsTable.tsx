import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import { IonRouterLink, IonSearchbar } from '@ionic/react';

interface ComponentsTableProps {
  items: any,
  headCells: any,
  hrefBase: string
}

const ComponentsTable = (props: ComponentsTableProps) => {

  const [searchedValue, setSearchedValue] = useState("")
  const [filteredValues, setFilteredValues] = useState(props.items)

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  type Order = 'asc' | 'desc';

  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
  ): (
    a: { [key in Key]: number | string | [] },
    b: { [key in Key]: number | string | [] },
  ) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }

  function EnhancedTableHead(propsFunc: EnhancedTableProps) {
    const { order, orderBy, onRequestSort } =
      propsFunc;
    const createSortHandler =
      (property: any) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };

    return (
      <TableHead>
        <TableRow>
          {props.headCells.map((headCell: any) => (
            <TableCell
              key={headCell.id}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: any,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredValues.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(filteredValues, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, filteredValues],
  );

  function handleSearch() {
    const values = props.items.filter((item: any) =>
      Object.values(item).some(value => {
        if (typeof value === "number") {
          value = value.toString()
        }
        return typeof value === "string" && value.toLowerCase().includes(searchedValue.trim().toLowerCase())
      }
      )
    );
    setFilteredValues(values)
  }

  return (
    <>
      <IonSearchbar placeholder="Buscar componente..." class='custom' onKeyUp={handleSearch} onIonInput={(e: any) => { setSearchedValue(e.target.value) }}></IonSearchbar>
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size='medium'
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy as string}
            onRequestSort={handleRequestSort}
            rowCount={filteredValues.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              return (
                <TableRow
                  hover
                  tabIndex={-1}
                  key={row.name as string}
                >
                  {props.headCells.map((item: any, index: number) => {
                    if (index != 0) {
                      const text = Array.isArray(row[item.id]) ? (row[item.id] as []).join(', ') : row[item.id]
                      return (<TableCell >{text}</TableCell>)
                    }
                    return (<TableCell component="th" scope="row" padding="none" >
                      <IonRouterLink href={`${props.hrefBase}/${row.id}`}>{row[item.id]}</IonRouterLink>
                    </TableCell>)
                  })}
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (53) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer >
      <TablePagination
        rowsPerPageOptions={[25, 50, 100, 200, filteredValues.length]}
        component="div"
        count={filteredValues.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
};

export default React.memo(ComponentsTable);