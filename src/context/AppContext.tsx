import {
  TranslationsContextProvider,
  AdminContextProvider,
  FunctionsContextProvider,
  TrucksContextProvider,
  TrailersContextProvider,
  DriverContextProvider,
} from ".";

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
