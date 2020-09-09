import React from 'react'; 
import FlipMove from 'react-flip-move';

function ListTodos(props){
    const items = props.items;
    const ListTodos = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
     </p>
     
    </div>})
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {ListTodos}
        </FlipMove>
    
    </div>;
  }

  export default ListTodos;