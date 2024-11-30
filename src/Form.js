import React, { useEffect, useState } from 'react'

function Form(){
      const data= {name:"", email:"", password:""};
      const [inputDate, setInputDate]= useState(data)
      const [flag, setFlag]= useState(false)
      useEffect(()=>{
        console.log("Registered")
      },[flag])
      function handleData(e){
        setInputDate({...inputDate,[e.target.name]:e.target.value})
        //console.log(inputDate)
      }
      function handleSubmit(e){
        e.preventDefault();
        if(!inputDate.name || !inputDate.email ||
             !inputDate.password ){
                alert("All fields are mandatory")
             }
        else{
            setFlag(true)
        }
      }
    return(
        <>
        <pre>{(flag)?<h2 className='ui-define'>Hello {inputDate.name}, You have Registered Successfully</h2>:""}</pre>
        <form className='container' onSubmit={handleSubmit}>
            <div className='header'>
                <h1>Registration From</h1>
            </div>
            <div>
                <input type="text" placeholder='Enter Your Name'
                 name='name' value={inputDate.name} onChange={handleData}/>
            </div>
            <div>
                <input type="text" placeholder='Enter Your Email' 
                name='email' value={inputDate.email} onChange={handleData}/>
            </div>
            <div>
                <input type="password" placeholder='Enter Your Password' 
                name='password' value={inputDate.password} onChange={handleData}/>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>

        </form>
        </>
    )
}

export default Form