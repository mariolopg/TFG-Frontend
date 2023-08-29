import React from "react";
import InputForm from "../../../components/Inputs/InputForm";
import SelectForm from "../../../components/Inputs/SelectForm";
import TextAreaForm from "../../../components/Inputs/TextAreaForm";
import { useGetAirCoolersQuery, useGetCPUsQuery, useGetCasesQuery, useGetGPUsQuery, useGetHDDsQuery, useGetLiquidCoolersQuery, useGetMotherboardsQuery, useGetPSUsQuery, useGetRAMSQuery, useGetSSDsQuery } from "../../../domain/api/apiSlice";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ImagesInput from "../../../components/Inputs/ImagesInput";
import ImageSlider from "../../../components/ImageSlider/ImageSlider";
import { useTranslation } from "react-i18next";

interface BuildFormProps {
  build: any,
  images: File[] | undefined,
  errors: any,
  editable?: boolean,
  setBuild: Function,
  setImages: Function,
}

const BuildForm = (props: BuildFormProps) => {
  const { t, i18n } = useTranslation();

  const { data: cpus, isSuccess: isSuccessCPUS } = useGetCPUsQuery([]);
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

  if (!isSuccess) {
    return <LoadingSpinner />
  }

  const GetImageSlider: React.FC = () => {
    if (!!!props.build.images) return null;
    if (!!!props.build.images.length) return null;
    return <ImageSlider label={t('savedImages', { ns: 'common' })} images={props.build.images} editable={props.editable} />
  }

  const handleChange = (newFiles: any) => {
    props.setImages(newFiles);
  }

  return (
    <>
      <InputForm label={t('name', { ns: 'common' })} value={props.build.name} onIonInput={(e: any) => props.setBuild({ ...props.build, name: e.target.value as string })} errors={props.errors.name} />
      <TextAreaForm label={t('description', { ns: 'common' })} value={props.build.description} onIonInput={(e: any) => props.setBuild({ ...props.build, description: e.target.value as string })} errors={props.errors.description} />

      <ImagesInput label={t('images', { ns: 'common' })} value={props.images} handleChange={handleChange} />

      <GetImageSlider />

      <SelectForm label={t('cpu', { ns: 'components' })} placeholder={t('cpuSelector', { ns: 'configurator' })} options={cpus} value={props.build.cpu} onIonChange={(e: any) => { props.setBuild({ ...props.build, cpu: e ? e['value'] : '' }) }} errors={props.errors.cpu} />

      <SelectForm label={t('mb', { ns: 'components' })} placeholder={t('mbSelector', { ns: 'configurator' })} options={motherboards} value={props.build.motherboard} onIonChange={(e: any) => props.setBuild({ ...props.build, motherboard: e ? e['value'] : '' })} errors={props.errors.motherboard} />

      <SelectForm label={t('ram', { ns: 'components' })} placeholder={t('ramSelector', { ns: 'configurator' })} options={rams} value={props.build.ram} onIonChange={(e: any) => props.setBuild({ ...props.build, ram: e ? e['value'] : '' })} errors={props.errors.ram} />

      <SelectForm label={t('gpu', { ns: 'components' })} placeholder={t('gpuSelector', { ns: 'configurator' })} options={gpus} value={props.build.gpu} onIonChange={(e: any) => props.setBuild({ ...props.build, gpu: e ? e['value'] : '' })} errors={props.errors.gpu} />

      <SelectForm label={t('airCooler', { ns: 'components' })} placeholder={t('acSelector', { ns: 'configurator' })} options={air_coolers} value={props.build.air_cooler} onIonChange={(e: any) => props.setBuild({ ...props.build, air_cooler: e ? e['value'] : '' })} errors={[props.errors.air_cooler, props.errors.cooler]} />

      <SelectForm label={t('liquidCooler', { ns: 'components' })} placeholder={t('lcSelector', { ns: 'configurator' })} options={liquid_coolers} value={props.build.liquid_cooler} onIonChange={(e: any) => props.setBuild({ ...props.build, liquid_cooler: e ? e['value'] : '' })} errors={[props.errors.liquid_cooler, props.errors.cooler]} />

      <SelectForm label={t('hdd', { ns: 'components' })} placeholder={t('hddSelector', { ns: 'configurator' })} options={hdds} value={props.build.hdd} onIonChange={(e: any) => props.setBuild({ ...props.build, hdd: e ? e['value'] : '' })} errors={[props.errors.hdd, props.errors.storage_drive]} />

      <SelectForm label={t('ssd', { ns: 'components' })} placeholder={t('ssdSelector', { ns: 'configurator' })} options={ssds} value={props.build.ssd} onIonChange={(e: any) => props.setBuild({ ...props.build, ssd: e ? e['value'] : '' })} errors={[props.errors.ssd, props.errors.storage_drive]} />

      <SelectForm label={t('psu', { ns: 'components' })} placeholder={t('psuSelector', { ns: 'configurator' })} options={psus} value={props.build.psu} onIonChange={(e: any) => props.setBuild({ ...props.build, psu: e ? e['value'] : '' })} errors={props.errors.psu} />

      <SelectForm label={t('case', { ns: 'components' })} placeholder={t('caseSelector', { ns: 'configurator' })} options={cases} value={props.build.case} onIonChange={(e: any) => props.setBuild({ ...props.build, case: e ? e['value'] : '' })} errors={props.errors.case} />
    </>
  );

};

export default React.memo(BuildForm);