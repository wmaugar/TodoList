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

  return(<ul className="list-group">
     {todos.map((todo, i) => <div key={i} className="list-group-item" >{todo.text}</div>)}
     </ul>);
}

ReactDOM.render(
  <App/>, document.getElementById('root')
);
