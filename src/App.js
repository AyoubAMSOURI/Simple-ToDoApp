import { useState } from "react";
function App() {
  
      const [toDo,setToDo] = useState('');
      const [toDos,setToDos] = useState([])
      
      const handleDelete = (id)=>{
        let updateToDos = toDos.filter(item=>item.id !== id) ;
        setToDos(updateToDos);
      }
      const handleSubmit = (e) =>{

        const newToDo = {
          id: new Date().getTime(),
          text: toDo.trim(),
          completed: false
        };
            e.preventDefault();
            setToDos(previousState=>{
              return [...previousState,newToDo]
            })
        }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={toDo} onChange={(e)=>{setToDo(e.target.value)}} />
            <input type="submit" />
        </form>
        <div>{toDos.map(item=>(
        <div>
        <p>{item.text}</p>
        <button onClick={()=>handleDelete(item.id)}>Delete</button>
        </div>
        ))}</div>
        </div>
    )
  
}

export default App;
