import BookListEdit from './pages/BookListEdit';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { Provider } from 'react-redux';
import { postStore } from './redux/store';
import Homapage from './pages/Homapage';

function App() {

  return (
    <div  className=" bg-gradient-to-b from-teal-100 to-teal-500 h-[100vh]">

<Provider store={postStore}>
<Routes>
<Route path='/' element={<Homapage/>}></Route>
<Route path='/login' element={<Login/>} ></Route>

<Route path='/signup' element={<Signup/>} ></Route>
<Route path='/edit/:id' element={<BookListEdit/>}></Route>

</Routes>
</Provider>
    </div>
  );
}

export default App;
