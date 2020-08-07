import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Drawler from "./components/Drawler";
import ContentsPages from "./components/ContentsPages";
import GlobalProvider from "./context/GlobalProvider";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#074950",
    },
    secondary: {
      main: "#F2F79E",
    },
  },
});
const App = () => {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Drawler title="BASF CHALLENGE!">
            <ContentsPages />
          </Drawler>
        </Router>
      </ThemeProvider>
    </GlobalProvider>
  );
};

export default App;
