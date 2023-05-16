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

  export const savePost =(post)=>{
        return axios.post(BaseUrl,post,config);
    }

  export const getPosts =()=>{
        return axios.get(BaseUrl);
    }

  export const deletePost =(id)=>{
      return axios.delete(BaseUrl+"/"+id,config);
  }

  export const updatePost =(post)=>{
    return axios.put(BaseUrl,post,config);
}

export const updatePostLike =(id)=>{
  return axios.patch(BaseUrl+"/"+id,config);
}

  export const getPostId =(id)=>{
        return axios.get(BaseUrl+"/"+id,config);
    }
  
  
  export const getBookByName =(name)=>{
        
        return axios.get(BaseUrl+name);
    }
  export const getBookByAuthor =(author)=>{
        
        return axios.get(BaseUrl+author);
    }

   
