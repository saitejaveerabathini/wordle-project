import React from 'react'
import './Row.css'







export default function Row({guess,currentguess}) {



if(guess){
    console.log(guess[0].key+"hjinkml")
    return (
        <div className='row past'>
              {guess.map((l,i)=>{

                return  <div key={i} className={l.color}  >{l.key}</div>
        

            })}
        </div>
    )
}
if(currentguess){
    let letters=currentguess.split("")
    return(
    <div className='row current'> 
     {letters.map((l,i)=>{

return  <div key={i} className="filled"  >{l}</div>


})}

{
[...Array(5-letters.length)].map((www,i)=>{
    return <div key={i}></div>



})
}

    </div>)
}



  return (
    <div className='row'>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
      
    </div>
  )
}