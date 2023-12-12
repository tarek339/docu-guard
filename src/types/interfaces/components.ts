import {
  DateValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";

type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface ITablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

export interface ITables {
  childrenRows: number;
  childrenCount: number;
  mappedChildren: JSX.Element[];
  tableHeadOne: string;
  tableHeadTwo: string;
  tableHeadThree: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  totalRows: number;
  setTotalRows: React.Dispatch<React.SetStateAction<number>>;
}

export interface IStyledTableParts {
  onClick: () => void;
  firstChild: string;
  secondChild: string;
  thirdChild: string;
}

export interface IDateSelecter {
  name: string;
  label: string;
  views: ("year" | "month" | "day")[];
  format: string;
  value: string | null;
  onChange:
    | ((
        value: string | null,
        context: PickerChangeHandlerContext<DateValidationError>
      ) => void)
    | undefined;
  error: boolean;
  children: React.ReactNode;
}

export interface IInput {
  name: string;
  label: string;
  value: string;
  onChange: InputChangeHandler;
  error: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export interface IDropDownMenu {
  name: string;
  label: string;
  value: string;
  onChange: InputChangeHandler;
  error: boolean;
  children: React.ReactNode;
  menuItems: React.ReactNode;
  style?: React.CSSProperties;
}
