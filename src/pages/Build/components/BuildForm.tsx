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

  const { data: cpus } = useGetCPUsQuery(null);
  const { data: motherboards } = useGetMotherboardsQuery(null);
  const { data: rams } = useGetRAMSQuery(null);
  const { data: gpus } = useGetGPUsQuery(null);
  const { data: air_coolers } = useGetAirCoolersQuery(null);
  const { data: liquid_coolers } = useGetLiquidCoolersQuery(null);
  const { data: hdds } = useGetHDDsQuery(null);
  const { data: ssds } = useGetSSDsQuery(null);
  const { data: psus } = useGetPSUsQuery(null);
  const { data: cases } = useGetCasesQuery(null);

  return (
    <>
      <InputForm label="Nombre" value={props.build.name} onIonInput={(e: any) => { props.setBuild({ ...props.build, name: e.target.value as string }) }} errors={props.errors.name} />
      <TextAreaForm label="Descripción" value={props.build.description} onIonInput={(e: any) => { props.setBuild({ ...props.build, description: e.target.value as string }) }} errors={props.errors.description} />

      <SelectForm label="Procesador" placeholder='Selecciona un procesador...' options={cpus ? cpus : []} value={cpus ? cpus.findIndex((cpu: { id: any; }) => cpu.id === props.build.cpu) : -1} onIonChange={(e: any) => { e ? props.setBuild({ ...props.build, cpu: e['value'] as string }) : props.setBuild({ ...props.build, cpu: "" }) }} errors={props.errors.cpu} />

      <SelectForm label="Placa base" placeholder='Selecciona una placa base...' options={motherboards ? motherboards : []} value={motherboards ? motherboards.findIndex((motherboard: { id: any; }) => motherboard.id === props.build.motherboard): -1} onIonChange={(e: any) => { e ? props.setBuild({ ...props.build, motherboard: e['value'] as string }) : props.setBuild({ ...props.build, motherboard: "" }) }} errors={props.errors.motherboard} />

      <SelectForm label="Memoria RAM" placeholder='Selecciona un kit de memorias RAM...' options={rams ? rams : []} value={rams ? rams.findIndex((ram: { id: any; }) => ram.id === props.build.ram): -1} onIonChange={(e: any) => { e ? props.setBuild({ ...props.build, ram: e['value'] as string }) : props.setBuild({ ...props.build, ram: "" }) }} errors={props.errors.ram} />

      <SelectForm label="Tarjeta gráfica" placeholder='Selecciona una tarjeta gráfica...' options={gpus ? gpus : []} value={gpus ? gpus.findIndex((gpu: { id: any; }) => gpu.id === props.build.gpu): -1} onIonChange={(e: any) => { e ? props.setBuild({ ...props.build, gpu: e['value'] as string }) : props.setBuild({ ...props.build, gpu: "" }) }} errors={props.errors.gpu} />

      <SelectForm label="Refrigeración por aire" placeholder='Selecciona una refrigeración por aire...' options={air_coolers ? air_coolers : []} value={air_coolers ? air_coolers.findIndex((air_cooler: { id: any; }) => air_cooler.id === props.build.air_cooler): -1} onIonChange={(e: any) => { e ? props.setBuild({ ...props.build, air_cooler: e['value'] as string }) : props.setBuild({ ...props.build, air_cooler: "" }) }} errors={[props.errors.air_cooler, props.errors.cooler]} />

      <SelectForm label="Refrigeración líquida" placeholder='Selecciona una refrigeración líquida...' options={liquid_coolers ? liquid_coolers : []} value={liquid_coolers ? liquid_coolers.findIndex((liquid_cooler: { id: any; }) => liquid_cooler.id === props.build.liquid_cooler): -1} onIonChange={(e: any) => { e ? props.setBuild({ ...props.build, liquid_cooler: e['value'] as string }) : props.setBuild({ ...props.build, liquid_cooler: "" }) }} errors={[props.errors.liquid_cooler, props.errors.cooler]} />

      <SelectForm label="Disco duro" placeholder='Selecciona un disco duro...' options={hdds ? hdds : []} value={hdds ? hdds.findIndex((hdd: { id: any; }) => hdd.id === props.build.hdd): -1} onIonChange={(e: any) => { e ? props.setBuild({ ...props.build, hdd: e['value'] as string }) : props.setBuild({ ...props.build, hdd: "" }) }} errors={[props.errors.hdd, props.errors.storage_drive]} />

      <SelectForm label="Unidad de estado sólido" placeholder='Selecciona una unidad de estado sólido...' options={ssds ? ssds : []} value={ssds ? ssds.findIndex((ssd: { id: any; }) => ssd.id === props.build.ssd): -1} onIonChange={(e: any) => { e ? props.setBuild({ ...props.build, ssd: e['value'] as string }) : props.setBuild({ ...props.build, ssd: "" }) }} errors={[props.errors.ssd, props.errors.storage_drive]} />

      <SelectForm label="Fuente de alimentación" placeholder='Selecciona una fuente de alimentación...' options={psus ? psus : []} value={psus ? psus.findIndex((psu: { id: any; }) => psu.id === props.build.psu): -1} onIonChange={(e: any) => { e ? props.setBuild({ ...props.build, psu: e['value'] as string }) : props.setBuild({ ...props.build, psu: "" }) }} errors={props.errors.psu} />

      <SelectForm label="Chasis" placeholder='Selecciona un chasis...' options={cases ? cases : []} value={cases ? cases.findIndex((pc_case: { id: any; }) => pc_case.id === props.build.case): -1}  onIonChange={(e: any) => { e ? props.setBuild({ ...props.build, case: e['value'] as string }) : props.setBuild({ ...props.build, case: "" }) }} errors={props.errors.case} />
    </>
  );
};

export default BuildForm;