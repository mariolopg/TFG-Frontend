// API CONSTANTS
export const REDUCER_PATH = "http://localhost:8000/api/";
export const API_BASE_URL = "http://localhost:8000/api/";

// ROUTES CONSTANTS
export const ROOT_PATH = "/";

// AUTH ROUTES
export const LOGIN_PATH = "/login";
export const REGISTER_PATH = "/register";

// BUILD ROUTES
export const BUILD_BASE_PATH = "/build";
export const BUILD_LIST_PATH = BUILD_BASE_PATH;
export const BUILD_DETAIL_PATH = "/build/:id";
export const BUILD_DETAIL_EDIT_PATH = "/build/:id/edit";
export const CONFIGURATOR_PATH = "/configurator";

// USER ROUTES
export const BUILDER_BASE_PATH = "/user";
export const BUILDER_PATH = "/user/:id";
export const USER_PROFILE_PATH = "/profile";

// HARDWARE DB ROUTES
export const HARDWARE_BASE_PATH = "/hardware";
export const HARDWARE_CPU_PATH = "/hardware/cpus";
export const HARDWARE_MB_PATH = "/hardware/motherboards";
export const HARDWARE_RAM_PATH = "/hardware/rams";
export const HARDWARE_AC_PATH = "/hardware/air-coolers";
export const HARDWARE_LC_PATH = "/hardware/liquid-coolers";
export const HARDWARE_GPU_PATH = "/hardware/gpus";
export const HARDWARE_HDD_PATH = "/hardware/hdds";
export const HARDWARE_SSD_PATH = "/hardware/ssds";
export const HARDWARE_PSU_PATH = "/hardware/psus";
export const HARDWARE_CASE_PATH = "/hardware/cases";

// IMAGES
export const DEFAULT_CARD_IMG = "/images/card-default.png";
export const DATE_ICON = "/images/date-range.svg";
export const EMAIL_ICON = "/images/email.svg";
export const ID_CARD_ICON = "/images/id-card.svg";
export const PROFILE_ICON = "/images/person-circle-outline.svg";

export const TOAST_TIMEOUT = 3000;
