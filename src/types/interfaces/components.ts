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
  tableHeadFour: string;
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
