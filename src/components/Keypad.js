import React, { useEffect, useState } from 'react'






export default function Keypad({keys}) {
    const [letters,setletters]=useState(null)

    useEffect(()=>{

var keysa=[
    {key:"q"},
    {key:"w"},
    {key:"e"},
    {key:"r"},
    {key:"t"},
    {key:"y"},
    {key:"u"},
    {key:"i"},
    {key:"o"},
    {key:"p"},
    {key:"a"},
    {key:"s"},
    {key:"d"},
    {key:"f"},
    {key:"g"},
    {key:"h"},
    {key:"j"},
    {key:"k"},
    {key:"l"},
    {key:"z"},
    {key:"x"},
    {key:"c"},
    {key:"v"},
    {key:"b"},
    {key:"n"},
    {key:"m"},
] 
setletters(keysa)

    },[])


    const pressed=(value)=>
    {
      console.log(value+"   entered ")  
      


    }
  return (
    <div className='keypad'>
      {  letters && letters.map((bn)=>{
        const color=keys[bn.key]

    return <div  onClick={()=>pressed(bn.key)} className={color}> {bn.key.toUpperCase()}</div>
      })}
    </div>
  )
}
