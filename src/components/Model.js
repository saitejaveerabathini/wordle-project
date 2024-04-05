import React, { useEffect, useState } from 'react'
import './model.css'





export default function Model({pass,result,solution}) {
const [acc,setaccu]=useState(0)  

    const rel=()=>
  {
    window.location.reload();

  }
  
  useEffect(()=>
    {
        setaccu(100-((result-1)*16))

    },[result])
  

    return (
    <div className='model' >



        {
            pass && (
                <>
               
                <div>
                    <h1>You win!</h1>
                    <p className='solution'>{solution}</p>
                    <p> Your Guess is {acc}% Accurate    </p>
                    <p>You found solution in {result}  guesses</p>
                    <button onClick={rel}>Play Again</button> 
                </div>
                </>
            )
        }
        {
            !pass && (
                <div> 
                    <h1>You lost!</h1>
                    <p> Your Guess is 0% Accurate    </p>
                    <p>Better luck next Time</p>
                    <p className='solution'>correct guess is : {solution}</p>
                    <button onClick={rel}>Try Again</button>                     
                    </div>
            )
        }

      
    </div>
  )
}
