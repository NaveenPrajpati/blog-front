import axios from 'axios';


const BaseUrl=`http://localhost:4000/post`;


  export const savePost =(post)=>{
        return axios.post(BaseUrl,post);
    }

  export const getPosts =()=>{
        return axios.get(BaseUrl);
    }

  export const deletePost =(id)=>{
      return axios.delete(BaseUrl+"/"+id);
  }

  export const updatePost =(Book,id)=>{
    return axios.put(BaseUrl+"/"+id,Book);
}

export const updatePostLike =(id)=>{
  return axios.patch(BaseUrl+"/"+id);
}

  export const getPostId =(id)=>{
        return axios.get(BaseUrl+"/"+id);
    }
  
  
  export const getBookByName =(name)=>{
        
        return axios.get(BaseUrl+name);
    }
  export const getBookByAuthor =(author)=>{
        
        return axios.get(BaseUrl+author);
    }

   
