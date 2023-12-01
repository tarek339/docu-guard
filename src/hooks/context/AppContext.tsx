import { AdminContextProvider } from "./AdminContext";
import { DriverContextProvider } from "./DriversContext";
import { FunctionsContextProvider } from "./FunctionsContext";
import { TrailersContextProvider } from "./TrailerContext";
import { TrucksContextProvider } from "./TrucksContext";

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
