import { motion } from "framer-motion";
import { TextButton } from "../buttons";
import { Block } from "../container";
import { TextHeader, TextSmall } from "../text";
import Alerts from "../Alerts";
import { useData } from "../../../context/AppContext";
import { useTranslationsData } from "../../../context/TranslationContext";
import { IAdminFormHolder } from "../../../types/interfaces";

const AdminFormHolder = (props: IAdminFormHolder) => {
  const { page, setPage, message } = useData();
  const { t } = useTranslationsData();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Alerts
        severity={message === "Sign up succeed" ? "success" : "error"}
        message={message}
      />
      <TextHeader>{props.header}</TextHeader>
      <Block style={{ display: "flex", flexDirection: "row" }}>
        <TextSmall>{props.main} &nbsp;</TextSmall>
        <TextButton
          onClick={() => (page == 0 ? setPage(page + 1) : setPage(page - 1))}
          children={page == 0 ? t("main.register") : t("main.login")}
        />
      </Block>
      <Block style={{ paddingTop: "10px" }}>{props.children}</Block>
    </motion.div>
  );
};

export default AdminFormHolder;
