import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from '../actions'
import NewTodo from './NewTodo'


class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.addTodo();
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <h3>Todos:</h3>
              {this.props.todos.map(todo => {
                return <li>{todo}</li>;
              })}
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todos: state
  };
};

export default connect(mapStateToProps, { addTodo })(TodoList);