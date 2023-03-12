import { useState } from "react";
function App() {
  
      const [toDo,setToDo] = useState('');
      const [toDos,setToDos] = useState([]);
      const [editedTodo,setEditedTodo] = useState(null);
      const [editedText,setEditedText] = useState('');
      
      const handleDelete = (id)=>{
        let updateToDos = toDos.filter(item=>item.id !== id) ;
        setToDos(updateToDos);
      }

      const switchToCompleted = (id)=>{
        let updateToDos = toDos.map(item=>{
          if(item.id === id){
            item.completed = !item.completed;
          }
          return item;
        })
        setToDos(updateToDos);
      }

      const submitEdits = (id)=>{
        toDos.map(item=>{
          if(item.id === id){
            item.text = editedText.trim()
          }
          return item;
        });
        setEditedTodo(null);
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
        {item.id === editedTodo ? (<input type='text' onChange={(e)=>{setEditedText(e.target.value)}}/>) :(<p>{item.text}</p>)}
        <button onClick={()=>handleDelete(item.id)}>Delete</button>
        <input type="checkbox" checked={item.completed} onChange={()=>switchToCompleted(item.id)} />
        {item.id === editedTodo ?(<button onClick={()=>submitEdits(item.id)}>Submit</button>): (<button onClick={()=>setEditedTodo(item.id)}>Edit</button>) }
        
        </div>
        ))}</div>
        </div>
    )
  
}

export default App;
