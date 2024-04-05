import react, { useEffect, useState } from "react"
import Wordle from "./hookre"
import Grid from "./grid"
import Keypad from "./Keypad"
import Model from "./Model"




function Word(name){

    const {currentguess,keyy,guess,pass,result,keys}=Wordle(name)
    const [model,setmodel]=useState(false)
   
   
    useEffect(()=>{
  window.addEventListener("keyup",keyy)
  if(pass){
    console.log("won")
    setTimeout(()=>{
      setmodel(true)

    },2000)
    window.removeEventListener("keyup",keyy)
  }
  if(result>5){
    console.log("out of turns")
    setTimeout(()=>{
      setmodel(true)

    },2000)
    window.removeEventListener("keyup",keyy)

  }


  return ()=> window.removeEventListener("keyup",keyy)

    },[keyy,result,pass])
    console.log(currentguess)
useEffect(()=>{
  console.log(guess,pass,result)


},[guess,pass,result])

    return (

   <>


   <Grid  currentguess={currentguess}  guess={guess}  result={result}  />
   <Keypad    keys={keys}/>
   {model && <Model pass= {pass} result={result}   solution={name.nan} />}
   </>
)

}
export default Word;