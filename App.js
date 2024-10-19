import { useState } from "react";
import "./app.css";

const Card=({stylesProp})=>{
  return(
    <div className="card" style={stylesProp}>

    </div>
  )
}


// const App=()=>{
//   console.log("rendered");
// const [user,setUser]=useState({name:"yokas"})
// const updateCount=()=>{
//   setUser({name:"denis"})
// }
// return(
//   <div>
//     <h1>{user.name}</h1>
//     <button onClick={updateCount}>update Count</button>
//   </div>
// )

// }


// const getIntialSate=()=>{
//   console.log("inside the complex operation");
//   let sum=0;
//   for (let i = 0; i < 1000; i++) {
//     sum+=i;
//   }
//   return sum;
// }

// function App() {
//   debugger;
//   console.log("rendered");
//   const [count,setCount]=useState(getIntialSate);

//   const increment=()=>{
//     setCount(count+1)
//   }
//   return(
//     <div className="App">
//     <h1>{count}</h1>
//     <button onClick={increment}>Increment</button>
//   </div>
//   );
// }
// export default App;





// const App=()=>{
//   const [count,setCount]=useState(10);
//   console.log(count,"rendered");

//   const increment=()=>{
//     if(count%2===0){
//       setCount(count+3)
//     }else{
//       setCount(count+5)
//     }
//   }
//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increment}>increment</button>
//     </div>
//   )
// }




// const App=()=>{
//   let backgroundColor="red"

//   const changeBgColor=()=>{
//     backgroundColor="blue";
//     console.log(backgroundColor);
//   }
//   return(
//   <>
//     <h1>useState</h1>
//     <button onClick={changeBgColor}>change color</button>
//     <Card stylesProp={{backgroundColor,borderColor:"orange"}}/>
//     </>
//   )
// }
// const App=()=>{
//   // debugger;
//   let [count,setCount]=useState(3);
//   const increment=()=>{
//     count++;
//     setCount(count);
//     console.log("rendered");
//   }
//   const decrement=()=>{
//     setCount(--count)
//   }
//   return(
//     <div className="counter">
//     <button onClick={decrement}>-</button>
//     <h1>{count}</h1>
//     <button onClick={increment}>+</button>
// </div>
//   );
// }
// let colors=["blue","red","orange"];




// const App=()=>{
//   const [index,setIndex]=useState(0);
//   console.log("rendered",index);

//   const changeColor=()=>{
//   //if condn is true then 0 else index+1
//     let newIndex=index===colors.length-1 ? 0 : index+1;
//     setIndex(newIndex);
//   }
//   return <div className="card" style={{backgroundColor:colors[index]}}>
//     <button onClick={changeColor}>Change color</button>
//   </div>
// }




// const App=()=>{
//   const [inputValue,setInputValue]=useState("");

//   //can set the value of inputvalue
//   const onChangeText=(event)=>{
//     setInputValue(event.target.value);
//   }

//   return(
//     <div>
//        <label htmlFor="">Enter your name:</label>
//             <input onChange={onChangeText} />
//             {inputValue && <p>{`Hello ${inputValue}!`}</p>}
//     </div>
//   )
// }





// const report = [
//   {
//       city: "Hyderbad",
//       temparature: 30,
//   },
//   {
//       city: "Mumbai",
//       temparature: 22,
//   },
//   {
//       city: "Rajasthan",
//       temparature: 40,
//   },
//   {
//       city: "Jammu",
//       temparature: 6,
//   },
//   {
//       city: "Assam",
//       temparature: 13,
//   },
//   {
//       city: "Bangalore",
//       temparature: 21,
//   }
// ]

// const mapper=(location)=>{
//   const text=location.temparature>25?"too hot":
//   location.temparature<=15?"too cold":"moderate";
//   const textColor = location.temparature > 25 ? "red" :
//      location.temparature <= 15 ? "blue" : "orange";
//   return <p>{location.city}:
//   <span style={{color:textColor}}>{text}</span></p>
// }
// const App=()=>{
//   return(
//     <div>{report.map(mapper)}</div>
//   )
// }


export default App;