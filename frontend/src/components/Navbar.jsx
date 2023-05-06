import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./nav.style.css"

export default function Navbar() {
  return (
      <Container className='position-sticky top-0 start-0 nav-cont z-3' fluid>
        <Row className='ps-5 pe-5 navbar'>
            <Col className='nav-logo'><Link to="/" className='nav-link'>PlatePal</Link></Col>
            <Col md={3} className='d-flex justify-content-between'>
                <div><Link to="/services" className='nav-link'>Services</Link></div>
                <div><Link to="/about" className='nav-link'>About</Link></div>
                <div><Link to="/donor/profile" className='nav-link'>Contact</Link></div>
            </Col>
            <Col md={2} >
                <div className='float-end'>
                <Button>Login</Button>
                <Button className='ms-2 bg-light' variant='light'>Signup</Button>
                </div>
            </Col>
        </Row>
      </Container>
  )
}
