import React, { createContext, useState, useEffect } from "react";
import { getCsv1, getCsv2, getLinks } from "../api/documents";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [menuList, setMenuList] = useState([]);
  const [csv1, setCsv1] = useState([]);
  const [csv2, setCsv2] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getLinks().then((resp) => setMenuList([...resp]));
  }, []);

  useEffect(() => {
    getCsv1(search).then((resp) => setCsv1([...resp]));
    getCsv2(search).then((resp) => setCsv2([...resp]));
  }, [search]);

  // useEffect(() => {
  //   (async function () {
  //     const dataCvs1 =  getCsv1(search);
  //     const dataCvs2 =  getCsv2(search);
  //     setCsv2(dataCvs1);
  //     setCsv1(dataCvs2);
  //   })();
  // }, [search, csv1, csv2]);

  //Actions
  // const removeUser = (id) => {
  //   dispatch({
  //     type: "REMOVE_USER",
  //     payload: id,
  //   });
  // };

  // const editUser = (user) => {
  //   dispatch({
  //     type: "EDIT_USER",
  //     payload: user,
  //   });
  // };

  // const addUser = (user) => {
  //   dispatch({
  //     type: "ADD_USER",
  //     payload: user,
  //   });
  // };

  return (
    <GlobalContext.Provider value={{ menuList, csv1, csv2, setSearch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
