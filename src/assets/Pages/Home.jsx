import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../slices/userSlice";


const Home = () => {

  const dispatch = useDispatch()

  const [forminput, setForminput] = useState({
    name:"",
    age:"",
    email:"",
    contact:"",
    city:""
  });

  const data = useSelector((state)=>state.dataInfo.data)


  const handlechange = (event)=>{
    const {name, value} = event.target;

    setForminput((currValue)=>{
      return {...currValue,
        [name]:value
      }
    })
  }


  const handleClick = (event)=>{
    event.preventDefault();
    dispatch(setUsers(forminput));
    setForminput({
      name:"",
      age:"",
      email:"",
      contact:"",
      city:""
    })
  }


  return (
    <>
    {!data &&(      <h1 className="loginTxt">LOGIN TO CONTINUE</h1>)}
    {data &&(
      <><form className="formcontainer">
      <div>
        <h2>Name:</h2>
        <input name="name" type="text" onChange={(event)=>handlechange(event)} value={forminput.name}/>
      </div>
      <div>
        <h2>Age:</h2>
        <input name="age" type="number" onChange={handlechange} value={forminput.age}/>
      </div>
      <div>
        <h2>Email ID:</h2>
        <input name="email" type="text" onChange={handlechange} value={forminput.email}/>
      </div>
      <div>
        <h2>ContactNo.:</h2>
        <input name="contact" type="number" onChange={handlechange} value={forminput.contact}/>
      </div>
      <div>
        <h2>City</h2>
        <input name="city" type="text" onChange={handlechange} value={forminput.city}/>
      </div>
      <button onClick={handleClick} >Add the details to Forms</button>
    </form>

    <form className="aboutcontainer">
      <input  className="aboutyou" type="text" placeholder="Enter details about you"  />
      <button>Add the details to About page</button>
    </form></>
    )}
      
    </>
  );
};

export default Home;
