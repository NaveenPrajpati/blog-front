import axios from "axios";

const BaseUrl='http://localhost:4000/user';


 export const authUser=(user)=>{
        return axios.post(BaseUrl+"/auth",user);
    }
 export const registerUser=(user)=>{
        return axios.post(BaseUrl+"/register",user);
    }
 export const loginUser=(user)=>{
        return axios.post(BaseUrl+"/login",user);
    }



