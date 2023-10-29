import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL


const userRequest = axios.create({ baseURL: BASE_URL })


export default userRequest;