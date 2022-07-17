import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser?.isAdmin;
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);

  // const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  // const currentUser = user && JSON.parse(user).currentUser;
  // const admin = currentUser?.isAdmin;
  // let navigate = useNavigate();
  const cruse = useSelector((state) => state.user.currentUser);
  // if ((cruse === null)) {
  //   navigate("/login");
  // }

  return (
    <Router>

      {<>{<><Topbar /></>}
        <div className="container">
          {/* <Sidebar /> */}
          {cruse!==null && <><Sidebar /></>}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route exact path="/" element={admin ? <Home /> : <Login />} />
            <Route path="/users" element={admin ? <UserList /> : <Login />} />
            <Route path="/user/:userId" element={admin ? <User /> : <Login />} />
            <Route path="/newUser" element={admin ? <NewUser /> : <Login />} />
            <Route path="/products" element={admin ? <ProductList /> : <Login />} />
            <Route path="/product/:productId" element={admin ? <Product /> : <Login />} />
            <Route path="/newproduct" element={admin ? <NewProduct /> : <Login />} />

          </Routes>
        </div></>}
    </Router>
  );
}

export default App;
