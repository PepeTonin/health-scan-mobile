import axios from "axios";
import { defaultUrl, apiProduto } from "./baseUrlService";

const baseUrl = defaultUrl;
const baseUrlApiProduto = apiProduto;

//api
export function getApiProduto(url) {
  return axios({
    method: "GET",
    url: `${baseUrlApiProduto}${url}`,
  });
}

//server
export function get(url) {
  return axios({
    method: "GET",
    url: `${baseUrl}${url}`,
  });
}

export function put(url, data) {
  return axios({
    method: "PUT",
    data: data,
    url: `${baseUrl}${url}`,
  });
}

export function del(url) {
  return axios({
    method: "DELETE",
    url: `${baseUrl}${url}`,
  });
}

export function post(url, data) {
  return axios({
    method: "POST",
    data: data,
    url: `${baseUrl}${url}`,
  });
}
