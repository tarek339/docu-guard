import colors from "../assets/theme/colors";
import { Block, Grid } from "../components/parents/container";

import { OverviewCards, ResultsCard } from "../components/parents/cards";
import {
  PeopleAltIcon,
  LocalShippingIcon,
  RvHookupIcon,
} from "../components/icons";
import { useTranslationsData } from "../context/TranslationContext";
import { useData } from "../context/AppContext";

const Dashboard = () => {
  const { t } = useTranslationsData();
  const { drivers, trucks, trailers } = useData();
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
