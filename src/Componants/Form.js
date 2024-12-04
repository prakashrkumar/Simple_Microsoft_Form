import React, { useState } from 'react'
import "./Form.css"
import image1 from "../Assest/image1.jpg"



const Form = () => {
    const data={
           username:"",
           email:"",
           mob:"",
          password:"",
          confirmpassword:""
    }
    const [error,seterror]=useState({})
    const[user,setuser]=useState(data)
    const[flag,setflag]=useState(false)
    const handeler=(e)=>{
        
        setuser({...user,[e.target.name]:e.target.value})
    }
    const handler1=(e)=>{
      e.preventDefault()
      // concept of Validation

      const newerror={}
      /*if(user.username==""){
      //seterror({username:"please Enter the username"})
      newerror.username="please Enter the username"
      }*/

      // dondo equal hai
      if(!user.username){
      //seterror({username:"please Enter the username"})
      newerror.username="please Enter the username"
      }
      else if(user.username.length<=3 ||user.username.length>=15){
        newerror.username="username between 3 to 15 character"
      }
      if(user.email==""){
        //seterror({email:"please Enter the email"})
         newerror.email="please Enter the email"
        }
        else if(user.email.indexOf('@')<=0){
       newerror.email="'@' is invalied positon"
        }
        else if((user.email.charAt(user.email.length-4)!=".")&& (user.email.charAt(user.email.length-3)!=".")){
          newerror.email="'@' is invalied positon"
        } 
        if(user.mob==""){
          //seterror({mob:"please Enter the mob"})
           newerror.mob="'.' invalied position"
          }
          else if(isNaN(user.mob)|| user.mob.length!=10){
            newerror.mob="Enter valied mob number"
          }
          if(user.password==""){
            //seterror({password:"please Enter the password"})
             newerror.password="please Enter the password"
            }
            else if(user.password.length<5 || user.password.length>15){
              newerror.password="password must between 5 to 15"
              }
            if(user.confirmpassword==""){
              //seterror({confirmpassword:"please Enter the confirmpassword"})
               newerror.confirmpassword="please Enter the confirmpassword"
              }
              else if(user.password!=user.confirmpassword){
                newerror.confirmpassword="password does not match"
              }
              else{
                setflag(true)

              }
              seterror(newerror)
        
      
    
  









         
    }
  return (
    <>
    <h1>{flag? <p>{user.username} you have registered successfully</p>:""}</h1>
    <div className="form_container">
    
      
    <div className='insta_logo'>
        <img src={image1} alt='Microsoftlogo' style={{width:"500px"}}/>
    </div>
    <form className='form' onSubmit={handler1}>
    <div className='form_group'>
    <input type='text' placeholder='username' onChange={handeler} value={user.username} name='username'/>
    <span style={{color:"red"}}>{error.username}</span>
    </div>
    <div className='form_group'>
    <input type='text' placeholder='Email'onChange={handeler} value={user.email} name='email'/>
    <span style={{color:"red"}}>{error.email}</span>
    </div>
    <div className='form_group'>
    <input type='text' placeholder='Mobile Number'onChange={handeler} value={user.mob} name='mob'/>
    <span style={{color:"red"}}>{error.mob}</span>
    </div>
    <div className='form_group'>
    <input type='password' placeholder='password' onChange={handeler} value={user.password} name='password'/>
    <span style={{color:"red"}}>{error.password}</span>
    </div>
    <div className='form_group'>
    <input type='password' placeholder='Confirm password' onChange={handeler} value={user.confirmpassword} name='confirmpassword'/>
    <span style={{color:"red"}}>{error.confirmpassword}</span>
    </div>
    <button type='submit'>Signup</button>





    </form>
    
    
    
    </div>
    </>
  )
}

export default Form