import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  
  const [selectedShape, setSelectedShape] = useState('Square');
  const [shapes, setShapes] = useState([]);
  const handleShapeSelect = (event) => {
    setSelectedShape(event.target.value);
  };

  const handleAddShape = () => {
    if (selectedShape === 'Square') {
      setShapes([...shapes, <div className="square" key={shapes.length}>{shapes.length}</div>]);
    } 
  else 
  {
      setShapes([...shapes, <div className="circle" key={shapes.length}>{shapes.length}</div>]);
    }
  };

  return (
    <div id="main">
      <div id="shape-creator">
       <select value={selectedShape} onChange={handleShapeSelect}>
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
        </select>
        <button onClick={handleAddShape}>Add Shape</button>
        
      </div>
      <div id="shapes-holder">
       {shapes}
      </div>
    </div>
  )
}


export default App;
