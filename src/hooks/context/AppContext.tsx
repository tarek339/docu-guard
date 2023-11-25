import { AdminContextProvider } from "./admin/AdminContext";
import { DriverContextProvider } from "./drivers/DriversContext";
import { FunctionsContextProvider } from "./functions/FunctionsContext";

const AppContext = (props: { children: JSX.Element }) => {
  return (
    <div>
      <AdminContextProvider>
        <FunctionsContextProvider>
          <DriverContextProvider>{props.children}</DriverContextProvider>
        </FunctionsContextProvider>
      </AdminContextProvider>
    </div>
  );
};

export default AppContext;
