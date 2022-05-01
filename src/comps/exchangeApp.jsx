import React, { useRef, useState } from 'react'
import { AppContext } from '../context/context'
import Input from './input'
import Output from './output';
import Time from './time';

export default function ExchangeApp() {

  const [coinsArr,setCoinsArr]=useState([]);
    const [output,setOutput]= useState(0);
    let inputRef = useRef(0);
    let s1Ref = useRef(0);
    let s2Ref = useRef(0);

  return (
    <AppContext.Provider value={{setCoinsArr,setOutput,output,coinsArr,s1Ref,s2Ref,inputRef}}>
        <h1 className='my-4 text-center'>welcome to my EXCHANGE CURRENCY app</h1>
        <Input />
        <Output />
        <Time />
    </AppContext.Provider >
  )
}
