import React from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';
import './styles.css';
import { DashIcon } from './DashIcon';
import { Infoicon } from './InfoIcon';
import FiltroProyecto from './FiltroTareas'; // Importa el componente FiltroProyecto

const tareas = [
  { nombre: 'Tarea 1' },
  { nombre: 'Tareas 2' },
  // Agrega más proyectos aquí si lo deseas
];

function ListaTareas() {
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
            {tareas.map((tarea, index) => (
            <tr key={index} className='filaProyecto'>
                <td>{tarea.nombre}</td>
                <td>
                <div className="actions">
                    <span style={{paddingTop:'5px'}}><Infoicon /></span>
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