import axios from 'axios';


const BaseUrl=`http://localhost:4000/post`;
// Request interceptors for API calls
// axios.interceptors.request.use(
//   config => {
//     if(localStorage.getItem('userData'))
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

const token=()=>{
  if(localStorage.getItem('userData'))
  return JSON.parse(localStorage.getItem('userData')).token
}
const config={
  headers:{
    Authorization:`${"Bearer "+ token()}`
  }
}

  export const saveComment =(comment)=>{
        return axios.post(BaseUrl+"/comment",comment,config);
    }

  export const getComments =()=>{
        return axios.get(BaseUrl+"/comment");
    }

  export const deleteComment =(id)=>{
      return axios.delete(BaseUrl+"/"+id,config);
  }




    
   
