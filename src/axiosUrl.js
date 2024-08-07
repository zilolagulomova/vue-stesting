import axios from "axios";
const axiosUrl = axios.create({
    baseURL: "https://qlapi.stesting.uz/api/v1/",
})
export default axiosUrl;