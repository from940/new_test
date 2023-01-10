import logo from "./logo.svg";
import "./App.css";
import { CssBaseline, Snackbar, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Routes from "src/routes";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Routes />
    </StyledEngineProvider>
  );
}
