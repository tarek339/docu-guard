import { motion } from "framer-motion";
import { TextButton } from "./parents/buttons";
import { Block } from "./parents/container";
import { TextHeader, TextSmall } from "./parents/text";
import Alerts from "./parents/Alerts";
import {
  useAdminData,
  useFunctionsData,
  useTranslationsData,
} from "../context";

const AdminFormHolder = (props: {
  header: React.ReactNode;
  main: React.ReactNode;
  children: JSX.Element;
}) => {
  const { page, setPage } = useFunctionsData();
  const { message } = useAdminData();
  const { t } = useTranslationsData();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Alerts severity="success" message={message} />
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
