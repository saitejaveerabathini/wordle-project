import react, { useEffect, useState } from "react"
function Wordle(name){

console.log(name.nan)
console.log("solution");
const [result,ben]=useState(0)
const [currentguess,setcurrentguess]=useState("")
const [guess,bens]=useState([...Array(6)])
const [history,beng]=useState([])
const [pass,benl]=useState(false)
const [keys,setkeys]=useState({})

///key

// const keypad=(value)=>
// {
//     var sai=value;

//     if(sai=="Enter"){
//         if(result>=6){
    
//             console.log("over");
//             return
            
//         }
//         if(currentguess.length!=5){
//             console.log("noteabove5")
//             return
//         }
//         if(history.includes(currentguess)){
//             console.log("repeated")
//             return
//         }
//          const res=formatguess()
//          addformatguess(res)
     
//     }
    
    
//     if(sai=="Backspace"){
//         setcurrentguess((pre)=>{
//             return pre.slice(0,-1)
    
//         })
//         return
//     }
    
//     if(/^[A-Za-z]$/.test(sai))
//     {
//         if(currentguess.length < 5){
            
//             setcurrentguess((pre)=>{
//                 return pre+sai;
    
//             })
//         }
//     }
    


// }
//end




//var uservalue;
const formatguess=()=>{

    console.log(currentguess)
    let resultarray=[...name.nan]
    let  uservalue=[...currentguess].map((lock)=>{
        return {key:lock,color:"blue"}
    })

   uservalue.forEach((chary,index)=>{
    if(resultarray[index]==chary.key){
        uservalue[index].color="green";
        resultarray[index]=null;

    }
    

   })


   uservalue.forEach((chary,index)=>{
    if(resultarray.includes(chary.key)  && chary.color!="green") {
        uservalue[index].color="yellow"
        resultarray[resultarray.indexOf(chary.key)]=null
      
    }
    

   })
   return uservalue


}



const addformatguess=(ans)=>{
    if(currentguess==name.nan){
        benl(true)
    }
    bens((aman)=>{
        let an=[...aman]
        an[result]=ans
        return an



    })
    beng((iss)=>{
        return [...iss,currentguess]
        
    })
    ben((adf)=>{
     return adf+1

    })
    setkeys((ku)=>{
        let newkeys={...ku}
       let formatguessed=formatguess();
        formatguessed.forEach((kl)=>{
            const curretcolor=newkeys[kl.key]
            if(kl.color==="green"){
                newkeys[kl.key]="green"
                return
            }
            if(kl.color==="yellow"&&curretcolor!="green"){
                newkeys[kl.key]="yellow"
                return

            }
    if(kl.color==="blue"&&curretcolor!="green"&& curretcolor!="yellow"){
        newkeys[kl.key]="blue"
        return

    }

    


        })
        return newkeys
    })
    setcurrentguess("")

}


const keyy=(e)=>{
var sai=e.key;
if(sai=="Enter"){
    if(result>=6){

        console.log("over");
        return
        
    }
    if(currentguess.length!=5){
        console.log("noteabove5")
        return
    }
    if(history.includes(currentguess)){
        console.log("repeated")
       
            alert("word Already being used")
        return
    }
     const res=formatguess()
     addformatguess(res)
 
}


if(sai=="Backspace"){
    setcurrentguess((pre)=>{
        return pre.slice(0,-1)

    })
    return
}

if(/^[A-Za-z]$/.test(sai))
{
    if(currentguess.length < 5){
        
        setcurrentguess((pre)=>{
            return pre+sai;

        })
    }
}

}
return {result,currentguess,guess,pass,keys, keyy}



}
export default Wordle;