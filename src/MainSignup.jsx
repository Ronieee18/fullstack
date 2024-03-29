import React, { useState } from 'react'
import authService from './appwrite/auth'
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import {login} from './store/authSlice'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faEnvelope,faLock,faEye, faE} from '@fortawesome/free-solid-svg-icons'


function Signup() {
    const [showpass,setShowPass]=useState(false)

    const [error,setError]=useState("");
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {register,handleSubmit}=useForm();

    const Signup=async(data)=>{
        setError("")
        try {
            const userdata=await authService.createAccount(data)
            alert('sign up successfully')
            navigate('/login')
            if(userdata){
                const userdata=await authService.getCurrent();
                dispatch(login(userdata))
                
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
   <>
    <div className='flex flex-col gap-10  bg-[rgb(255,255,255,.4)] backdrop-blur-xl max-w-[50%] justify-center   mx-auto     p-3'>
        <h1 className='text-3xl font-serif text-center'>Register Now</h1>
        <form onSubmit={handleSubmit(Signup)} className='flex flex-col gap-6'>
        <div className='flex items-center p-1.5 '>
          <FontAwesomeIcon icon={faUser} className='mt-3 mr-2' />           
          <input type="text" placeholder='username'  className='flex w-full   justify-center items-center p-2 border border-black'
          {...register("username",{
            required:true
          })}
          />
        </div>
        <div className='flex '>
        <FontAwesomeIcon icon={faEnvelope} className='mt-3 mr-2' />          
        <input type="email" placeholder='email'  className='flex w-full   justify-center items-center p-2 border border-black'
        {...register("email",{
            required:true,
            validate:{
                pattern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
            }
            
          })}
        />
        
        </div>
        <div className='relative flex '>
        <FontAwesomeIcon icon={faLock} className='mt-3 mr-2'/>          
        <input type={showpass?"text":'password'} placeholder='password'  className='flex w-full   justify-center items-center p-2 border border-black'
        {...register("password",{
            required:true
          })}
        />
<span className='absolute inline-block right-3 bottom-2   mt-3 cursor-pointer' title='show password'>

<FontAwesomeIcon icon={faEye} className='text-gray-600' onClick={() => setShowPass((prev) => (!prev))} />
</span>       
 </div>

        <button type="submit" className='text-2xl sm:w-full sm:m-auto ml-16 font-sans bg-blue-500 text-white p-2 hover:bg-blue-400 w-2/4'>Sign Up</button>
        <p className=' font-serif'>Already have an account?  <Link to='/login' className='transition-all duration-200 hover:underline'>Log in</Link></p>
        </form>
      </div>
   </>
  )
}

export default Signup