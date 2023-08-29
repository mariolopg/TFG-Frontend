import React from 'react';
import ComponentCard from './ComponentCard';
import { useTranslation } from 'react-i18next';

interface BuildComponentsProps {
	build: any,
}

const BuildComponents = (props: BuildComponentsProps) => {
	const { t, i18n } = useTranslation();

	function GetGPUCard() {
		if (props.build.gpu)
			return <ComponentCard title={t('gpu', { ns: 'components' })} subtitle={props.build.gpu_data.name} />
		return null
	}

	function GetCoolerCard() {
		if (props.build.air_cooler_data)
			return <ComponentCard title={t('airCooler', { ns: 'components' })} subtitle={props.build.air_cooler_data.name} />
		else if (props.build.liquid_cooler_data)
			return <ComponentCard title={t('liquidCooler', { ns: 'components' })} subtitle={props.build.liquid_cooler_data.name} />
		return null
	}

	function GetHDDCard() {
		if (props.build.hdd_data)
			return <ComponentCard title={t('hdd', { ns: 'components' })} subtitle={props.build.hdd_data.name} />
		return null
	}

	function GetSSDCard() {
		if (props.build.ssd_data)
			return <ComponentCard title={t('ssd', { ns: 'components' })} subtitle={props.build.ssd_data.name} />
		return null
	}

	return (
		<>
			<ComponentCard title={t('cpu', { ns: 'components' })} subtitle={props.build.cpu_data.name} />
			<ComponentCard title={t('mb', { ns: 'components' })} subtitle={props.build.motherboard_data.name} />
			<ComponentCard title={t('ram', { ns: 'components' })} subtitle={props.build.ram_data.name} />
			<GetGPUCard />
			<GetCoolerCard />
			<GetHDDCard />
			<GetSSDCard />
			<ComponentCard title={t('psu', { ns: 'components' })} subtitle={props.build.psu_data.name} />
			<ComponentCard title={t('case', { ns: 'components' })} subtitle={props.build.case_data.name} />
		</>
	);
};

export default React.memo(BuildComponents);