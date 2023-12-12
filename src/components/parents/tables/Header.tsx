import colors from "../../../assets/theme/colors";
import { useTranslationsData } from "../../../context/TranslationContext";
import { IHeader } from "../../../types/interfaces";
import { AddIcon, TbDownload } from "../../icons";
import { AddButton } from "../buttons";
import { Block, Grid, GridNoSpace } from "../container";
import { SearchInput } from "../forms";
import { TextHeader } from "../text";

const Header = (props: IHeader) => {
  const { t } = useTranslationsData();
  return (
    <Grid style={{ height: "100%", alignItems: "center" }}>
      <Block>
        <Block>
          <TextHeader>{props.headerChildren}</TextHeader>
        </Block>
        <GridNoSpace style={{ columnGap: 10 }}>
          <AddButton
            children={"Export"}
            bgColor={"transparent"}
            color={colors.fontBlack}
            disableElevation
            icon={<TbDownload style={{ marginBottom: "2px" }} />}
            onClick={props.onClickImport}
          />
        </GridNoSpace>
        <Block>
          <SearchInput />
        </Block>
      </Block>

      <Block>
        <AddButton
          children={t("main.add")}
          bgColor={colors.purple}
          color={colors.white}
          icon={<AddIcon />}
          onClick={props.onClick}
        />
      </Block>
    </Grid>
  );
};

export default Header;
