export interface IFunctionsContext {
  resMessage: string | null;
  setResMessage: React.Dispatch<React.SetStateAction<string | null>>;
  topLabel: boolean;
  setTopLabel: React.Dispatch<React.SetStateAction<boolean>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;

  navigateBack: () => void;
  reset: () => void;
  logOut: () => void;
  turnOffApp: () => void;
}
