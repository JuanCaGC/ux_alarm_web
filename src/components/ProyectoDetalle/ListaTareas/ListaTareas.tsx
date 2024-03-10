import React from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';
import './styles.css';
import { DashIcon } from './DashIcon';
import { Infoicon } from './InfoIcon';
import FiltroProyecto from './FiltroTareas';
import { Link } from 'react-router-dom';

function ListaTareas(props: { tareas: { id: string, nombre: string }[] }) {
    return (
    <Container className='containerLista'>
        <Row style={{paddingBottom:'10px', paddingTop:'0px'}}>
            <FiltroProyecto />
        </Row>
        <Row>
            <Table>
            <thead>
                <tr className='encabezado'>
                <th>Nombre</th>
                <th className='headAcciones'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {props.tareas.map((tarea, index) => (
                <tr key={index} className='filaProyecto'>
                    <td>{tarea.nombre}</td>
                    <td>
                    <div className="actions">
                        <span style={{paddingTop:'5px'}}>
                            <Link to={`/proyectos/detalle/tarea/${tarea.id}`}>
                                <Infoicon />
                            </Link>
                        </span>
                    </div>
                    </td>
                </tr>
                ))}
            </tbody>
            </Table>
        </Row>
    </Container>
);
}

export default ListaTareas;