import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Image, Form, FormControl, Button, Col } from 'react-bootstrap'
import logo from '../assets/images/logo.svg'
import './Topbar.css'

export default function Topbar() {
  return (
    <div>
      <Navbar bg="white" expand="lg" className="shadow mb-4">
        <Container fluid className="justify-content-betwee p-0">

          <Col xs={4} md={2} >
            <Link to="/">
              <Image fluid src={logo} alt="logo" />
            </Link>
          </Col>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Col sm={12} lg={4} className="p-0 mt-3 mt-lg-0" >
            <Navbar.Collapse id="basic-navbar-nav">
              <Form className="form-inline ml-auto w-100 form-search">
                <FormControl type="text" placeholder="Cari Blog Post..." className="bg-light border-0 rounded-left w-100" />
                <Button type="submit" className="bg-grape border-0 rounded-right btn-search"><i className="fas fa-search"></i></Button>
              </Form>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
    </div>
  )
}
