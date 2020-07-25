import React, { useState, useEffect } from "react";
import { get } from "lodash";
import Drawler from "./components/Drawler";
import ContentsPages from "./components/ContentsPages";
import axiosInstance from "./api/axiosInstance";
import { API_MENU_LIST } from "./API_Routes";

const App = () => {
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(API_MENU_LIST)
      .then((resp) => {
        const respData = get(resp, "data");
        if (respData) {
          setMenuList([...respData]);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Drawler title="BASF CHALLANGE!" menuList={menuList}>
        <ContentsPages />
      </Drawler>
    </>
  );
};

export default App;
