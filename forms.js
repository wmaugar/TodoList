function TodoForm({addTodo}){

    const [value, setValue] = React.useState('');

    const handleSubmit = e => {
        // when submit, the default behaivor is refresh the page, we will prevent this...
        e.preventDefault();
        // if 'value' is empty, then do nothing...
        if (!value) return;
        addTodo(value);
        setValue('');
      }
      
    return (
        <form onSubmit = {handleSubmit}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">+</span>
                <input type="text" className="form-control"  placeholder="new todo ..." value={value} onChange={e => setValue(e.target.value)}/>
            </div>
        </form>
    );
}