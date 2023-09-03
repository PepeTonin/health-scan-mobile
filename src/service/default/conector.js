import axios from "axios";
import { defaultUrl } from "./baseUrlService";

const baseUrl = defaultUrl;

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

export function post(url, data) {
  console.log(data)
  console.log(`${baseUrl}${url}` )
  return axios({
    method: "POST",
    data: data,
    url: `${baseUrl}${url}`,
  });
}
