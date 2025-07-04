import React, { useState } from 'react';

const Login = ({handleLogin}) => {



  const [email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password)
    

setEmail("")
setPassword("")
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-10 rounded-lg bg-black">
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        autoComplete='off'
      
        className="flex flex-col items-center justify-center space-y-4">


          <input 
          autoComplete='off'
          value = {email}
          onChange = {(e)=>{
            setEmail(e.target.value)
          }}
          
          required 
            className="text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white"
            type="email"
            placeholder="Enter your Email"
          />

          <input 
          autoComplete='off'
          value={password}
          onChange = {(e) => {
setPassword(e.target.value)
          }}
          
          
          required 
            className="text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white"
            type="password"
            placeholder="Enter password"
          />
          <button
            className="text-white bg-emerald-600 text-xl py-3 px-5 rounded-full"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
