import React from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'
import "./completed.css"
import {  useDispatch, useSelector } from 'react-redux'
import { deleteTodo, isDone } from '../../../features/todo/todoSlice'
import { GoTrash } from "react-icons/go";

const CompletedTasks = () => {

  const {todos} = useSelector(state => state.todo)

  

  const dispatch = useDispatch()

  return (
    <Container>
        <h2 className='fs-5 fw-light my-4'>Completed</h2>

    <ListGroup id='todos'>
      {todos.map((item)=>(
        item.done ?(

        <ListGroup.Item key={item.id} className='todo completed' as="li">
        <span onClick={()=>dispatch(isDone(item.id))}>
        <svg xmlns="http://www.w3.org/2000/svg" 
            width="13" height="12" 
            viewBox="0 0 13 12" 
            fill="none"
            style={item.done?{fill:"#94ADCF"}:{}}
            className="me-2 mb-1"
            > 
            <circle cx="6.39478" cy="6" r="5" stroke="#94ADCF" strokeWidth="2"
            />
        </svg>
        {item.title}
        </span>
        <GoTrash onClick={()=>dispatch(deleteTodo(item.id))}/>
        </ListGroup.Item>
        ):""
      ))}

      
    </ListGroup>
    </Container>
  )
}

export default CompletedTasks
