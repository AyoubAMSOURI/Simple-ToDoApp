import { useState } from "react";
function App() {
  
      const [toDo,setToDo] = useState('');
      const [toDos,setToDos] = useState([]);
        const handleSubmit = (e) =>{
            e.preventDefault();
            setToDos(previousState=>{
              return [...previousState,toDo]
            })
        }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={toDo} onChange={(e)=>{setToDo(e.target.value)}} />
            <input type="submit" />
        </form>
        <p>{toDos.map(item=><p>{item}</p>)}</p>
        </div>
    )
  
}

export default App;
