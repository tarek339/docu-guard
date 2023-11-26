import { AdminContextProvider } from "./admin/AdminContext";
import { DriverContextProvider } from "./drivers/DriversContext";
import { FunctionsContextProvider } from "./functions/FunctionsContext";
import { TrailersContextProvider } from "./trailers/TrailerContext";
import { TrucksContextProvider } from "./trucks/TrucksContext";

const AppContext = (props: { children: JSX.Element }) => {
  return (
    <div>
      <AdminContextProvider>
        <FunctionsContextProvider>
          <TrucksContextProvider>
            <TrailersContextProvider>
              <DriverContextProvider>{props.children}</DriverContextProvider>
            </TrailersContextProvider>
          </TrucksContextProvider>
        </FunctionsContextProvider>
      </AdminContextProvider>
    </div>
  );
};

export default AppContext;
