import React, { Component } from 'react';
import TodoInput from './component/TodoInput'

const todos = [
{
  todoTitle:'My task',
  todoResponsibility:'Rishab',
  todoDescription:'this is my task',
  todoPriority : 'high'
},{
  todoTitle:'Cooking',
  todoResponsibility:'Roshan',
  todoDescription:'this is Roshan taks',
  todoPriority : 'low'
}
]

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      todos
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRemoveTodo(index){
    this.setState({
      todos:this.state.todos.filter((e, i) => i !==index)
    })
  }

  handleAddTodo(todo){
    this.setState({todos:[...this.state.todos, todo]})
  }
  render() {
    return (
      <div className="container">
        <TodoInput onAddTodo={this.handleAddTodo}/>
        <hr></hr>
        <h3> Todo List : <span className="badge">{this.state.todos.length}</span></h3>
        <ul className="list-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle} <small><span className="label label-info">{todo.todoPriority}</span></small></h4>
              <p><span className="glyphicon glyphicon-user"></span>{todo.todoResponsibility}</p>
              <p>{todo.todoDescription}</p>

              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}>Delete</button>
            </li>
          )}

        </ul>

      </div>
    );
  }
}

export default App;
