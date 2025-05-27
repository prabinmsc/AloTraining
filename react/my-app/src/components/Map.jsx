// import React, { useState } from 'react'
// import '../styles/box.css';

// const Map = () => {

//   let gray= "rgb(108, 108, 108)";
//   let red=" rgb(161, 1, 1)";
//   let green="rgb(0, 121, 8)";
//   let blue= "rgb(0, 0, 117)";


//   const[color1,colorUpdater1]=useState(gray)
//   const[color2,colorUpdater2]=useState(gray)
//   const[color3,colorUpdater3]=useState(gray)


    


//   const greenColor = () => {
//     console.log("green color");
    
//     if(color1!==gray){
//       colorUpdater1(gray)
//     }
//     else(colorUpdater1(green))
//   }


//    const blueColor = () => {
//     console.log("blue color");
    
//     if(color2!==gray){
//       colorUpdater2(gray)
//     }
//     else(colorUpdater2(blue))
//   }



//   const redColor = () => {
//     console.log("red color");
    
//     if(color3!==gray){
//       colorUpdater3(gray)
//     }
//     else(colorUpdater3(red))
//   }
// const resetColor= () =>{
//   if(color1===green && color2===blue && color3===red){
    
//    colorUpdater1(gray)
//    colorUpdater2(gray)
//    colorUpdater3(gray)
//     }
//   }
    
 

//   return (
//     <>

//       <div className="mainbox">
//         <div className="box" style={{backgroundColor:color3}}><button onClick={greenColor}>box1</button></div>
//         <div className="box" style={{backgroundColor:color1}}><button onClick={blueColor}>box2</button></div>
//         <div className="box" style={{backgroundColor:color2}}><button onClick={redColor}>box3</button></div>
        
//       </div>
//       {color1!==gray && color2!==gray && color3!==gray &&(<div className='reset_container' >
//       <div className='reset'><button onClick={resetColor}>RESET</button></div>
//       </div>)}

//     </>

//   )
// }

// export default Map



import React from 'react'

const Map = () => {
  return (
    <div>
      
    </div>
  )
}

export default Map
