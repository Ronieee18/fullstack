import { useCallback, useEffect, useRef, useState } from 'react'


function Pass() {


  const [length, setLength] = useState(8);
  const [numAllow, setnumAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [pass, setpass] = useState("");
  const passRef = useRef(null)

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllow) str += '0123456789'
    if (charAllow) str += '!@#$%^&*(){}[]'
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpass(pass)
  }, [length, numAllow, charAllow, setpass])
  
  const copyText = useCallback((e) => {
    e.target.innerHTML='COPIED '
    passRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  useEffect(() => {
    passGenerator()
  }, [length, numAllow, charAllow, passGenerator])
  return (
    <>
      <h1 className=' text-center text-2xl'>Password Generator </h1>
      <div className='w-auto text-center max-w-md h-32  mx-auto my-5 text-orange-500 bg-gray-700 ' >
        <div className='overflow-hidden flex shadow rounded-lg mb-5 h-500'>
          <input type="text" className=' w-full mx-3 my-3 py-1 px-2' ref={passRef} placeholder='password' value={pass} readOnly />
          <button className='bg-blue-600 active:bg-green-700  active:w-28 outline-none text-white px-2 mr-3 h-10 my-3 shrink-0' onClick={copyText} >Copy</button>
        </div>
        <div className='flex text-sm gap-2'>
          <div className='flex items-center mb-2 gap-x-2'>
            <input type="range" min={5} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
            <label>Length : {length}</label>
            <input type="checkbox" id='spc' defaultChecked={charAllow} onChange={() => {
              setcharAllow(prev => !prev);
            }} />
            <label htmlFor="spc">Special Characters</label>
            <input type="checkbox" id='number' defaultChecked={numAllow} onChange={() => {
              setnumAllow(prev => !prev);
            }} />
            <label htmlFor="number">Numbers</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default Pass
