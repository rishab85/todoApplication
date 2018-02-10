import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props){
    super(props)

    this.state={
      todoTitle:'',
      todoResponsibility:'',
      todoDescription:'',
      todoPriority:'Low'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

handleInputChange(event){
  const target = event.target;
  const value = target.value;
  const name = target.name;
  console.log("name", name)
  console.log("value", value)
  this.setState({
    [name]:value
  })
}

handleSubmit(event){
  console.log("hello");

  this.props.onAddTodo(this.state);
  this.setState({
    todoTitle:'',
    todoDescription:'',
    todoResponsibility:'',
    todoPriority:'Low'
  });
  event.preventDefault();
}
render(){
  return(
    <div>
      <h4>Add Todos</h4>
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">

          </label>
          <div className="col-sm-10">
            <input name="todoTitle"
                    type="text"
                    className="form-control"
                    id="inputTodoTitle"
                    value={this.state.todoTitle}
                    onChange={this.handleInputChange}
                    placeholder="Title" required></input>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputTodoResponsiblilty" className="col-sm-2 control-label">
          </label>
          <div className="col-sm-10">
            <input name="todoResponsibility"
                    type="text"
                    className="form-control"
                    id="inputTodoResponsiblilty"
                    value={this.state.todoResponsibility}
                    onChange={this.handleInputChange}
                    placeholder="Responsiblility" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputTodoDescription" className="col-sm-2 control-label">
          </label>
          <div className="col-sm-10">
            <textarea name="todoDescription"
                    type="text"
                    className="form-control"
                    id="inputTodoDescription"
                    value={this.state.todoDescription}
                    onChange={this.handleInputChange}
                    placeholder="Description" required></textarea>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputTodoPriority" className="col-sm-2 control-label">
          </label>
          <div className="col-sm-10">
            <select name="todoPriority"
                    type="text"
                    className="form-control"
                    id="inputTodoPriority"
                    value={this.state.todoPriority}
                    onChange={this.handleInputChange}
                    placeholder="Title">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Highest</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-success">Add Todo</button>
          </div>
        </div>
      </form>
    </div>
  )
}
}

export default TodoInput;
