import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import logo from './logo.png'
import LogoutBtn from './Logout'
import { useState } from 'react'
import './header.css'

function Header() {

    const authStatus=useSelector((state)=>state.auth.status)
    const {isMenuOpen,setIsMenuOpen}=useState(false)
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
        {
            name:'About us',
            slug:'/about-us',
            active:authStatus,

        },
    ]
  return (

    <header className='flex items-center  pl-15 pt-13   text-white'>
    <img className="logo p-0 mr-auto ml-2 cursor-pointer max-h-[90px] max-w-full" src={logo} alt="logo"/>
    <nav >
      <ul className=' font-semibold'>
        <img src="https://img.icons8.com/?size=100&id=8113&format=png" className={` max-[900px]:${()=>setIsMenuOpen(true)} h-[30px] `}  alt="" />
        {console.log(isMenuOpen)}
        {
            
            navItems.map((item)=>   
                item.active?(
                <li key={item.name} 
                onClick={()=>navigate(item.slug)}
                 className=' max-[600px]:hidden cursor-pointer inline-block px-8 py-2 duration-200 active:underline active:decoration-white	 hover:bg-white text-black rounded-full'>
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