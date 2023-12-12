import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import { ITables } from "../../../types/interfaces";
import { StyledTableCell, TableMenu, TablePaginationActions } from ".";
import { tableContainer } from "./Styled";
import { useTranslationsData } from "../../../context/TranslationContext";

export default function Tables(props: ITables) {
  const { t } = useTranslationsData();

  const emptyRows =
    props.page > 0
      ? Math.max(0, (1 + props.page) * props.rowsPerPage - props.childrenRows)
      : 0;

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    props.setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.setRowsPerPage(parseInt(event.target.value, 10));
    props.setPage(0);
  };

  const totalRows =
    props.rowsPerPage -
    Math.max(0, (1 + props.page) * props.rowsPerPage - props.childrenRows);

  useEffect(() => {
    if (props.page > 0 && totalRows === 0) {
      props.setPage(props.page - 1);
    }
  }, [props, totalRows]);

  return (
    <>
      <TableContainer style={tableContainer} component={Paper} elevation={0}>
        <TableMenu />
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>{props.tableHeadOne}</StyledTableCell>
              <StyledTableCell align="left">
                {props.tableHeadTwo}
              </StyledTableCell>
              <StyledTableCell align="left">
                {props.tableHeadThree}
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.mappedChildren}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                sx={{
                  border: "none",
                }}
                rowsPerPageOptions={[
                  5,
                  10,
                  25,
                  {
                    label: "All",
                    value: -1,
                  },
                ]}
                count={props.childrenCount}
                rowsPerPage={props.rowsPerPage}
                page={props.page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                labelRowsPerPage={t("table.rowsPerPage")}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
