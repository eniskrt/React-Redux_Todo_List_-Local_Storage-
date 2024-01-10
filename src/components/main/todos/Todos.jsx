import React, { useState } from 'react'
import { Container, Form, ListGroup } from 'react-bootstrap'
import "./todos.css"
import {  useDispatch, useSelector } from 'react-redux'
import { changeTodo, isDone } from '../../../features/todo/todoSlice'
import { GoCheck, GoPencil } from "react-icons/go";


const Todos = () => {

  const {todos} = useSelector(state => state.todo)
  const dispatch = useDispatch()
  const [isEdittingId, setIsEdittingId] = useState()
  const [edittingText, setEdittingText] = useState()

  const onEditCopmleteClick = () => { 
    dispatch(changeTodo({
      id:isEdittingId,
      title:edittingText
    }))
    setIsEdittingId(null)
   }
  
  return (
    <Container>
      <ListGroup>
        {todos.map((item) => (
          item.done ?  null: (
            <div key={item.id}>
              {item.id === isEdittingId ? (
                <div className='d-flex align-items-center mb-4 gap-3'>
                  <Form.Control defaultValue={edittingText} onKeyUp={(e)=>setEdittingText(e.target.value)}/>
                  <GoCheck onClick={onEditCopmleteClick} size={"2rem"} color='#94ADCF'/>
                </div>
              ):(

            <ListGroup.Item as="li" className="todo">
              <span onClick={() => dispatch(isDone(item.id))}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  className="me-2 mb-1"
                  style={item.done ? { fill: "#94ADCF" } : {}}
                >
                  <circle
                    cx="6.39478"
                    cy="6"
                    r="5"
                    stroke="#94ADCF"
                    strokeWidth="2"
                  />
                </svg>
              {item.title}
              </span>
              <GoPencil onClick={()=>{
                setIsEdittingId(item.id)
                setEdittingText(item.title)
              }}/>
            </ListGroup.Item>
              )}
            </div>
          )
        ))}
      </ListGroup>
    </Container>
  )
}

export default Todos
