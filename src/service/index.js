import axios from "axios";

// busca no banco de dados de teste (pasta data)
export const API = axios.create({
    baseURL: "../src/data"
});