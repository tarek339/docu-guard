export interface IFunctionsContext {
  resMessage: string | null;
  setResMessage: React.Dispatch<React.SetStateAction<string | null>>;

  navigateBack: () => void;
  reset: () => void;
  logOut: () => void;
  turnOffApp: () => void;
}
