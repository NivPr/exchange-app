import React, { useRef, useState,useEffect, useContext } from 'react'
import { AppContext } from '../context/context';

export default function Input() {
    const {setCoinsArr,setOutput,coinsArr,inputRef,s1Ref,s2Ref} = useContext(AppContext);
    
   
   

    useEffect(() => {
        doApi();
   
    
        
        
      },[]); 

      useEffect(() => {
        changeOutput();
        
   
      },[s1Ref,s2Ref,inputRef]); 

      const changeOutput= ()=>{
        
        setOutput(((inputRef.current.value/s1Ref.current.value)*s2Ref.current.value));

      }
      const switchRefs = ()=>{
       let temp = s1Ref.current.value;
       s1Ref.current.value=s2Ref.current.value;
       s2Ref.current.value = temp;
       setOutput(((inputRef.current.value/s1Ref.current.value)*s2Ref.current.value));

      }
      

    const doApi= async ()=>{
        let url = "https://api.currencyapi.com/v2/latest?apikey=vtl7XojLthET37XQUrxCRQlJn4Zu8EtGKPkTriWk";
        let resp = await fetch(url);
        let data = await resp.json();
        let arr=[]
        for (const key in data.data) {
         arr.push({key:key,value:data.data[key]})
        }
        setCoinsArr(arr)
        console.log(coinsArr)
     
        
  }

    return (

      
        <div className='container-fluid'>
            <div className="container">
              <h3>from</h3>
           <select  ref={s1Ref} onChange={()=>{
             changeOutput();
           }} >
           {coinsArr.map((item,i) => {
              return(
                <option value={item.value} key={i}>{item.key}</option>
              
              )
            })}
    
           </select>
           
            <div><input  className='my-4 text-center' type="number" ref={inputRef} placeholder={"enter a number"} onInput={()=>{
                changeOutput();
              
            }} /></div>
           <div><button className='my-4 text-center'  onClick={()=>{
             switchRefs();
           }}>click for change</button></div>
           
           <select className='my-4 text-center' ref={s2Ref} onChange={()=>{
             changeOutput();
           }}>
           {coinsArr.map((item,i) => {
              return(
              <option value={item.value} key={i} >{item.key}</option>
              
              )
            })}
    
           </select>
           

           
    
           
           
           
            
            
        </div>
        </div>
      )
}
