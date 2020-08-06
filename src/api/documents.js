import axiosInstance from "./axiosInstance";
import { get } from "lodash";
import { API_ITEMS_csv1, API_ITEMS_csv2, API_MENU_LIST } from "../API_Routes";

export const getCsv1 = (query) => {
  //.get(`${API_ITEMS_csv1}?[chemical%20type%201_like]=${search}`)
  return axiosInstance
    .get(`${API_ITEMS_csv1}?q=${query}`)
    .then((resp) => (get(resp, "data") ? get(resp, "data") : []))
    .catch((resp) => `Error, ${resp}`);
};

export const getCsv2 = (query) => {
  //.get(`${API_ITEMS_csv1}?[chemical%20type%201_like]=${search}`)
  return axiosInstance
    .get(`${API_ITEMS_csv2}?q=${query}`)
    .then((resp) => (get(resp, "data") ? get(resp, "data") : []))
    .catch((resp) => `Error, ${resp}`);
};

export const getLinks = (query) => {
  return axiosInstance
    .get(API_MENU_LIST)
    .then((resp) => (get(resp, "data") ? get(resp, "data") : []))
    .catch((resp) => `Error, ${resp}`);
};
