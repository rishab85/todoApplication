import React, { Component } from 'react';


class TodoList extends Component {
  constructor(props){
    super(props)

  }
  render() {

    return (
      <div>
        <table className="table table-dark">
    <thead>
      <tr>
        <th>#</th>
        <th>First</th>
        <th>Last</th>
        <th>Handle</th>
      </tr>
    </thead>
    <tbody>

    </tbody>
  </table>
      </div>
    );
  }


}

export default TodoList;
