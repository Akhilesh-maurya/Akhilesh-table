import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./Demo";
import BuSimpleTable from "./Table";

const columns = [{ label: "time", viewType: "time", name: "time" }];
const rows = [{ name: "time", id: "time", label: "Akhilesh" }];
ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Demo />
      <BuSimpleTable columns={columns} rows={rows} />
    </StyledEngineProvider>
  </React.StrictMode>,
);
