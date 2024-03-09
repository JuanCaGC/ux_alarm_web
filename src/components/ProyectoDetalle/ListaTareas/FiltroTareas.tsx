import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { LookIcon } from './LookIcon';
import { CleanIcon } from './CleanIcon';

function FiltroTareas() {
    return (
    <Form>
        <Row>
        <Col>
            <Form.Group controlId="fechaInicio">
            <Form.Label className='labelFiltro'>Fecha</Form.Label >
            <Form.Control type="date" className='inputFiltro' />
            </Form.Group>
        </Col>
        <Col>
        <Col>
            <Form.Group controlId="horaTareas">
            <Form.Label className='labelFiltro'>Hora</Form.Label>
            <Form.Control type="time" className='inputFiltro' />
            </Form.Group>
        </Col>
        </Col>
        <Col>
            <Form.Group controlId="estadoProyecto">
            <Form.Label className='labelFiltro'>Tiempo Adicional</Form.Label>
            <Form.Control type="number" className='inputFiltro' />
            </Form.Group>
        </Col>
        </Row>
        <Row style={{paddingTop:"1rem"}}>
        <Col className='colF'>
            <Form.Group controlId="avance" className="d-flex justify-content-between align-items-center">
                <Form.Label className='labelFiltro'>Tarea Terminada</Form.Label>
                <Form.Check type="checkbox" className='checkFiltro' id="checkFiltro"/>
            </Form.Group>
        </Col>
        <Col>  </Col>
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

export default FiltroTareas;