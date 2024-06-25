// import { React } from "react";
import '../assets/css/style.css';
import { Button, EditableText } from "@blueprintjs/core"
import React, { useEffect } from "react";
import { useState } from 'react';


const SimpleTable = ({ dataSource }) => {

  const [updatestate, setupdatestate] = useState(-1);

 const update_user = (id)=>{

  setupdatestate(id);

 }

  const delete_user = (id)=>{
    fetch(`http://example.com/user/${id}`,{
      method:'DELETE'
    }).then((result)=>{

      result.json().then((resp)=>{

        console.warn(resp);
        
      
      })
    })
  
 }; 

 function Edit( item,index){

  function handleinput(e){
  const newList = dataSource.map(li=>(
    li.id === item.item.id ? {...li,[e.target.name]:e.target.value}: li
    
  ))

  }

  return(
    <>

    
    <tr>
      <td>{item.item.id}</td>
     <td> <input type="text" name="name" placeholder="Name" onChange={handleinput} defaultValue={item.item.name} /></td>

   <td><input type="email" name="email" placeholder="email" onChange={handleinput} defaultValue={item.item.email} /></td>

    <td> <button type='submit'>Update</button></td>
    
    </tr>
    </>
  )
 }


 function handleupdate(e){

  setupdatestate(-1);
  e.preventDefault();

 }
 
 

 

  return (
    <div>
      {dataSource.length ? (
        <>

          <div classname="table">
            <form onSubmit={handleupdate}> 
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>

                {dataSource.map((item, index) => {
                  
                  return (
                    updatestate == item.id ? <Edit item={item} index={index} />:
                
                <tr key={index}>
                  
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  {/* <td> <EditableText value={item.name} /></td>
                  <td> <EditableText value={item.} /></td> */}

                  <td> <button onClick={()=>update_user(item.id)}>Edit</button>  <button id="delete" onClick={()=>delete_user(item.id)} >Delete</button></td>
                </tr>
                 );
                
              })}
              </tbody>
            </table>
            </form>
          </div>


{/*         
          {dataSource.map((item, index) => {
            return (
              <div key={index}>
                <div>Id: {item.id}</div>
                <div>Name: {item.name}</div>
                <div>Email: {item.email}</div>
              </div>
            );
          })} */}
        </>
      ) : (
        "No user data"
      )}
    </div>
  );
};


export default SimpleTable;
