import "react-i18next";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

declare module "react-i18next" {
  // and extend them!
  interface Resources {
    en: typeof en;
    fr: typeof fr;
    ar: typeof ar;
  }
}
