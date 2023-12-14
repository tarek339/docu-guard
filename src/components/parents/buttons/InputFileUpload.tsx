import Button from "@mui/material/Button";
import colors from "../../../assets/theme/colors";
import { useTranslationsData } from "../../../context/TranslationContext";
import { TbUpload } from "../../icons";
import { useEffect, useState } from "react";
import { useData } from "../../../context/AppContext";

const inputStyle: React.CSSProperties = {
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  color: colors.fontBlack,
  fontFamily: "Inter, sans-serif",
  borderRadius: "10px",
  height: "40px",
  marginTop: "18px",
};

export default function InputFileUpload(props: {
  onClick: React.MouseEventHandler<HTMLLabelElement> | undefined;
}) {
  const { t } = useTranslationsData();
  const { locatedFile } = useData();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    if (locatedFile === "drivers") {
      window.api.uploadDriverFile(selectedFile?.path);
      console.log(selectedFile?.path);
    }
  }, [selectedFile]);

  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<TbUpload />}
      disableElevation
      style={buttonStyle}
      onClick={props.onClick}
    >
      {t("form.import")}
      <input onInput={handleFileChange} style={inputStyle} type="file" />
    </Button>
  );
}
