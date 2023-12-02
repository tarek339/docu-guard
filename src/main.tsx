import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./context/AppContext.tsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <AppContext children={<App />} />
  </BrowserRouter>
);

postMessage({ payload: "removeLoading" }, "*");
