function Todo({todo, index, remove}){
    function handle(){
            remove(index);
    }   
    return <div onClick ={handle} className="list-group-item">{todo.text}(-)</div>
}