import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Drawler from "./components/Drawler";
import ContentsPages from "./components/ContentsPages";
import GlobalProvider from "./context/GlobalProvider";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Drawler title="BASF CHALLANGE!">
          <ContentsPages />
        </Drawler>
      </Router>
    </GlobalProvider>
  );
};

export default App;
