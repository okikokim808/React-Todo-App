import React, {Component} from 'react';
import TodoForm from './TodoForm';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      formStyle: {display: 'none'},
      bodyStyle: {}  
    }
  }
  deleteClickedTodo = () => {
    this.props.deleteTodo(this.props.todo);
  }
  toggleBodyForm = () => {
    (this.state.formStyle.display === 'block')?
      this.setState({formStyle: {display: 'none'}, bodyStyle: {display:'block'} })
    :
      this.setState({formStyle: {display:'block'}, bodyStyle: {display: 'none'}}) 
  }
  render(){
    return(
      <li data-todos-index={this.props.todo.id}>
        <div style={this.state.bodyStyle}>
          <span >
            {this.props.todo.body}</span>
          <a
            className='edit' 
            onClick={this.toggleBodyForm}>
            Edit
          </a>
          <a
            className='remove' 
            onClick={this.deleteClickedTodo}>
            Remove
          </a>
        </div> 
          <TodoForm
            id={this.props.id}
            todo={this.props.todo}
            style={this.state.formStyle}
            autoFocus={true}
            onUpdateTodo={this.props.onUpdateTodo}
            buttonName="Update Todo!"
            toggleBodyForm={this.toggleBodyForm}/>
            
      </li> 
    )
  }

}

export default Todo