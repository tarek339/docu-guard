import { styled } from "@mui/material/styles";
import { TableCell, TableRow, tableCellClasses } from "@mui/material";
import colors from "../../../assets/theme/colors";

export const tableContainer: React.CSSProperties = {
  borderRadius: "20px",
  border: "0.5px solid #d3d3d3cc",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.08)",
};

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.hover,
    fontSize: "12px",
    textTransform: "uppercase",
    fontWeight: 600,
    fontFamily: "Inter, sans serif",
    color: colors.fontBlack,
    borderBottom: "0.5px solid #d3d3d3cc",
    borderTop: "0.5px solid #d3d3d3cc",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  ":hover": {
    backgroundColor: "#E8E8E8",
    cursor: "pointer",
    transition: "0.2s",
  },
}));

export const inicatorProps = {
  sx: {
    backgroundColor: "#6366f1",
  },
};

export const tabProps = {
  "&.Mui-selected": {
    color: "#6366f1",
  },
};
