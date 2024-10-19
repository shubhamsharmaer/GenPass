import React, { useState, useCallback, useEffect, useRef } from 'react';
import copy from './assets/copy.svg';
import sparkles from './assets/sparkles.svg';
import plus from './assets/plus.svg';
const PasswordGeneratorApp = () => {
  const [password, setPassword] = useState('');
  const [timeLeft, setTimeLeft] = useState(58);
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const [showOptionsMobile, setShowOptionsMobile] = useState(false);
  const [copyBgColor, setCopyBgColor] = useState(false);

  // taking ref for the copy button
  const passCopyRef = useRef(null);
  const hideoptionMobile = () =>{
    setTimeout(() => {
      setShowOptionsMobile(false);
    }, 500);
  }
  const showoptionMobile = () => {
    setTimeout(() => {
      setShowOptionsMobile(true);
    }, 500); 
  };

  const handlecharsAllowed = () => {
    setTimeout(() => {
      setCharAllowed(!charAllowed);
    }, 100);
  }

  const handleNumAllowed = () => {
    setTimeout(() => {
      setNumAllowed(!numAllowed);
    }, 100);
  }

  const generateNewPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // conditions to generate password
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+[]{}|:<>?/.,";

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);

    }
    setPassword(pass);
    setCopyBgColor(false);

  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    generateNewPassword();
    setCopyBgColor(false);
  }, [length, numAllowed, charAllowed, generateNewPassword]);

  // function to copy password
  const copyPasswordtoClipboard = useCallback(() => {
    setTimeout(() => {
      window.navigator.clipboard.writeText(password);
      setCopyBgColor(true);
    }, 100);
  }, [password]);

  return (
    <>
      <div className="flex min-h-screen items-center justify-center p-0 overflow-y-hidden">

        <div className="flex-col h-screen flex lg:flex-row justify-center items-center w-full">

        {/* Left Section */}
        <div className="w-full h-full flex flex-col justify-start lg:justify-center items-center lg:w-3/5 bg-[#fffbe8]">
        
          <div className="flex flex-col justify-center items-center lg:items-start gap-4 p-10">
           <h2 className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-4 font-SuRegular font-semibold text-center lg:text-left">Product of the day <span className="bg-green-200 text-green-700 px-3 py-2 rounded-3xl font-SuBold">#GenPass</span></h2>
           <h1 className='hidden md:block text-2xl md:text-3xl lg:text-6xl text-gray-800 font-SuBold text-center lg:text-left'>Password Generator from Anywhere</h1>

           {/* Alerts */}
        <div id="alerts" className='flex justify-center items-center bg-[#fffbe8]'>
          <a target='_blank' href='https://www.linkedin.com/in/shubhamsharmaer/' id='ver-txt' className="cursor-pointer flex my-6 gap-2 items-center border border-blue-700 
                rounded-lg bg-blue-50 px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-2 
                transition group">
                    {/* <div className="dot w-2 h-2 bg-[#36f0fc] border rounded-full border-[#293ef9]"></div> */}
                    <p className='text-blue-600 font-medium'> Product by
                    <span className='text-blue-700 font-bold' > @shubhamsharmaer</span></p>
                    <span className='text-blue-200 '><img src={sparkles} alt="" /></span>
            </a>
        </div> 
          </div>
          
        </div>

        {/* Right Section */}
        <div className="w-full h-full flex justify-center items-center mx-auto lg:w-2/5 bg-[#b7f4b1]">
        

        {/* Password Display */}
        <div className="flex justify-center relative items-center w-full">
          <div className="flex justify-center items-center">
          <div className="absolute bg-white -top-[20rem] left-[1rem] xl:-top-[8rem] lg:-top-[10rem] z-10 xl:-left-[1.5rem] lg:-left-[3rem] md:left-[15rem] border-black border-2 
            rounded-xl w-[20rem] lg:w-[26rem] h-[16rem] flex flex-col justify-center items-center">

            <div className="flex flex-col justify-center items-center gap-6 lg:gap-3">
                {/* Password - Display */}
                <div onClick={copyPasswordtoClipboard} className={`flex justify-between items-center rounded-lg border-none w-[15rem] h-[4rem] lg:w-[20rem] lg:h-[6rem]
                px-6 py-2 bg-[#e9e9e9] text-black
                ${!copyBgColor ? 'bg-[#e9e9e9]' : 'bg-green-400' }`}>
                  <div className="overflow-hidden w-5/6">
                    <input type="text"
                      className="w-fit focus:outline-none text-2xl lg:text-3xl 
                      font-SuBold bg-transparent cursor-pointer"
                      value={password}
                      readOnly
                      ref={passCopyRef}
                    />
                  </div>
                  <div  id="copy-btn" className='cursor-pointer w-1/5 flex justify-center items-center h-full'>
                    <img className="text-black h-6" src={copy} alt="" />
                  </div>
                </div>
                {/* Mobile Options */}
                <div onClick={showoptionMobile} class='button lg:hidden w-[14rem] h-12 bg-blue-50 rounded-lg cursor-pointer select-none
                  active:translate-y-2 active:translate-x-2
                  active:[box-shadow:0px_0px_0_0_#b7f4b1]
                  active:border-b-[0px] active:border-r-[0px]
                  transition-all duration-150 [box-shadow:10px_10px_0_0_#1b6ff8]
                  border-b-[1px] border-r-[1px] border-blue-100 
                '>
                  <span class='flex flex-col justify-center items-center h-full text-black font-bold text-xl'>options</span>
          </div>
                {/* Generate Pass Btn */}
                <input onClick={generateNewPassword} type="submit" className='w-[15rem] lg:w-[20rem] h-[3rem] font-SuBold text-white bg-black rounded-lg cursor-pointer hover:bg-[#293ef9] active:scale-95 transition-all ease-in-out delay-100' value="Generate Password" />
            </div>

            </div>
            
            <div className="absolute -top-[19rem] left-[2rem] xl:-top-[7rem] lg:-top-[9rem] xl:-left-[0.5rem] lg:-left-[2rem] md:left-[16rem] border-black border-2 
            rounded-xl w-[20rem] lg:w-[26rem] h-[16rem]"></div>
          </div>

          {/* Length Slider */}
          <div className="hidden absolute lg:flex lg:flex-col justify-center items-center gap-2 xl:top-[6rem] lg:top-[4rem] z-20 xl:-left-[0.5rem] lg:-left-[2rem] 
          border-2 border-black bg-white rounded-xl w-[20rem] h-[5rem] px-5 py-2">
              <div id="lable" className='flex justify-between items-center w-full'>
                <div className="font-SuRegular font-semibold">Length</div>
                <div className="font-SuRegular font-semibold">{length}</div>
              </div>

              <div id="range" className='w-full'>
              <input id="default-range" 
              type="range" value={length}
              min={8} max={32}
              className="w-full h-1 bg-green-200 rounded-lg appearance-none cursor-pointer dark:bg-green-200"
              onChange={(e) => {setLength(e.target.value)}} />
              </div>
          </div>

          {/* Options Container */}
          <div className="hidden absolute lg:flex justify-between items-center gap-6 xl:-top-[10.5rem] lg:-top-[12.5rem] z-20 xl:left-[10rem] lg:left-[6rem]">

            <div onClick={handleNumAllowed} className={`button w-32 h-16 bg-white rounded-lg cursor-pointer select-none
                              active:translate-y-2 active:translate-x-2
                              active:[box-shadow:0px_0px_0_0_#1b6ff8]
                              active:border-b-[0px] active:border-r-[0px]
                              transition-all duration-150 [box-shadow:10px_10px_0_0_#000000]
                              border-b-[1px] border-r-[1px] border-blue-100
                              ${!numAllowed ? '[box-shadow:10px_10px_0_0_#000000]' : '[box-shadow:10px_10px_0_0_#1b6ff8]'} 
                            `}>
                              <div className="flex justify-center items-center h-full gap-3">
                              <img src={plus} className='h-6' alt="" />
                              <span class='flex flex-col justify-center items-center h-full text-black font-bold text-xl '>num</span>
                              </div>
            </div>

            <div onClick={handlecharsAllowed} className={`button w-32 h-16 bg-white rounded-lg cursor-pointer select-none
                              active:translate-y-2 active:translate-x-2
                              active:[box-shadow:0px_0px_0_0_#1b6ff8]
                              active:border-b-[0px] active:border-r-[0px]
                              transition-all duration-150 [box-shadow:10px_10px_0_0_#000000]
                              border-b-[1px] border-r-[1px] border-blue-100
                              ${!charAllowed ? '[box-shadow:10px_10px_0_0_#000000]' : '[box-shadow:10px_10px_0_0_#1b6ff8]'}
                            `}>
                              <div className="flex justify-center items-center h-full gap-3">
                              <img src={plus} className='h-6' alt="" />
                              <span class='flex flex-col justify-center items-center h-full text-black font-bold text-xl '>chars</span>
                              </div>
            </div>


          </div>
        
        </div>
                   
        </div>

        </div>

        {/* Kind of menu for mobile devices*/}
        <div id="options-mobile" className={`absolute inset-0 z-30 w-full backdrop-blur-sm 
          bg-transparent min-h-screen flex flex-col justify-center items-center gap-10
           ${showOptionsMobile ? 'block' : 'hidden'}`}>

                <div className="flex justify-center items-center gap-6">
                  <div onClick={handleNumAllowed} className={`button w-32 h-16 bg-white rounded-lg cursor-pointer select-none
                              active:translate-y-2 active:translate-x-2
                              active:[box-shadow:0px_0px_0_0_#1b6ff8]
                              active:border-b-[0px] active:border-r-[0px]
                              transition-all duration-150 [box-shadow:10px_10px_0_0_#000000]
                              border-b-[1px] border-r-[1px] border-blue-100
                              ${!numAllowed ? '[box-shadow:10px_10px_0_0_#000000]' : '[box-shadow:10px_10px_0_0_#1b6ff8]'} 
                            `}>
                              <div className="flex justify-center items-center h-full gap-3">
                              <img src={plus} className='h-6' alt="" />
                              <span class='flex flex-col justify-center items-center h-full text-black font-bold text-xl '>num</span>
                              </div>
                        </div>

                  <div onClick={handlecharsAllowed} className={`button w-32 h-16 bg-white rounded-lg cursor-pointer select-none
                              active:translate-y-2 active:translate-x-2
                              active:[box-shadow:0px_0px_0_0_#1b6ff8]
                              active:border-b-[0px] active:border-r-[0px]
                              transition-all duration-150 [box-shadow:10px_10px_0_0_#000000]
                              border-b-[1px] border-r-[1px] border-blue-100
                              ${!charAllowed ? '[box-shadow:10px_10px_0_0_#000000]' : '[box-shadow:10px_10px_0_0_#1b6ff8]'}
                            `}>
                              <div className="flex justify-center items-center h-full gap-3">
                              <img src={plus} className='h-6' alt="" />
                              <span class='flex flex-col justify-center items-center h-full text-black font-bold text-xl '>chars</span>
                              </div>
                        </div>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-2 xl:top-[6rem] lg:top-[4rem] z-20 xl:-left-[0.5rem] lg:-left-[2rem] 
                     border-2 border-black bg-white rounded-xl w-[18rem] h-[5rem] px-5 py-2">
                      <div id="lable" className='flex justify-between items-center w-full'>
                        <div className="font-SuRegular font-semibold">Length</div>
                        <div className="font-SuRegular font-semibold">{length}</div>
                      </div>

                      <div id="range" className='w-full'>
                      <input id="default-range" 
                      type="range" value={length}
                      min={8} max={32}
                      className="w-full h-1 bg-green-200 rounded-lg appearance-none cursor-pointer dark:bg-green-200"
                      onChange={(e) => {setLength(e.target.value)}} />
                      </div>
                  </div>

                  <div id="tick">
                      <div class='button w-12 h-12 bg-white rounded-full cursor-pointer select-none
                              active:translate-y-2 active:translate-x-2
                              active:[box-shadow:0px_0px_0_0_#b7f4b1]
                              active:border-b-[0px] active:border-r-[0px]
                              transition-all duration-150 [box-shadow:10px_10px_0_0_#1b6ff8]
                              border-b-[1px] border-r-[1px] border-blue-100
                            '>
                              <span onClick={hideoptionMobile} id='cross-opt' class='flex flex-col justify-center items-center h-full text-black font-bold text-xl '>X</span>
                        </div>
                  </div>
         </div>
    </div>

    
    </>
    
  );
};

export default PasswordGeneratorApp;
