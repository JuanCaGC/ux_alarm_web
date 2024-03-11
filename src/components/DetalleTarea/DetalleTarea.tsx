import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import { BackIcon } from './BackIcon';
import { UserIcon } from  './UserIcon/UserIcon';
import { CalendarIcon } from './CalendarIcon';
import { ProjectsIcon } from './ProjectsIcon';
import { DashIcon } from './DashIcon';
import { MenuIcon } from './MenuIcon';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ResumenTarea from './ResumenTarea';

const tareas = [{id:'1', finalizada: false, tiempoAdicional: false, reprogramada: true},
                {id:'2', finalizada: true, tiempoAdicional: true, reprogramada: false},
                {id:'3', finalizada: false, tiempoAdicional: true, reprogramada: false},
                {id:'4', finalizada: true, tiempoAdicional: false, reprogramada: true},
                {id:'5', finalizada: true, tiempoAdicional: true, reprogramada: true},];


function DetalleTarea() {
    const [navExpanded, setNavExpanded] = useState(true);
    const [tarea, setTareas] = useState<{ id: string, finalizada: boolean, tiempoAdicional: boolean, reprogramada: boolean } | undefined>();
    const { id } = useParams();

    useEffect(() => {
        const tarea = tareas.find(tarea => tarea.id === id);
        if (tarea) {
            setTareas(tarea);
        }
    }, [id]);

    const toggleNav = () => {
        setNavExpanded(!navExpanded);
        console.log(navExpanded);
    };

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Row className='header_general'>
                <Col>
                    <BackIcon className='back_button' onClick={handleBackClick} />
                </Col>
                <Col>
                    <h1 className= "titulo_proyectos">Detalle Tarea</h1>
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
                                <Nav.Link href="http://localhost:3000/proyectos" className = 'menuItem' style={{color:'#EC6449'}}><ProjectsIcon></ProjectsIcon> Proyectos</Nav.Link>
                                <Nav.Link href="#" className = 'menuItem' style={{color:'#EC6449'}}><DashIcon></DashIcon> Informe</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
                <Col>
                {tarea && <ResumenTarea tarea={tarea} />}
                </Col>
            </Row>
        </div>
    );
}

export default DetalleTarea;