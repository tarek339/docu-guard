import colors from "../assets/theme/colors";
import { Cards } from "../components";
import { Grid } from "../components/parents/container";
import {
  useDriversData,
  useTrailersData,
  useTranslationsData,
  useTrucksData,
} from "../context";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RvHookupIcon from "@mui/icons-material/RvHookup";
import GppGoodIcon from "@mui/icons-material/GppGood";

const Dashboard = () => {
  const { t } = useTranslationsData();
  const { drivers } = useDriversData();
  const { trucks } = useTrucksData();
  const { trailers } = useTrailersData();
  return (
    <>
      <Grid style={{ justifyContent: "center", columnGap: "30px" }}>
        <Cards
          header={t("dashboard.totalDrivers")}
          main={drivers.length}
          sectionOne={"24"}
          sectionTwo={t("dashboard.totalActive")}
          icon={<PeopleAltIcon />}
          color={colors.purple}
        />
        <Cards
          header={t("dashboard.totalTrucks")}
          main={trucks.length}
          sectionOne={"25"}
          sectionTwo={t("dashboard.totalActive")}
          icon={<LocalShippingIcon />}
          color={colors.purple}
        />
        <Cards
          header={t("dashboard.totalTrailers")}
          main={trailers.length}
          sectionOne={"20"}
          sectionTwo={t("dashboard.totalActive")}
          icon={<RvHookupIcon />}
          color={colors.purple}
        />
        <Cards
          header={t("dashboard.Utilization")}
          main={`${"75"}%`}
          sectionOne={""}
          sectionTwo={""}
          icon={<GppGoodIcon />}
          color={colors.green}
        />
      </Grid>
    </>
  );
};

export default Dashboard;
