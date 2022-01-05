import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Image, Form, FormControl, Button } from 'react-bootstrap'
import logo from '../assets/images/logo.svg'
import './Topbar.css'

export default function Topbar() {
  return (
    <div>
      <Navbar bg="white" expand="lg" className="shadow mb-4">
        <Container fluid className="justify-content-betwee p-0">
          <Link to="/">
            <Image src={logo} alt="logo" width={140} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Form className="form-inline ml-auto">
              <FormControl type="text" placeholder="Cari Blog Post..." className="bg-light border-0 rounded-left" htmlSize={50} />
              <Button type="submit" className="bg-grape border-0 rounded-right"><i className="fas fa-search"></i></Button>
            </Form>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
