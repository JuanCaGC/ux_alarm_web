import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import { BackIcon } from './BackIcon';
import { UserIcon } from  './UserIcon/UserIcon';
import { CalendarIcon } from './CalendarIcon';
import { ProjectsIcon } from './ProjectsIcon';
import { DashIcon } from './DashIcon';
import { MenuIcon } from './MenuIcon';
import ListaTareas from './ListaTareas/ListaTareas';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const proyectos = [
    { id: '0', tareas: [{ id: '1', nombre: 'Tarea 1' }, { id: '2', nombre: 'Tarea 2' }] },
    { id: '1', tareas: [{ id: '3', nombre: 'Tarea 3' }, { id: '4', nombre: 'Tarea 4' }, { id: '5', nombre: 'Tarea 5' }] },
    // ...
];

function DetalleProyecto() {
    const [navExpanded, setNavExpanded] = useState(true);
    const [tareas, setTareas] = useState<{ id: string, nombre: string }[]>([]);
    const { id } = useParams();

    useEffect(() => {
        const proyecto = proyectos.find(proyecto => proyecto.id === id);
        if (proyecto) {
            setTareas(proyecto.tareas);
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
                    <h1 className= "titulo_proyectos">Detalle Proyecto</h1>
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
                    <ListaTareas tareas={tareas} />
                </Col>
            </Row>
        </div>
    );
}

export default DetalleProyecto;