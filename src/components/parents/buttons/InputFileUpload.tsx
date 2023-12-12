import Button from "@mui/material/Button";
import colors from "../../../assets/theme/colors";
import { useTranslationsData } from "../../../context/TranslationContext";
import { TbUpload } from "../../icons";

export default function InputFileUpload() {
  const { t } = useTranslationsData();
  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<TbUpload />}
      disableElevation
      style={{
        backgroundColor: "transparent",
        color: colors.fontBlack,
        fontFamily: "Inter, sans-serif",
        borderRadius: "10px",
        height: "40px",
      }}
    >
      {t("form.import")}
      <input
        style={{
          clip: "rect(0 0 0 0)",
          clipPath: "inset(50%)",
          height: 1,
          overflow: "hidden",
          position: "absolute",
          bottom: 0,
          left: 0,
          whiteSpace: "nowrap",
          width: 1,
        }}
        type="file"
      />
    </Button>
  );
}
