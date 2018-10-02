import React, {Component} from 'react'
import Todo from './Todo'

class Todos extends Component {
  render(){

    let todos = this.props.todos.map( (todo) => {
      return (
        <Todo
          key={todo._id}
          id={todo._id}
          todo={todo}
          editingTodoId={this.props.editingTodoId}
          onEditTodo={this.props.onEditTodo}
          deleteTodo={this.props.deleteTodo}
          onUpdateTodo={this.props.onUpdateTodo}
        />
      )
    })

    return(
      <ul>
        {todos}
      </ul>
    )
    
  }
}

export default Todos