import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enGBResources from "./locale/enGB/enGB";
import esResources from "./locale/es/es";

const resources = {
  enGB: enGBResources,
  es: esResources,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
