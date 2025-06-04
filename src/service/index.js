import axios from "axios";

export const API = axios.create({
    baseURL: "../src/data"
});