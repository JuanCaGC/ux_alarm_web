import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import { BackIcon } from './BackIcon';
import { UserIcon } from  './UserIcon/UserIcon';
import { CalendarIcon } from './CalendarIcon';
import { ProjectsIcon } from './ProjectsIcon';


function Proyectos() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Row className='header_general'>
                <Col>
                    <BackIcon className='back_button' />
                </Col>
                <Col>
                    <h1 className= "titulo_proyectos">Proyectos</h1>
                </Col>
                <Col style={{alignItems:'center'}}>
                    <UserIcon className='user_button' />
                </Col>
            </Row>
            <Row className='rowContainer'>
                <Col>
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className='menu'>
                                <Nav.Link href="#calendar"  className ='menuItem' style={{color:'#EC6449'}}><CalendarIcon className='calendarIcon'></CalendarIcon> Calendario</Nav.Link>
                                <Nav.Link href="#" className = 'menuItem' style={{color:'#EC6449'}}><ProjectsIcon></ProjectsIcon> Proyectos</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
                <Col>
                    {/* Content goes here */}
                </Col>
            </Row>
        </div>
    );
}

export default Proyectos;