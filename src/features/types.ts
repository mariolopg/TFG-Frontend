export interface BuildInterface {
    id?: string,
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
    // cpu_data?: any;
    // motherboard_data?: any;
    // gpu_data?: any;
    // ram_data?: any;
    // air_cooler_data?: any;
    // liquid_cooler_data?: any;
    // hdd_data?: any;
    // ssd_data?: any;
    // psu_data?: any;
    // case_data?: any;
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

export interface CommentInterface {
    build: string;
    comment: string;
}

export interface CommentErrorsInterface {
    build: [],
    comment: []
}