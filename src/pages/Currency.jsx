import { useState } from 'react'
import InpBox from '../currency/InpBox';
import useCurrencyInfo from '../currency/currencyInfo';
function Currency() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState('inr')
  const [convertAmount,setconvertAmount]=useState(0)
  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
  const swap=()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertAmount); 
    setconvertAmount(amount)
  }
  const convert=()=>{
    const convertedAmount = (amount * currencyInfo[to]).toFixed(2);
  setconvertAmount(parseFloat(convertedAmount));
  }
  return (
    <>
        <div className='flex flex-col items-center justify-center h-screen '>

    <h1 className='text-center p-2 ml-5 text-3xl'>Currency Converter</h1>
    <div className='flex justify-center   '>
    <div className='flex flex-col items-center  w-full sm:w-[30rem]   justify-center   p-6 bg-[antiquewhite] border-2 border-black rounded-lg'>
    <div className='w-full mb-4'>
      <InpBox
      
       label='From' 
       amount={amount}
       currencyOptions={options}  
       selectCurrency={from}
       onCurrencyChange={(currency)=>{setFrom(currency)}}
       onAmountChange={(amount)=>{setAmount(amount); }}
       
         
         />
         </div>
         <hr className="w-full h-px my-2 border-0 bg-gray-300" />

         <button onClick={swap} className='bg-blue-600 my-1 text-white p-2 rounded-md ml-38'>swap</button>
         <hr className="w-full h-px my-2 border-0 bg-gray-300" />

         <div className='w-full mb-4'>
      <InpBox
       label={'To'}
       onCurrencyChange={(currency)=>{setTo(currency)}}
       selectCurrency={to}
       amount={convertAmount}
       currencyOptions={options}

      />
      </div>
      <button 
      onClick={convert}
      className='w-full mt-2 p-2 text-lg text-white hover:bg-blue-400  text-center border-2 bg-blue-600 border-white'>Convert {from} to {to}</button>
      </div>
      </div>
      </div>

      
      
    </>
  )
}

export default Currency
