import { SideBar } from "../components";
import { Block } from "../components/parents/container";
import Dashboard from "./Dashboard";

const Holder = () => {
  return (
    <Block>
      <SideBar />
      <Dashboard />
    </Block>
  );
};

export default Holder;
