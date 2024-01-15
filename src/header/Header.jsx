import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import logo from './logo.png'
import LogoutBtn from './Logout'
import { useState } from 'react'
import './header.css'

function Header() {

    const authStatus=useSelector((state)=>state.auth.status)
    const [isMenuOpen,setIsMenuOpen]=useState(false)
    console.log(authStatus)
    const navigate=useNavigate()
    const navItems=[
        {
            name:'Home',
            slug:'/',
            active:true,
        },
        {
            name:'Login',
            slug:'/login',
            active:!authStatus,

        },

        {
            name:'Sign up',
            slug:'/sign-up',
            active:!authStatus,

        },
        {
            name:'Todo Manager',
            slug:'/products',
            active:authStatus,

        },
        {
            name:'Currency Converter',
            slug:'/services',
            active:authStatus,

        },
       
    ]
    const handleNavigate = (item) => {
        setIsMenuOpen(false);
        navigate(item.slug);
      };
  return (

    <header className='flex items-center  pl-15 pt-13   text-white'>
    <img className="logo p-0 mr-auto ml-2 cursor-pointer max-h-[90px] max-w-full" src={logo} alt="logo"/>
    <nav >
    <img src="https://img.icons8.com/?size=100&id=8113&format=png" isMenuOpen={isMenuOpen} onClick={()=>setIsMenuOpen(!isMenuOpen)}
     className={`menu z-20 transition ease-in-out delay-500  `   }alt="" />

      <ul  className={` font-semibold z-10  resp max-[900px]:${isMenuOpen?'block':'none'} transition ease-in-out delay-500  `}>
        {console.log(isMenuOpen)}
        {
            
            navItems.map((item)=>   
                item.active?(
                <li key={item.name} 
                onClick={()=>handleNavigate(item)}
                
                 className='list menu1 cursor-pointer  px-8 py-2 duration-200 active:underline active:decoration-white	 hover:bg-white text-black rounded-full'>
                    {item.name}</li>
                ):null
            )
        }
        {authStatus && <LogoutBtn/>}
      </ul>
    </nav>
    </header>
  )
}

export default Header