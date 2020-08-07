import React from "react";
import { Typography } from "@material-ui/core";
import SubTitle from "../components/SubTitle/SubTitle";

const AboutPage = () => {
  return (
    <>
      <SubTitle value="About" />
      <Typography component={"p"} variant={"body2"}>
        Leonardo Vivanco
      </Typography>
    </>
  );
};

export default AboutPage;
