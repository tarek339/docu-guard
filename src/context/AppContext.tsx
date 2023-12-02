import { AdminContextProvider } from "./AdminContext";
import { DriverContextProvider } from "./DriversContext";
import { FunctionsContextProvider } from "./FunctionsContext";
import { TrailersContextProvider } from "./TrailerContext";
import { TranslationsContextProvider } from "./TranslationContext";
import { TrucksContextProvider } from "./TrucksContext";

const AppContext = (props: { children: JSX.Element }) => {
  return (
    <div>
      <TranslationsContextProvider>
        <AdminContextProvider>
          <FunctionsContextProvider>
            <TrucksContextProvider>
              <TrailersContextProvider>
                <DriverContextProvider>{props.children}</DriverContextProvider>
              </TrailersContextProvider>
            </TrucksContextProvider>
          </FunctionsContextProvider>
        </AdminContextProvider>
      </TranslationsContextProvider>
    </div>
  );
};

export default AppContext;
