import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppContextProvider } from "./context/AppContext.tsx";
import { TranslationsContextProvider } from "./context/TranslationContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <TranslationsContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </TranslationsContextProvider>
  </BrowserRouter>
);

postMessage({ payload: "removeLoading" }, "*");
