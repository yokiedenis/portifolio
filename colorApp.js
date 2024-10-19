import "./colorapp.css"
import { useEffect, useState } from "react"

const Card=({selectedColor})=>{
    const [colorAdded,setColorAdded]=useState(false)

    const addColor=()=>{
        setColorAdded(true);
    };
    useEffect(()=>{
        setColorAdded(false)
    },[selectedColor])
    return <div className="card" onClick={addColor} 
    style={{backgroundColor:colorAdded?selectedColor:"transparent"}}>

    <h3>Selection</h3>
    </div>
}

const ColorApp=()=>{
    const[activeColor,setActiveColor]=useState("blue")

    return (
        <div className="container">
            <button onClick={()=>setActiveColor("blue")}>Blue</button>
            <button onClick={()=>setActiveColor("orange")}>Orange</button>
            <button onClick={()=>setActiveColor("red")}>Red</button>
            <div className="cards-container">
                <Card selectedColor={activeColor}/>
                <Card selectedColor={activeColor}/>
                <Card selectedColor={activeColor}/>
            </div>
        </div>
    )
}

export default ColorApp;