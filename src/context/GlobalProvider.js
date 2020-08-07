import React, { createContext, useState, useEffect } from "react";
import { getCsv1, getCsv2, getLinks } from "../api/documents";
import { useDebounce } from "../hooks/useDebounce";
export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [menuList, setMenuList] = useState([]);
  const [csv1, setCsv1] = useState([]);
  const [csv2, setCsv2] = useState([]);
  const [search, setSearch] = useState("");
  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(() => {
    getLinks().then((resp) => setMenuList([...resp]));
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm && debouncedSearchTerm.length > 2) {
      getCsv1(search).then((resp) => setCsv1([...resp]));
      getCsv2(search).then((resp) => setCsv2([...resp]));
    } else {
      setCsv1([]);
      setCsv2([]);
    }
  }, [search, debouncedSearchTerm]);

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
