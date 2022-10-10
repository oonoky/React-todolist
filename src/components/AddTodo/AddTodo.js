import React,{useEffect, useState} from 'react'
import { v4 as uuidv4 } from "uuid";
import {Row, Col, Button, FormControl} from 'react-bootstrap'
import s from './AddTodo.module.css'
function AddTodo({todo,setTodo}){

    const[value, setValue]=useState('') 
    console.log(value)

    function saveTodo(){
        if(value){
        setTodo(
            [...todo,{
                id: uuidv4(),
                title:value,
                status:true
            }]
        )
        setValue('')
    }
}
useEffect(()=>{
    localStorage.setItem('todo', JSON.stringify(todo))
},[todo])

    return (
        <Row>
            <Col className={s.addTodoForm}>
            <FormControl placeholder='Введите задачу' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <Button className={s.btn} onClick={saveTodo}>Сохранить</Button>
            </Col>
        </Row>
    )
}
export default AddTodo