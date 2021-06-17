import React, { useState } from "react"

function AddTodo(props){
  const [title, setTitle] = useState("");

  const onInputChange = e =>{
    setTitle(e.target.value)
  };

<<<<<<< HEAD
  const addTodo = e =>{
    e.preventDefault();
    props.addTodo(title);
    setTitle("");
  };

  return (
    <form className="form-container" onSubmit={addTodo}>
      <input 
        type="text"
        placeholder="Add To Do..."
=======
  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ""
    });
  };
  
  render(){
    return(
      <form className="form-container" onSubmit={this.addTodo}>
        <input 
        type="text" 
        placeholder="Add Todo ..." 
>>>>>>> b93edac13124dcf7a8ad23ec45632f4ddc195959
        className="input-text"
        value={title}
        onChange={onInputChange}
      />
      <input 
        type="submit"
        value="Submit"
        className="input-submit"
      />
    </form>
  )

}

export default AddTodo;