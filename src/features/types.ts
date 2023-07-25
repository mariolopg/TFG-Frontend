export interface BuildInterface {
    name: string;
    description: string;
    cpu: string;
    motherboard: string;
    gpu: string;
    ram: string;
    air_cooler: string;
    liquid_cooler: string;
    hdd: string;
    ssd: string;
    psu: string;
    case: string;
}

export interface BuildErrorsInterface {
    name: [];
    description: [];
    cpu: [];
    motherboard: [];
    gpu: [];    ram: [];
    air_cooler: [];
    liquid_cooler: [];
    cooler: []
    hdd: [];
    ssd: [];
    psu: [];
    storage_drive: []
    case: [];
}

export interface CPUInterface {
    id: string,
    name: string,
    socket: string,
    cores: string,
    integrated_graphics: boolean,
    threads: string
}