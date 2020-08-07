import React from "react";
import SearchPage from "../../pages/SearchPage";
import DocumentsPage from "../../pages/DocumentsPage";
import AboutPage from "../../pages/AboutPage";
import { Switch, Route } from "react-router-dom";

const ContentsPages = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/documents" component={DocumentsPage} />
        {/* <Route path="/about" component={AboutPage} /> */}
      </Switch>
    </>
  );
};

export default ContentsPages;
