import {
  DateValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import { Variant } from "@mui/material/styles/createTypography";
import { OverridableStringUnion } from "@mui/types";
import { AlertColor, TypographyPropsVariantOverrides } from "@mui/material";

type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;
type FormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;

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

export interface IHeader {
  headerChildren: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickImport: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface IListingHolder {
  headerChildren: React.ReactNode;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickImport: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface IAddButton {
  style?: React.CSSProperties;
  children: React.ReactNode;
  icon?: JSX.Element;
  bgColor: string;
  color: string;
  disableElevation?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface IBasicButton {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface IFormButton {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export interface ISideBarButton {
  firstLetter: React.ReactNode;
  rest: React.ReactNode;
  icon: JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface ITextButton {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
}

export interface IOverviewCards {
  header: React.ReactNode;
  main: React.ReactNode;
  sectionOne: React.ReactNode;
  sectionTwo: React.ReactNode;
  icon: JSX.Element;
  color: string;
}

export interface IBlock {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export interface IAddFormHolder {
  children: JSX.Element;
  header: React.ReactNode;
}

export interface IAdminFormHolder {
  header: React.ReactNode;
  main: React.ReactNode;
  children: JSX.Element;
}

export interface IForm {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onSubmit: FormSubmitHandler;
}

export interface IText {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  variant?:
    | OverridableStringUnion<
        Variant | "inherit",
        TypographyPropsVariantOverrides
      >
    | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ITextProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export interface IAlerts {
  severity: AlertColor | undefined;
  message: string;
}
