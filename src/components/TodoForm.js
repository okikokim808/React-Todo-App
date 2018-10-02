import React, {Component} from 'react'

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
        todo: ''
    }
  }

  onChange = (event) => {
    this.setState({
      todo: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    var todo = this.state.todo
    var id = this.props.id
    console.log(todo)
    console.log(id)
    this.props.onUpdateTodo(todo, id)
    this.setState({
      todo: ""
    })
  }

  render(){
    return (
      <div style={this.props.style} className='todoForm'>
        <form onSubmit={ this.onSubmit }>
          <input
            autoFocus={this.props.autoFocus}
            onChange={ this.onChange }
            type='text'
            value={(this.state && this.state.todo) || ''} />
          <button type='submit'>Save</button>
        </form>
      </div>
    )
  }
}

export default TodoForm