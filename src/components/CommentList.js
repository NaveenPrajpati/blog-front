import React from 'react'
import { useSelector } from 'react-redux'

function CommentList({comments}) {
    const { postData, loading,isLiked,enableDetail} = useSelector(state => state.postState)
  return (
    <div>
          <ul className='h-[150px] overflow-auto'>
                        {comments.map((itm,ind)=>{return (

                            <li key={ind}><strong className=''>{itm.split(' ')[0]} </strong> {itm.split(' ')[1]}</li>
                        )})}
                      
                        </ul>
    </div>
  )
}

export default CommentList