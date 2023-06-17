import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import Posts from './Posts';


export default function Pagination({ itemsPerPage }){

  const { postData} = useSelector(state => state.postState)
  const { searchOpt} = useSelector(state => state.navbarState)
  const [startIndex, setStartIndex] = useState(0);

  const endIndex = startIndex + itemsPerPage;
  let currentItems;
  let pageCount;
  if(!searchOpt){
   currentItems = postData.slice(startIndex, endIndex);
   pageCount = Math.ceil(postData.length / itemsPerPage);
  }
  else{
    currentItems = postData.filter(it=>{return it.title.startsWith(searchOpt)}).slice(startIndex, endIndex);
   pageCount = Math.ceil(postData.filter(it=>{return it.title.startsWith(searchOpt)}).length / itemsPerPage);

  }
  
 

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newIndex = (event.selected * itemsPerPage) % postData.length;
    setStartIndex(newIndex);
  };

  return (
    <div className='flex flex-col gap-11 items-center'>
      <Posts currentItems={currentItems} />
      <ReactPaginate
      className='flex justify-center font-semibold text-slate-600  gap-4  bottom-5 '
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}