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
import Users from './Pages/Dashboard/Users';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddReview from './Pages/Dashboard/AddReview';
import NotFound from './Pages/Shared/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import MyProtfolio from './Pages/MyProtfolio/MyProtfolio';
import Welcome from './Pages/Dashboard/Welcome';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='blogs' element={<Blogs></Blogs>}></Route>
          <Route path='protfolio' element={<MyProtfolio></MyProtfolio>}></Route>
          <Route path='purchase/:id' element={<RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}></Route>
          <Route path='dashboard' element={<RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
            <Route index element={<Welcome></Welcome>}></Route>
            <Route path='myorders/:email' element={<MyOrders></MyOrders>}></Route>
            <Route path='myprofile/:email' element={<MyProfile></MyProfile>}></Route>
            <Route path='payment/:email/:id' element={<Payment></Payment>}></Route>
            <Route path='users' element={<Users></Users>}></Route>
            <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
            <Route path='manageProducts' element={<ManageProducts></ManageProducts>}></Route>
            <Route path='manageOrders' element={<ManageOrders></ManageOrders>}></Route>
            <Route path='addReview' element={<AddReview></AddReview>}></Route>
          </Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
