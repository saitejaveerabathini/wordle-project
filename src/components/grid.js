import React from 'react'
import Row from '../Row'







export default function Grid( {currentguess,guess,result}) {

  return (
    <div>
      { guess.map((man,i)=>{
        if(result==i){
            return <Row key={i} currentguess={currentguess}/>
        }
        return <Row  key={i}  guess={man}/>

      })}
    </div>
  )
}

