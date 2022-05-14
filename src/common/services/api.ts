import axios from "axios";

export const API = axios.create({
  baseURL: "https://fresh-fruit-a2c8b-default-rtdb.firebaseio.com/"
})