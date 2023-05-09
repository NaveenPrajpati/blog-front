import BookListEdit from './pages/BookListEdit';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { createContext, useContext, useState } from 'react';

import { Provider } from 'react-redux';
import { postStore } from './redux/store';
import Homapage from './pages/Homapage';

export const myContext=createContext()
function App() {
  const[apiData,setApiData]=useState([])
const value={
apiData,setApiData
}
  return (
    <div  className="bgHome h-full sm:h-[100vh]">

<Provider store={postStore}>
<myContext.Provider value={value}>
<Routes>
<Route path='/' element={<Login/>} ></Route>
<Route path='/home' element={<Homapage/>}></Route>

<Route path='/signup' element={<Signup/>} ></Route>
<Route path='/edit/:id' element={<BookListEdit/>}></Route>

</Routes>
</myContext.Provider>
</Provider>
    </div>
  );
}

export default App;
