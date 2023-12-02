import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { IUseTranslation } from "../types/interfaces/useTranslations";
import translations from "../translations";

export const TranslationsContext = createContext({});

export function TranslationsContextProvider(props: { children: JSX.Element }) {
  const [locale, setLocale] = useState("de");

  const resources = translations;

  i18n.use(initReactI18next).init({
    resources,
    lng: locale,
    interpolation: {
      escapeValue: false,
    },
  });

  const t = useCallback(
    (scope: string, option: Object) => {
      const translation = i18n.t(scope, { ...option, locale });
      if (translation === scope) {
        console.error(
          `No translation found for key: "${scope}" in locale: "${locale}"`
        );
        return "No translation available";
      }

      return translation;
    },
    [locale]
  );

  useEffect(() => {
    setLocale(locale);
  }, [locale]);

  const contextValue = {
    locale,
    setLocale,
    t,
  };

  return (
    <TranslationsContext.Provider value={contextValue}>
      {props.children}
    </TranslationsContext.Provider>
  );
}

export const useTranslationsData = () =>
  useContext(TranslationsContext) as IUseTranslation;
