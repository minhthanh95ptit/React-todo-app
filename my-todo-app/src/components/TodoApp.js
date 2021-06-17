import Header from "./layout/Header";
import Todos from "./Todos"
import AddTodo from "./AddTodo"
<<<<<<< HEAD
import axios from "axios"
import Footer from "../store/containers/Footer"

import React, { useState, useEffect } from "react"
=======
  
const { uuid } = require('uuidv4');
>>>>>>> b93edac13124dcf7a8ad23ec45632f4ddc195959

function TodoApp(){

  const [state, setState] = useState({
    todos: []
  })

  const handleCheckBoxChange = id =>{
    setState({
      todos: state.todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  const deleteTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(reponse => setState({
          todos: [
              ...state.todos.filter(todo => {
                  return todo.id !== id;
              })
          ]
      }))
  };

<<<<<<< HEAD
const addTodo = title => {
  console.log("add to do")
    const todoData = {
        title: title,
        completed: false
    }
    axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
      .then(response => {
          console.log(response.data)
          setState({
              todos: [...state.todos, response.data]
      })
    });
};

  useEffect(() => {
      const config = {
        params:{
          _limit: 5
        }
      }

      axios.get("https://jsonplaceholder.typicode.com/todos", config)
        .then(response => setState({
          todos: response.data
        }))
  }, [])


  
  return (
    <div className="container">
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos todos={state.todos}
        handleChange={handleCheckBoxChange}
        deleteTodo={deleteTodo} />
      <Footer />
    </div>
  )
=======
  addTodo = title => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render(){
    return (
      <div className="container">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <Todos 
          todos={this.state.todos} 
          handleChange={this.handleCheckboxChange}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
>>>>>>> b93edac13124dcf7a8ad23ec45632f4ddc195959
}


export default TodoApp;