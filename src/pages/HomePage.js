import React from "react";
import { Typography } from "@material-ui/core";

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <Typography component={"p"} variant={"body2"}>
        Thank you for visiting our spacecraft!
      </Typography>
    </>
  );
};

export default HomePage;
