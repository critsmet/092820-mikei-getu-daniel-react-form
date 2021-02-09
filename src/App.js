import React from 'react';
import './App.css';

class App extends React.Component {

  // constructor(props){
  //   super(props)
  // }

  state = {todos: [], todo: ''}

  handleChange = (event) => {
    //We can pass in an object here because our updated state is not necessarily pulling from a previous version of state
    this.setState({todo: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState((pS) => ({todos: [...pS.todos, pS.todo], todo: ''}), () => console.log(this.state))
  }

  render(){
    return(
      <div className="App">
        <div id="todo-form-container">
          <form onSubmit={this.handleSubmit} id="todo-form">
            <input onChange={this.handleChange} name="todo" type="text" value={this.state.todo}/>
            <input type="submit" value="Add Todo!" />
          </form>
        </div>
        <div id="todos-container">
          <h2>Todos Go Here</h2>
          <ul id="todo-list">
            {this.state.todos.map(todo => <li key={todo}>{todo}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}


export default App;
