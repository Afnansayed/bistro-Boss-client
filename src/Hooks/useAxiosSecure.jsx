import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();
    const [shouldNavigate, setShouldNavigate] = useState(false);

    useEffect(() => {
        if (shouldNavigate) {
            navigate('/login');
        }
    }, [shouldNavigate, navigate]);

    //request is use for set Headers at one time 
    axiosSecure.interceptors.request.use(function (config){
        const token = localStorage.getItem('access-token');
        //console.log("request stop by interceptors",token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

//response  {*specially this is use for when user are not valid then logOut the user *}
   axiosSecure.interceptors.response.use(function (response){
      return response;
   },async (error) =>{
    const status = error.response.status;
    if(status === 401 || status === 403){
        await logOut();
        setShouldNavigate(true);
    }
      // console.log("Under the response  ",status);
       return Promise.reject(error);
   })      

    return  axiosSecure;
};

export default useAxiosSecure;