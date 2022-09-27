function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    },       
    {
      text: 'practice JS functions',
      isCompleted: false,
    }      
  ]);
  
  const addTodo = text => {
    const newTodos = [...todos, {text: text, isCompleted: false}];
    // Update 'Todos' to 'newTodos' value
    setTodos(newTodos);
    // Clean current input value
  }

  const removeTodo = e => {
    let index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(<ul className="list-group">

    {todos.map((todo, i) => <div key={i} id={i} onClick ={removeTodo} className="list-group-item">{todo.text}</div>)}
    <TodoForm addTodo = {addTodo}/>
     </ul>);
}

ReactDOM.render(
  <App/>, document.getElementById('root')
);
