import { useState } from "react";
import "./App.css"
function App(){
  const [color,setColor] = useState("White");

  function colorChanger(newColor){
        setColor(newColor)
  }
  return(
    <div>
      <>
      <div className="Container" style={{backgroundColor: color}}>
        <h1 className="color-title">Color Changer</h1>
        <h2>Current Color</h2>
        
        <div className="color-box">
          {color.toUpperCase()}
        </div>

   <div className="button-group">
  <button className="btn btn-red" onClick={()=> colorChanger("red")}>Red</button>
  <button className="btn btn-blue" onClick={()=> colorChanger("blue")}>Blue</button>
  <button className="btn btn-green" onClick={()=> colorChanger("green")}>Green</button>
  <button className="btn btn-yellow" onClick={()=> colorChanger("yellow")}>Yellow</button>
  <button className="btn btn-black" onClick={()=> colorChanger("black")}>Black</button>
</div>

      </div>
      </>
    </div>
  )
}

export default App;