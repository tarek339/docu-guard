import colors from "../../../assets/theme/colors";
import { useTranslationsData } from "../../../context";
import { AddIcon, TbDownload, TbUpload } from "../../icons";
import { AddButton } from "../buttons";
import { Block, Grid, GridNoSpace } from "../container";
import { SearchInput } from "../forms";
import { TextHeader } from "../text";

const Header = (props: { children: React.ReactNode }) => {
  const { t } = useTranslationsData();
  return (
    <Grid style={{ height: "100%", alignItems: "center" }}>
      <Block>
        <Block>
          <TextHeader>{props.children}</TextHeader>
        </Block>
        <GridNoSpace style={{ columnGap: 10 }}>
          <AddButton
            children={"Import"}
            bgColor={"transparent"}
            color={colors.fontBlack}
            disableElevation
            icon={<TbUpload style={{ marginBottom: "2px" }} />}
          />
          <AddButton
            children={"Export"}
            bgColor={"transparent"}
            color={colors.fontBlack}
            disableElevation
            icon={<TbDownload style={{ marginBottom: "2px" }} />}
          />
        </GridNoSpace>
        <Block style={{ marginTop: 10 }}>
          <SearchInput />
        </Block>
      </Block>

      <Block style={{ marginBottom: 10 }}>
        <AddButton
          children={t("main.add")}
          bgColor={colors.purple}
          color={colors.white}
          icon={<AddIcon />}
        />
      </Block>
    </Grid>
  );
};

export default Header;
