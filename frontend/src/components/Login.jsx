import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [password,setPassword]=useState('')
    const [username,setUsername]=useState('')
    const [mess,setMess]=useState()
    const navigate=useNavigate();
    async function userdetails(){
      let Options={
        method:"POST",
        headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "username": username,
      "password": password
    })
        
      }
      const res=await fetch("http://127.0.0.1:8000/login",Options)
      const data=await res.json()

      setMess(data["message"]);
      if (data["message"]==="user logged in successfully"){
        setTimeout(()=>{
            navigate('/dashboard')
        },1000)
      }

    }
     

    


  return (
    <div className='h-screen bg-cover bg-[url(https://media.istockphoto.com/id/2163983591/vector/abstract-multicolored-gradient-vector-background-design-wallpaper-template-with-geometric.jpg?s=612x612&w=0&k=20&c=wb1CT6XfnlzyhA63kMaN6LW0EM-ltGJSPSPlSW9qHos=)]'>

        <h1 className='font-bold text-blue-500 text-[50px] text-center'>Login Page</h1>
        <div className='flex flex-col  p-12 text-center'>
            <input className='border bg-red-100 border-[2px] p-1 m-4 text-center border-red-200 rounded' type='text' placeholder='username' onChange={e => setUsername(e.target.value)} value={username}/>
            <input className='border bg-red-100 border-[2px] p-1 m-4 text-center border-red-200 rounded' type='password' placeholder='password' onChange={e => setPassword(e.target.value)} value={password}/>
            <button onClick={userdetails} className='text-white bg-red-600 w-[100px] m-4'>Login</button>
            <p className='border bg-blue-300 font-bold text-red-100'>Didn't have an accout <button className="m-1 p-1 text-red-600 border border-red-700 border-[3px]" onClick={()=> navigate('/')}>SIGNUP</button></p>

            {mess && <p className='font-bold text-white p-4 bg-red-300 border rounded-xl'>{mess}</p>}
        </div>






    </div>
  )
}

export default Login