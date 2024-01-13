import React from 'react'
import Home from './Home.png'

function MainHome() {
  return (
    <>

    <div className='container flex max-[900px]:flex-col max-[900px]:gap-0  flex-wrap mx-5 my-14 justify-around max-w-fit'>
        <div className='w-[26%] max-[900px]:w-fit   justify-between  m-5'>
            <h3 className='font-semibold hover:underline '>Design|Prototype</h3>
            <h1 className='text-5xl font-bold hover:underline max-[900px]:text-2xl'>Designing for all the World: An Introduction to Localize</h1>
        </div>
        <div className='flex justify-center items-center mt-4 ml-20 relative mr-[20%] max-[900px]:h-[200px]'>

            <div className='absolute w-[350px] h-[400px] max-[900px]:h-[200px] max-[900px]:w-[200px] bg-[#884861]  opacity-60 -rotate-[5deg] '></div>
            <div className='absolute w-[350px] h-[400px] max-[900px]:h-[200px] max-[900px]:w-[200px] bg-[white] opacity-60   rotate-12'></div>
            <div className='absolute w-[350px] h-[400px] max-[900px]:h-[200px] max-[900px]:w-[200px] bg-[#9c579c]  opacity-60 -rotate-[10deg]  '></div>
            <div className='absolute w-[350px] h-[400px] max-[900px]:h-[200px] max-[900px]:w-[200px] bg-[#28658e]  rotate-[3deg]  '>
                <img src={Home} className='min-h-fit max-[900px]:h-[200px] max-[900px]:w-[200px]' alt="" />
            </div>
        </div>
    </div>  
    </>
  )
}

export default MainHome