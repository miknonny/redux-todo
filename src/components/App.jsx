import React, {Component} from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

export default class App extends Component {
  render () {
    return (
      <div>

        <AddTodo
          onAddClick={text=>
            console.log('add todo', text)
          } />

        <TodoList
          todos={
            [
              {
                text: 'Use Redux',
                completed: true
              },
              {
                text: 'Learn to connect it to React',
                completed: false
              }
            ]
          }
          onTodoClick={index => console.log('todo clicked', index)}/>

        <Footer
          filter="SHOW_ALL"
          onFilterChange={filter =>
            console.log('filter change', filter)
          } />
      </div>
    )
  }
}
