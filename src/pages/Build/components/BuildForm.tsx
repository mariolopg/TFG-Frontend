import { IonLoading } from "@ionic/react";
import InputForm from "../../../components/inputs/InputForm";
import SelectForm from "../../../components/inputs/SelectForm";
import TextAreaForm from "../../../components/inputs/TextAreaForm";
import { useGetAirCoolersQuery, useGetCPUsQuery, useGetCasesQuery, useGetGPUsQuery, useGetHDDsQuery, useGetLiquidCoolersQuery, useGetMotherboardsQuery, useGetPSUsQuery, useGetRAMSQuery, useGetSSDsQuery } from "../../../features/api/apiSlice";

interface BuildFormProps {
  build: any,
  errors: any,
  setBuild: Function
}

const BuildForm = (props: BuildFormProps) => {

  const { data: cpus, isSuccess: isSuccessCPUS} = useGetCPUsQuery([]);
  const { data: motherboards, isSuccess: isSuccessMBS } = useGetMotherboardsQuery([]);
  const { data: rams, isSuccess: isSuccessRAMS } = useGetRAMSQuery([]);
  const { data: gpus, isSuccess: isSuccessGPUS } = useGetGPUsQuery([]);
  const { data: air_coolers, isSuccess: isSuccessACLRS } = useGetAirCoolersQuery([]);
  const { data: liquid_coolers, isSuccess: isSuccessLCLRS } = useGetLiquidCoolersQuery([]);
  const { data: hdds, isSuccess: isSuccessHDDS } = useGetHDDsQuery([]);
  const { data: ssds, isSuccess: isSuccessSSDS } = useGetSSDsQuery([]);
  const { data: psus, isSuccess: isSuccessPSUS } = useGetPSUsQuery([]);
  const { data: cases, isSuccess: isSuccessCases } = useGetCasesQuery([]);

  const isSuccess = isSuccessCPUS && isSuccessMBS && isSuccessRAMS && isSuccessGPUS && isSuccessACLRS && isSuccessLCLRS && isSuccessHDDS && isSuccessSSDS && isSuccessPSUS && isSuccessCases

  return (
      <>
        {
          isSuccess ?
          <>
          <InputForm label="Nombre" value={props.build.name} onIonInput={(e: any) => props.setBuild({ ...props.build, name: e.target.value as string })} errors={props.errors.name} />
          <TextAreaForm label="Descripción" value={props.build.description} onIonInput={(e: any) => props.setBuild({ ...props.build, description: e.target.value as string })} errors={props.errors.description} />
    
          <SelectForm label="Procesador" placeholder='Selecciona un procesador...' options={cpus} value={props.build.cpu} onIonChange={(e: any) => { props.setBuild({ ...props.build, cpu: e ? e['value'] : '' })}} errors={props.errors.cpu} />
    
          <SelectForm label="Placa base" placeholder='Selecciona una placa base...' options={motherboards} value={props.build.motherboard} onIonChange={(e: any) => props.setBuild({...props.build, motherboard: e ? e['value'] : ''})} errors={props.errors.motherboard} />

          <SelectForm label="Memoria RAM" placeholder='Selecciona un kit de memorias RAM...' options={rams} value={props.build.ram} onIonChange={(e: any) => props.setBuild({ ...props.build, ram: e ? e['value'] : ''})} errors={props.errors.ram} />
    
          <SelectForm label="Tarjeta gráfica" placeholder='Selecciona una tarjeta gráfica...' options={gpus} value={props.build.gpu} onIonChange={(e: any) => props.setBuild({ ...props.build, gpu: e ? e['value'] : ''})} errors={props.errors.gpu} />
    
          <SelectForm label="Refrigeración por aire" placeholder='Selecciona una refrigeración por aire...' options={air_coolers} value={props.build.air_cooler} onIonChange={(e: any) => props.setBuild({ ...props.build, air_cooler: e ? e['value'] : ''})} errors={[props.errors.air_cooler, props.errors.cooler]} />
    
          <SelectForm label="Refrigeración líquida" placeholder='Selecciona una refrigeración líquida...' options={liquid_coolers} value={props.build.liquid_cooler} onIonChange={(e: any) => props.setBuild({ ...props.build, liquid_cooler: e ? e['value'] : ''})} errors={[props.errors.liquid_cooler, props.errors.cooler]} />
    
          <SelectForm label="Disco duro" placeholder='Selecciona un disco duro...' options={hdds} value={props.build.hdd} onIonChange={(e: any) => props.setBuild({ ...props.build, hdd: e ? e['value'] : ''})} errors={[props.errors.hdd, props.errors.storage_drive]} />
    
          <SelectForm label="Unidad de estado sólido" placeholder='Selecciona una unidad de estado sólido...' options={ssds} value={props.build.ssd} onIonChange={(e: any) => props.setBuild({ ...props.build, ssd: e ? e['value'] : ''})} errors={[props.errors.ssd, props.errors.storage_drive]} />
    
          <SelectForm label="Fuente de alimentación" placeholder='Selecciona una fuente de alimentación...' options={psus} value={props.build.psu} onIonChange={(e: any) => props.setBuild({ ...props.build, psu: e ? e['value'] : ''})} errors={props.errors.psu} />
    
          <SelectForm label="Chasis" placeholder='Selecciona un chasis...' options={cases} value={props.build.case}  onIonChange={(e: any) => props.setBuild({ ...props.build, case: e ? e['value'] : ''})} errors={props.errors.case} />
        </>
            :
            <IonLoading message="Cargando..." radioGroup='20' spinner="bubbles" isOpen={true} />
        }
      </>
    );

};

export default BuildForm;