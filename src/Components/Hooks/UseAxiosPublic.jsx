import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://final-effort-server-puce.vercel.app/' 
})
const UseAxiosPublic = () => {
       return axiosSecure;
};

export default UseAxiosPublic;