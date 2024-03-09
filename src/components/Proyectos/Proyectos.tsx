import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import { BackIcon } from './BackIcon';
import { UserIcon } from  './UserIcon/UserIcon';
import { CalendarIcon } from './CalendarIcon';
import { ProjectsIcon } from './ProjectsIcon';
import { DashIcon } from './DashIcon';
import { MenuIcon } from './MenuIcon';
import { useState } from 'react';
import ListaProyectos from './ListaProyectos/ListaProyectos';


function Proyectos() {
    const [navExpanded, setNavExpanded] = useState(true);

    const toggleNav = () => {
        setNavExpanded(!navExpanded);
        console.log(navExpanded);
    };

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
                <Col className='menuColumn'>
                    <MenuIcon onClick={toggleNav} />
                    <Navbar className='navMenu' expand="lg" style={{display: navExpanded ? 'block' : 'none'}}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className='menu'>
                                <Nav.Link href="#"  className ='menuItem' style={{color:'#EC6449'}}><CalendarIcon className='iconComponent'></CalendarIcon> Calendario</Nav.Link>
                                <Nav.Link href="#" className = 'menuItem' style={{color:'#EC6449'}}><ProjectsIcon></ProjectsIcon> Proyectos</Nav.Link>
                                <Nav.Link href="#" className = 'menuItem' style={{color:'#EC6449'}}><DashIcon></DashIcon> Informe</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
                <Col>
                   <ListaProyectos></ListaProyectos>
                </Col>
            </Row>
        </div>
    );
}

export default Proyectos;