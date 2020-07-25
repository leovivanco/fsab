import React from "react";
import HomePage from "../../Pages/HomePage";
import SearchPage from "../../Pages/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const ContentsPages = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </Router>
    </>
  );
};

export default ContentsPages;
