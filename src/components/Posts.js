import React, { createContext, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, getPostId, getPosts, updatePostLike } from '../service/PostService'
import { MoonLoader } from 'react-spinners'
import { postArray, setLoading, setError, setUpdateBtn, setUpdateId, getAllPost, removePost, likePost, setEnableDetail} from '../redux/slices/postsSlice'
import { HiDotsHorizontal, HiThumbUp, HiXCircle,HiOutlineThumbUp} from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Moment from 'react-moment'
import PostDetail from '../pages/PostDetail'
import { Await, useNavigate } from 'react-router-dom'
import { setShowDetail } from '../redux/slices/postDetailSlice'

function Posts({currentItems}) {
    const[showDetail,setShowDetail]=useState({})
    const { postData, loading,isLiked,enableDetail,status} = useSelector(state => state.postState)
    const {userData} = useSelector(state => state.navbarState)
    const dispatch = useDispatch()

    const navigate=useNavigate();


    useEffect(() => {
        
        dispatch(getAllPost());

    }, [dispatch]);

  
    
    const handleEdit = (id) => {
        dispatch(setUpdateId(id))
        dispatch(setUpdateBtn(true))
    }

const handleLike=(id)=>{
    dispatch(likePost(id))

}

    const handleDelete = (pid) => {
        dispatch(removePost(pid))         
                toast.success(`delete success`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
         
    }

    function hashTags(array){
        let words = array[0].split(' ');
        let wordsWithHash = words.map(function(word) {
            return '#' + word;
        });
        let result = wordsWithHash.join(' ');
        return result;
    }

    function checkLike(li){
      const index=  li.findIndex(lis=>{return lis==userData.id})
      if(index==-1)
      return <><HiOutlineThumbUp /><span>{li.length}</span></>
      else
      return <><HiThumbUp /><span>{li.length}</span></>
    }

   const handleDetail=(item)=>{
        setShowDetail(item)
        dispatch(setEnableDetail(true))
    }

    return (
        <div className=''>
           {loading && <MoonLoader color="#36d7b7"  />}
            <ToastContainer />
            {enableDetail &&  <div className=''><PostDetail showDetail={showDetail}/></div>}
           {!enableDetail &&
            <ul className='flex flex-wrap  gap-5'>
                {currentItems.map((item,index) =>{ return(

        

                    <li className='' key={index}>
                        <div className={`w-[300px] h-80 bg-white border border-gray-200 rounded-lg shadow-2xl cursor-pointer hover:bg-gray-100`} >
                            <div className='w-full  h-[160px] relative '>
                                <img src={item.imageFile} alt="image" className='object-fill rounded-t-lg h-full  w-full absolute hover:scale-105' onClick={()=>handleDetail(item)}/>
                                <div className='flex absolute items-center w-full justify-between px-1'>
                                <div>
                                    <p className='text-slate-500 font-bold'>{item.creator}</p>
                                    
                                    <p className=' text-xs text-slate-400 font-semibold leading-3'><Moment fromNow>{item.createdAt}</Moment></p>
                                </div>

                                {(userData.id===item.creatorId) &&
                                    <div className=" relative flex justify-center cursor-pointer">
                                        <HiDotsHorizontal className='text-slate-400 font-bold' onClick={() => handleEdit(item._id)} />
                                        <span className="absolute -top-5 scale-0 rounded bg-gray-600 text-white text-sm">edit</span>
                                    </div>
                                }

                                </div>
                            </div>
                            <div className="px-2">
                                <h5 className="text-sm text-slate-500 font-semibold">{hashTags(item.tags)}</h5>
                                <div className='flex flex-col mt-3 justify-between h-28'>

                                <div className=''>
                                <h5 className="mb-1 text-lg font-bold ">{item.title}</h5>
                                <p className="mb-1 text-slate-700 font-medium leading-3">{item.message}</p>
                                </div>

                                <div className="flex justify-between">
                                <div className='flex items-center text-blue-600 cursor-pointer' onClick={()=>handleLike(item._id)}>
                                       {checkLike(item.likes)}
                                    </div>
                                    {(userData.id===item.creatorId) &&
                                    <div className='flex text-red-500 items-center cursor-pointer' onClick={() => handleDelete(item._id)}>
                                        <HiXCircle />Delete
                                    </div>
                                    }
                                </div>
                                </div>
                            </div>
                        </div>
                    </li>
                )})
                }
            </ul>
           }
        </div>
    );
}

export default Posts