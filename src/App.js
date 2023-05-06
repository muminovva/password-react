import React, { useState } from "react";
import './App.css';
function HideAndShowPassword(){
    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
    return(
        <div className="container">
            <input type={show?"text":"password"} />
            <label onClick={handleShow}>{show?<i class="fa-regular fa-eye"></i>:<i class="fa-regular fa-eye-slash"></i>}</label>
        </div>
    );
}
export default HideAndShowPassword;