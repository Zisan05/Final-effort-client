import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/' 
})
const UseAxiosPublic = () => {
       return axiosSecure;
};

export default UseAxiosPublic;