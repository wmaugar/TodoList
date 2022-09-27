function Todo({todo, index, remove}){
    function handle(){
            remove(index);
    }   
    return (<a onClick ={handle} 
        className="list-group-item list-group-item-action">{todo.text}
        <button type="button" className="button btn-close" disabled aria-label="Close"></button>
        </a>)
}