import colors from "../assets/theme/colors";
import { Block, Grid, GridColumn, GridNoSpace } from "./parents/container";
import { TextHeader, TextSmall } from "./parents/text";

const Cards = (props: {
  header: React.ReactNode;
  main: React.ReactNode;
  sectionOne: React.ReactNode;
  sectionTwo: React.ReactNode;
  icon: JSX.Element;
  color: string;
}) => {
  return (
    <Block
      style={{
        borderRadius: "20px",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.08)",
        height: "111px",
        width: "282px",
        backgroundColor: colors.white,
        padding: "32px 24px 32px 24px",
      }}
    >
      <Grid style={{ height: "100%" }}>
        <GridColumn>
          <TextSmall style={{ textTransform: "uppercase" }}>
            {props.header}
          </TextSmall>
          <TextHeader>{props.main} </TextHeader>
          <GridNoSpace style={{ columnGap: "20px" }}>
            <TextSmall style={{ color: colors.green }}>
              {props.sectionOne}{" "}
            </TextSmall>
            <TextSmall>{props.sectionTwo}</TextSmall>
          </GridNoSpace>
        </GridColumn>
        <GridNoSpace>
          <Block
            style={{
              height: "56px",
              width: "56px",
              borderRadius: "50%",
              backgroundColor: props.color,
              color: colors.white,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.icon}
          </Block>
        </GridNoSpace>
      </Grid>
    </Block>
  );
};

export default Cards;
