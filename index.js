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
  
  const [value, setValue] = React.useState('');
  const handleSubmit = e => {
      // when submit, the default behaivor is refresh the page, we will prevent this...
      e.preventDefault();
      // if 'value' is empty, then do nothing...
      if (!value) return;
      // create newTodos, taking current 'todos' and adding new todo...
      const newTodos = [...todos, {text: value, isCompleted: false}];
      // Update 'Todos' to 'newTodos' value
      setTodos(newTodos);
      // Clean current inpunt value
      setValue('');
    };

  const removeTodo = e => {
    let index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(<ul className="list-group">

     {todos.map((todo, i) => <div key={i} id={i} onClick ={removeTodo} className="list-group-item">{todo.text}</div>)}

     <form onSubmit = {handleSubmit}>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">+</span>
          <input type="text" className="form-control"  placeholder="new todo ..." value={value} onChange={e => setValue(e.target.value)}/>
        </div>
     </form>
     </ul>);
}

ReactDOM.render(
  <App/>, document.getElementById('root')
);
