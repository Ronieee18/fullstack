import React from 'react'
// import usecurrencyInfo from '../assets/hooks/currencyInfo'

function InpBox({
    label,
    className="",
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency='usd',
    amountDisable=false,
    currencyDisable=false

}
    
) {

  return (
    <div className='flex flex-wrap rounded-lg bg-white shadow-gray-800 shadow-2xl   p-5 '>
      <div className=' flex flex-row sm:flex-row  w-full'>
        <div className="w-full md:w-1/2">
        <label htmlFor="" className='text-black/40 mb-4 inline-block  '>{label} </label><br />
        <input 
        className='border-2 p-1 max-w-[110px]    border-gray-300'
        type="text" 
        placeholder='Amount' 
        disabled={amountDisable} 
        value={amount} 
        onChange={(e)=>
          onAmountChange && onAmountChange(Number(e.target.value))
          
        } />
        </div>
        <div className='max-[650px]:w-full max-[650px]:ml-0 w-full sm:w-1/3'>
          <p className='text-black/50 w-48 '>Currency Options</p>
          <select className='ml-0 mt-4  border-2 p-1 border-gray-300 duration-1000'
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          >
            {currencyOptions.map((currency)=>(
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

      </div>

    </div>
  )
}

export default InpBox