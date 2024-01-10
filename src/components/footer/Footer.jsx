import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { FiPlus } from "react-icons/fi";
import "./footer.css"
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../features/todo/todoSlice';

const Footer = () => {

    const [todo, setTodo] = useState("")
    
    const {todos} = useSelector(state=>state.todo)
    
    
    const dispatch = useDispatch()

    const submitHandle = () =>{
      if(todo === "") return window.alert("Geçerli bir todo giriniz!")
      dispatch(addTodo({
          id:(Math.random()*1000).toFixed(),
          title:todo,
          done:false,
        }
        ))
        setTodo("")
        
    }


  return (
    <Container className='btnContainer d-flex align-items-center justfy-content-center'>
        <Form.Control type='text' 
            value={todo} 
            placeholder="Add new task..." 
            onChange={(e)=>setTodo(e.target.value)}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                submitHandle()
              }}}
            />
        <Button className='bg-transparent border-0 addBtn' onClick={()=>submitHandle()}>
            <FiPlus size={"2rem"}/>
        </Button>
    </Container>
  )
}

export default Footer
