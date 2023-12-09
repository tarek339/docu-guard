export interface IFunctionsContext {
  resMessage: string;
  setResMessage: React.Dispatch<React.SetStateAction<string>>;
  topLabel: boolean;
  setTopLabel: React.Dispatch<React.SetStateAction<boolean>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  anchorRef: React.RefObject<HTMLButtonElement>;
  openAlert: boolean;
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  totalRows: number;
  setTotalRows: React.Dispatch<React.SetStateAction<number>>;

  navigateBack: () => void;
  reset: () => void;
  logOut: () => void;
  turnOffApp: () => void;
  handleToggle: () => void;
  handleClose: () => void;
  handleCloseAlert: () => void;
}
