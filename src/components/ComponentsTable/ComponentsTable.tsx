import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { visuallyHidden } from '@mui/utils';
import { IonIcon, IonSearchbar, IonText } from '@ionic/react';
import { checkmarkOutline, closeOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';

interface ComponentsTableProps {
  items: any,
  headCells: any,
  aditionalInfo?: any,
}

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "var(--ion-color-medium-table-head)",
    paddingLeft: "10px"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    paddingLeft: "10px"
  },
}));

const ComponentsTable = (props: ComponentsTableProps) => {
  const { t, i18n } = useTranslation();
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
    a: { [key in Key]: number | string | boolean | [] },
    b: { [key in Key]: number | string | boolean | [] },
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
          {props.aditionalInfo ? <StyledTableCell /> : null}
          {props.headCells.map((headCell: any) => (
            <StyledTableCell
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
            </StyledTableCell>
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

  function handleClear() {
    setSearchedValue("")
    setFilteredValues(props.items)
  }

  function AdditionalInfo(propsAditionalInfo: { row: any, open: boolean }) {
    if (!props.aditionalInfo) { return null }
    return (
      <TableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={propsAditionalInfo.open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledTableCell />
                    {props.aditionalInfo.map((headCell: any) => (
                      <StyledTableCell
                        key={headCell.id}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                      >
                        {headCell.label}
                      </StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableCell />
                  {props.aditionalInfo.map((item: any, index: number) => {
                    if (index != 0) {
                      const text = Array.isArray(propsAditionalInfo.row[item.id]) ? (propsAditionalInfo.row[item.id] as []).join(', ') : propsAditionalInfo.row[item.id]
                      return (<StyledTableCell >{text}</StyledTableCell>)
                    }
                    return (<StyledTableCell component="th" scope="row" padding="none" >{propsAditionalInfo.row[item.id]}</StyledTableCell>)
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    )
  }

  function Row(propsRow: { row: any }) {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <TableRow
          hover
          tabIndex={-1}
          key={propsRow.row.id as number}
          onClick={() => setOpen(!open)}
          style={{ cursor: 'pointer' }}
        >
          {
            props.aditionalInfo ?
              <StyledTableCell>
                <IonText
                  aria-label="expand row"
                  color='medium'
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IonText>
              </StyledTableCell>
              :
              null
          }

          {props.headCells.map((item: any, index: number) => {
            if (index != 0) {
              let text = propsRow.row[item.id]
              if (Array.isArray(propsRow.row[item.id])) {
                text = (propsRow.row[item.id] as []).join(', ')
              }
              else if (typeof propsRow.row[item.id] === "boolean") {
                text = propsRow.row[item.id] ? <IonIcon icon={checkmarkOutline} style={{ fontSize: 20 }} color="success" /> : <IonIcon icon={closeOutline} style={{ fontSize: 20 }} color="danger" />
              }
              return (<StyledTableCell >{text}</StyledTableCell>)
            }
            return (<StyledTableCell component="th" scope="row" padding="none" >{propsRow.row[item.id]}</StyledTableCell>)
          })}
        </TableRow>
        <AdditionalInfo row={propsRow.row} open={open} />
      </>
    );
  }

  return (
    <>
      <IonSearchbar placeholder={t('search', { ns: 'components' })} class='custom' onIonChange={handleSearch} onIonInput={(e: any) => { setSearchedValue(e.target.value) }} onIonClear={handleClear}></IonSearchbar>
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-label="customized table"
          size='medium'
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy as string}
            onRequestSort={handleRequestSort}
            rowCount={filteredValues.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => (<Row row={row} key={row.id as number} />))}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (53) * emptyRows,
                }}
              >
                <StyledTableCell colSpan={6} />
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