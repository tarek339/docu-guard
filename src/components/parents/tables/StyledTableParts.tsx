import { Grid } from "@mui/material";
import { IStyledTableParts } from "../../../types/interfaces";
import { StyledTableCell, StyledTableRow } from ".";

function StyledTableParts(props: IStyledTableParts) {
  return (
    <>
      <StyledTableRow onClick={props.onClick}>
        <StyledTableCell>
          <Grid container alignItems="center">
            {props.firstChild}
          </Grid>
        </StyledTableCell>
        <StyledTableCell align="left">{props.secondChild}</StyledTableCell>
        <StyledTableCell align="left">{props.thirdChild}</StyledTableCell>
      </StyledTableRow>
    </>
  );
}
export default StyledTableParts;
