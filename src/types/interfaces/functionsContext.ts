export interface IFunctionsContext {
  resMessage: string | null;
  setResMessage: React.Dispatch<React.SetStateAction<string | null>>;
  topLabel: boolean;
  setTopLabel: React.Dispatch<React.SetStateAction<boolean>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  anchorRef: React.RefObject<HTMLButtonElement>;
  openAlert: boolean;
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;

  navigateBack: () => void;
  reset: () => void;
  logOut: () => void;
  turnOffApp: () => void;
  handleToggle: () => void;
  handleClose: () => void;
  handleCloseAlert: () => void;
}
