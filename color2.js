import { useState } from "react";

const colourConfig=[{
  key:'blue',
  label:'Blue',
  classname:'btn-blue',
  background:'rgb(34,193,195)'
},{
  key: 'orange',
  label: 'Orange',
  classname: 'btn-orange',
  background: 'rgb(221, 112, 18)'
}, {
  key: 'green',
  label: 'Green',
  classname: 'btn-green',
  background: 'rgb(44, 209, 88)'
}
]

const title='select the gradient and the box to change the color';

const ColourSelector=(props)=>{
  const {config,selectNextBackground}=props;
  const{background}=config;
  return(
    <button className={config.classname} 
    onClick={()=>selectNextBackground({background:background})}>
      {config.label}
    </button>
  )
}

const Selection=({applyColor})=>{
  const [bgColor,setBgColor]=useState("");

  console.log("selection rendered",bgColor);
  const changeColor=()=>{
    applyColor((background)=>{
      console.log({background});
      setBgColor(background)
    })
  }
  return <div style={{backgroundColor:bgColor.background,width:200,height:200,border:"1px solid gray"}}
  onClick={changeColor}>
<p>Selection</p>
  </div>
}

const App=()=>{
  let [nextBackground,selectNextBackground]=useState({background:""})
  console.log({nextBackground});
  const applyColor=(updateSelectionStyle)=>{
    updateSelectionStyle(nextBackground)
  }
  return(
    <div id="master">
      <h5 className="heading">{title}</h5>

      <div className="row">
          {colourConfig.map((config)=>(
            <ColourSelector key={config.key} config={config} selectNextBackground={selectNextBackground}/>
          ))}
      </div>
      <div style={{display:"flex"}} className="row" id="children-wrapper"> 
          {
            ["selection1","selection2","selection3"].map(key=>(
              <Selection key={key} applyColor={applyColor}/>
            ))
          }
      </div>
    </div>
  )
}

export default App;