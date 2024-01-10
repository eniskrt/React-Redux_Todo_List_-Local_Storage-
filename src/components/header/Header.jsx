import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { CgMenuRight } from "react-icons/cg";
import "./header.css"

const Header = () => {
  return (
    <Navbar expand="sm" className="justify-content-between">
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand className='brandLogo pt-4' href="#home">My Task</Navbar.Brand>
        <Button id='toggleBtn' className='border-0 bg-transparent'>
        <CgMenuRight/>
        </Button>
      </Container>
    </Navbar>
  )
}

export default Header
