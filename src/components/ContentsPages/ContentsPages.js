import React from "react";
import HomePage from "../../Pages/HomePage";
import SearchPage from "../../Pages/SearchPage";
import DocumentsPage from "../../Pages/DocumentsPage";
import AboutPage from "../../Pages/AboutPage";
import { Switch, Route } from "react-router-dom";

const ContentsPages = () => {
  return (
    <>
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/" component={SearchPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/documents" component={DocumentsPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </>
  );
};

export default ContentsPages;
