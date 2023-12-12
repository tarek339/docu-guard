import colors from "../../../assets/theme/colors";
import styles from "../../../assets/theme/styles";
import { useTranslationsData } from "../../../context/TranslationContext";
import { ErrorIcon, GppGoodIcon } from "../../icons";
import { Block, Grid, GridColumn, GridNoSpace } from "../container";
import { TextHeader, TextSmall } from "../text";

const ResultsCard = () => {
  const { t } = useTranslationsData();
  const allTrucks = 20;
  const activeTrucks = 20;
  const procent = (activeTrucks * 100) / allTrucks;

  return (
    <Block
      style={{
        borderRadius: "20px",
        boxShadow: styles.shadow,
        height: "110px",
        width: "280px",
        backgroundColor: colors.white,
        padding: "32px 24px 32px 24px",
      }}
    >
      <GridColumn>
        <Grid style={{ height: "100%" }}>
          <GridColumn>
            <TextSmall style={{ textTransform: "uppercase" }}>
              {t("dashboard.Utilization")}
            </TextSmall>
            <TextHeader style={{ transform: "0.5s" }}>
              {`${procent}%`}{" "}
            </TextHeader>
          </GridColumn>
          <GridNoSpace>
            <Block
              style={{
                height: "56px",
                width: "56px",
                borderRadius: "50%",
                backgroundColor: procent < 50 ? colors.error : colors.green,
                color: colors.white,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "0.5s",
              }}
            >
              {procent < 50 ? <ErrorIcon /> : <GppGoodIcon />}
            </Block>
          </GridNoSpace>
        </Grid>
        <Block style={{ position: "relative" }}>
          <Block
            style={{
              height: "4px",
              width: `${procent}%`,
              maxWidth: "100%",
              backgroundColor: procent < 50 ? colors.error : colors.green,
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              transition: "0.5s",
            }}
          ></Block>
          <Block
            style={{
              height: "4px",
              width: "100%",
              backgroundColor: colors.greyLight,
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          ></Block>
        </Block>
      </GridColumn>
    </Block>
  );
};

export default ResultsCard;
