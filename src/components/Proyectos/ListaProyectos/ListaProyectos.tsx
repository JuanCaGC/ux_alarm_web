import React from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';
import './styles.css';
import { DashIcon } from './DashIcon';
import { Infoicon } from './InfoIcon';
import FiltroProyecto from './FiltroProyecto'; // Importa el componente FiltroProyecto

const proyectos = [
  { nombre: 'Proyecto 1' },
  { nombre: 'Proyecto 2' },
  // Agrega más proyectos aquí si lo deseas
];

function ListaProyectos() {
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
            {proyectos.map((proyecto, index) => (
            <tr key={index} className='filaProyecto'>
                <td>{proyecto.nombre}</td>
                <td>
                <div className="actions">
                    <span><DashIcon /></span>
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

export default ListaProyectos;