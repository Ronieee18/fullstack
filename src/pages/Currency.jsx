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
    setconvertAmount((amount*currencyInfo[to]))
  }
  return (
    <>
    <h1 className='text-center p-2 ml-5 text-3xl'>Currency Converter</h1>
      <div className=' p-3 bg-[antiquewhite] absolute  left-1/3 border-2 	border-black	rounded-lg  	 	'>
    <div>
      <InpBox
      
       label='From'
       amount={amount}
       currencyOptions={options}  
       selectCurrency={from}
       onCurrencyChange={(currency)=>{setFrom(currency)}}
       onAmountChange={(amount)=>{setAmount(amount); }}
       
         
         />
         </div>
         <hr className="h-px   border-0 dark:bg-gray-300"/>

         <button onClick={swap} className='bg-blue-600 my-1 text-white p-2 rounded-md ml-38'>swap</button>
         <hr className="h-px   border-0 dark:bg-gray-400"/>

         <div>
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
      className=' mt-2 p-2 text-lg text-white hover:bg-blue-400  text-center border-2 bg-blue-600  w-72 border-white ml-2'>Convert {from} to {to}</button>
      </div>
      
      
    </>
  )
}

export default Currency
