import React, {useState} from 'react'
import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import {Container} from 'react-bootstrap';
function App() {
  function getLocalItems(){
    let todo = localStorage.getItem('todo');
    console.log(todo)
    if(todo){
      return JSON.parse(localStorage.getItem('todo'));
    }else{
      return [];
    }
  }

  const [todo, setTodo] = useState(getLocalItems());
 
  return (
    <Container>
        <Header />
        <AddTodo todo={todo} setTodo={setTodo}/>
        <TodoList todo={todo} setTodo={setTodo}/>
    </Container>
  );
}

export default App;
