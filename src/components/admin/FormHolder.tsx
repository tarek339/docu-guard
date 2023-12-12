import { Block } from "../parents/container";
import colors from "../../assets/theme/colors";
import { Pagination } from "..";
import { TextSmall } from "../parents/text";
import { TextButton } from "../parents/buttons";
import { useData } from "../../context/AppContext";
import { useTranslationsData } from "../../context/TranslationContext";

const FormHolder = () => {
  const { page, setPage } = useData();
  const { t } = useTranslationsData();
  return (
    <Block
      style={{
        width: "550px",
        padding: "40px 24px 50px 24px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        backgroundColor: colors.white,
      }}
    >
      <Pagination />

      {page === 0 ? (
        <Block
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: "15px",
          }}
        >
          <TextSmall>{t("main.forgotPassword")} &nbsp;</TextSmall>
          <TextButton
            onClick={() => setPage(page + 2)}
            children={t("main.reset")}
          />
        </Block>
      ) : null}
    </Block>
  );
};

export default FormHolder;
