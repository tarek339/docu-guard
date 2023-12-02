export interface IUseTranslation {
  t: (scope?: string, options?: Object) => string;
  locale: string;
  setLocale: (arg0: string) => void;
}
