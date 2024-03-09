import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { LookIcon } from './LookIcon';
import { CleanIcon } from './CleanIcon';

function FiltroProyecto() {
    return (
    <Form>
        <Row>
        <Col>
            <Form.Group controlId="fechaInicio">
            <Form.Label className='labelFiltro'>Fecha inicio</Form.Label >
            <Form.Control type="date" className='inputFiltro' />
            </Form.Group>
        </Col>
        <Col>
            <Form.Group controlId="fechaFin">
            <Form.Label className='labelFiltro'>Fecha fin</Form.Label>
            <Form.Control type="date" className='inputFiltro' />
            </Form.Group>
        </Col>
        <Col>
            <Form.Group controlId="numeroTareas">
            <Form.Label className='labelFiltro'>Número de tareas</Form.Label>
            <Form.Control type="number" className='inputFiltro' />
            </Form.Group>
        </Col>
        </Row>
        <Row style={{paddingTop:"1rem"}}>
        <Col>
            <Form.Group controlId="estadoProyecto">
            <Form.Label className='labelFiltro'>Estado proyecto</Form.Label>
            <Form.Control type="number" className='inputFiltro' />
            </Form.Group>
        </Col>
        <Col>
            <Form.Group controlId="avance" >
            <Form.Label className='labelFiltro'>Avance</Form.Label>
            <Form.Control type="number" className='inputFiltro'/>
            </Form.Group>
        </Col>
        <Col className="colB" style={{padding:"1rem 1rem"}} >
            <Button variant="primary" type="submit" className='botonFiltro'>
                <LookIcon></LookIcon>
            </Button>
            <Button variant="primary" type="submit" className='botonFiltro'>
                <CleanIcon></CleanIcon>
            </Button>
        </Col>
        </Row>
    </Form>
    );
}

export default FiltroProyecto;