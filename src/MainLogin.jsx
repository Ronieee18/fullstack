import React, { useState } from 'react'
import authservice from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { useNavigate ,Link} from 'react-router-dom'
import {login as storeLogin} from './store/authSlice'
import { useForm } from 'react-hook-form'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faEnvelope,faLock,faKey} from '@fortawesome/free-solid-svg-icons'

function Login() {
    const [showpass,setShowPass]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [error,setError]=useState("")
    const {register,handleSubmit}=useForm()

    const login=async(data)=>{
        setError('')
        try {
            const session=await authservice.login(data)
            if(session){
                const userdata=await authservice.getCurrent()
                if(userdata){
                    dispatch(storeLogin(userdata))
                    navigate('/')
                    alert('login succesfully')
                }
            }
        } catch (error) {
            alert('invalid password')
        }
    }
  return (
    <div className='flex flex-col gap-10  bg-[rgb(255,255,255,.4)] backdrop-blur-xl max-w-[30%]  m-auto   items-center p-3'>
        <h1 className='text-3xl font-serif'>Login  Now</h1>
       <form onSubmit={handleSubmit(login)} className='flex flex-col gap-6  '>
        <div className='flex '>
        <FontAwesomeIcon icon={faEnvelope} className='mt-3 mr-2' />          
        <input type="email" placeholder='email'  className='flex w-full justify-center items-center p-2 border border-black'
        {...register("email",{
            required:true,
            validate:{
                pattern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
            }
        })}
        />
        
        </div>
        <div className='flex '>
        <FontAwesomeIcon icon={faLock} className='mt-3 mr-2'/>          
        <input type={showpass?"text":'password'} placeholder='password'  className='flex w-full   justify-center items-center p-2 border border-black'
        {...register("password",{
            required:true
        })}
        />
        <FontAwesomeIcon icon={faKey} className='absolute inline-block ml-48 mt-3 cursor-pointer ' title='show password'  onClick={()=>setShowPass((prev)=>(!prev))} />
        </div>

        <button className='ml-16  text-2xl font-sans bg-blue-500 text-white p-2 hover:bg-blue-400 w-5/12'>Login</button>
        <p className=' font-serif'>Don't have an account?  <Link to="/sign-up" className='transition-all duration-40  0 hover:underline'>Sign up</Link></p>
        </form>
      </div>
  )
}

export default Login