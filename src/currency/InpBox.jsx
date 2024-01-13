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
    <div className='flex flex-wrap rounded-lg bg-white shadow-gray-800  p-5'>
      <div className=' flex flex-row w-1/2'>
        <div>
        <label htmlFor="" className='text-black/40 mb-4 inline-block  '>{label} </label><br />
        <input 
        className='border-2 p-1 border-gray-300'
        type="text" 
        placeholder='Amount' 
        disabled={amountDisable} 
        value={amount} 
        onChange={(e)=>
          onAmountChange && onAmountChange(Number(e.target.value))
          
        } />
        </div>
        <div className='w-300'>
          <p className='text-black/50 w-48 ml-5'>Currency Options</p>
          <select className='ml-8 mt-4 border-2 p-1 border-gray-300 duration-1000'
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