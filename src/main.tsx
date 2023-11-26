import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./hooks/context/AppContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <AppContext children={<App />} />
  </BrowserRouter>
);

postMessage({ payload: "removeLoading" }, "*");
