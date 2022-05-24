import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Purchase from './Pages/Dashboard/Purchase';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='purchase/:id' element={<RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}></Route>
          <Route path='dashboard' element={<RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
            <Route path='myorders/:email' element={<MyOrders></MyOrders>}></Route>
            <Route path='myprofile/:email' element={<MyProfile></MyProfile>}></Route>
            <Route path='payment/:email/:id' element={<Payment></Payment>}></Route>
          </Route>
        </Routes>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
