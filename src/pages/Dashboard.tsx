import colors from "../assets/theme/colors";
import { Block, Grid } from "../components/parents/container";
import {
  useDriversData,
  useTrailersData,
  useTranslationsData,
  useTrucksData,
} from "../context";
import { OverviewCards, ResultsCard } from "../components/parents/cards";
import {
  PeopleAltIcon,
  LocalShippingIcon,
  RvHookupIcon,
} from "../components/icons";

const Dashboard = () => {
  const { t } = useTranslationsData();
  const { drivers } = useDriversData();
  const { trucks } = useTrucksData();
  const { trailers } = useTrailersData();
  return (
    <Block style={{ maxWidth: "1400px", margin: "0 auto" }}>
      <Grid>
        <OverviewCards
          header={t("dashboard.totalDrivers")}
          main={drivers.length}
          sectionOne={"24"}
          sectionTwo={t("dashboard.totalActive")}
          icon={<PeopleAltIcon />}
          color={colors.purple}
        />
        <OverviewCards
          header={t("dashboard.totalTrucks")}
          main={trucks.length}
          sectionOne={"25"}
          sectionTwo={t("dashboard.totalActive")}
          icon={<LocalShippingIcon />}
          color={colors.purple}
        />
        <OverviewCards
          header={t("dashboard.totalTrailers")}
          main={trailers.length}
          sectionOne={"20"}
          sectionTwo={t("dashboard.totalActive")}
          icon={<RvHookupIcon />}
          color={colors.purple}
        />
        <ResultsCard />
      </Grid>
    </Block>
  );
};

export default Dashboard;
