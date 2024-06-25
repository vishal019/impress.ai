import React, { useState } from "react";
import '../assets/css/style.css';

const InputHandler = ({ onSubmit, editMode = false }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
      
    if (!name || !email){
    alert('please enter the name and email');
    } 
    else if(email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
      onSubmit({ name, email });
      return;

    }else{
      alert('please enter the valid email');
    }
    
    


    

  };

  return (
    <div className="header-box">
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      /> <br/><br/>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
       />
      <br/><br/>
      <button type="primary" onClick={(e)=>handleSubmit(e)}>
        {!!editMode ? "Edit user" : "Add user"}
      </button>
      <br/>
    </div>
    
  );
};

export default InputHandler;
