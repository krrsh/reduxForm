import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { setData, removeData } from "../../slices/dataSlice";



const Navbar = () => {
  const data = useSelector((state)=>state.dataInfo.data);
  const dispatch = useDispatch();

  const handleLoginBtn = ()=>{
    dispatch(setData({
      name:"Butcher"
    }))
  }

  const handleLogoutBtn = ()=>{
    dispatch(removeData())
  }

  return (
    <div className="container">
      <h1 className="heading">FormsAndAbout</h1>
      <ul className="listcontainer">
        <Link className="linktxt" to="/">Home</Link>
        <Link className="linktxt" to="/forms">Forms</Link>
        <Link className="linktxt" to="/about">About</Link>
      </ul>
      {!data &&(
        <button onClick={handleLoginBtn} className="loginBtn">Login</button>
      )}
      {data &&(
      <button onClick={handleLogoutBtn} className="logoutBtn">Logout</button>
      )}
    </div>
  );
};

export default Navbar;
