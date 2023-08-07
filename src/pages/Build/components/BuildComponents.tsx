import React from 'react';
import ComponentCard from './ComponentCard';

interface BuildComponentsProps {
	build: any,
}

const BuildComponents = (props: BuildComponentsProps) => {
	function GetGPUCard() {
		if (props.build.gpu)
			return <ComponentCard title='Tarjeta gráfica' subtitle={props.build.gpu_data.name} />
		return null
	}

	function GetCoolerCard() {
		if (props.build.air_cooler_data)
			return <ComponentCard title='Refrigeración por aire' subtitle={props.build.air_cooler_data.name} />
		else if (props.build.liquid_cooler_data)
			return <ComponentCard title='Refrigeración líquida' subtitle={props.build.liquid_cooler_data.name} />
		return null
	}

	function GetHDDCard() {
		if (props.build.hdd_data)
			return <ComponentCard title='Disco duro' subtitle={props.build.hdd_data.name} />
		return null
	}

	function GetSSDCard() {
		if (props.build.ssd_data)
			return <ComponentCard title='Disco sólido' subtitle={props.build.ssd_data.name} />
		return null
	}

	return (
		<>
			<ComponentCard title='Procesador' subtitle={props.build.cpu_data.name} />
			<ComponentCard title='Placa Base' subtitle={props.build.motherboard_data.name} />
			<ComponentCard title='Memoria RAM' subtitle={props.build.ram_data.name} />
			<GetGPUCard />
			<GetCoolerCard />
			<GetHDDCard />
			<GetSSDCard />
			<ComponentCard title='Fuente de alimentación' subtitle={props.build.psu_data.name} />
			<ComponentCard title='Caja' subtitle={props.build.case_data.name} />
		</>
	);
};

export default React.memo(BuildComponents);