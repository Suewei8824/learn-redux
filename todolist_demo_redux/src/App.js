import React, { Component } from 'react';
import { Input, List, State } from './component/index';

let id = 0

class App extends Component {
  constructor(props) {
    super(props);
    const { store } = this.props
    this.state = { ...store.getState() }
  }

  componentDidMount() {
    this.props.store.subscribe(() => {
      this.setState(this.props.store.getState());
    })
  }

  addItem = value => {
    const { dispatch } = this.props.store;
    dispatch({
      type: 'addTodo',
      payload: {
        id: Date.now(),
        text: value
      }
    })
  }

  deleteItem = itemId => {
    const { dispatch } = this.props.store;
    dispatch({
      type: 'deleteTodo',
      payload: {
        id: itemId
      }
    })

  }

  completedToDos(todos) {
    return todos.filter(todo => {
      return todo.completed;
    })
  }

  getInCompletedToDos(todos) {

    return todos.filter(todo => {
      return !todo.completed;
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Input addItem={(inputValue) => this.addItem(inputValue)} />
        <List items={this.getInCompletedToDos(todos)} deleteItems={this.deleteItem} dispatch={this.props.store.dispatch} />
        <State completeditems={this.completedToDos(todos)} deleteItems={this.deleteItem} dispatch={this.props.store.dispatch}/>
      </div>
    );
  }
}

export default App;
