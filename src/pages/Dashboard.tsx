import { Cards } from "../components";
import { Grid } from "../components/parents/container";

const Dashboard = () => {
  return (
    <>
      <Grid style={{ justifyContent: "space-evenly" }}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Grid>
    </>
  );
};

export default Dashboard;
