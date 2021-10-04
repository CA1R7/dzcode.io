/* eslint sort-imports:off */
import { FC } from "react";
import ar from "./locals/json/ar.json";
import fr from "./locals/json/fr.json";
import en from "./locals/json/en.json";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { StateInterface } from "src/apps/main/redux";

export const Localization: FC = (props) => {
  const locals: any = { fr, ar, en };

  const { settings } = useSelector<StateInterface, StateInterface>((state) => state);

  return (
    <IntlProvider messages={locals[settings.lang]} locale={settings.lang} defaultLocale="en">
      {props.children}
    </IntlProvider>
  );
};

export default Localization;
