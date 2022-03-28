import axios from "axios";
import { variables } from "./variable";

export const baseUrl = 'https://api.themoviedb.org/3/';
export const baseImgUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';


export const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  params: {
    api_key: variables?.basePath,
  }
});

