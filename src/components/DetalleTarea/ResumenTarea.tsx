import { Form, Col, Row, Container } from "react-bootstrap";
import { CheckIcon } from "./CheckIcon";
import { XIcon } from "./XIcon";



function ResumenTarea(props: { tarea: { finalizada: boolean, tiempoAdicional: boolean, reprogramada:boolean } }) {
    return (
        <Container className="contResumen">
            <Row>
                <Form className="formResumen">
                    <Col>
                        <Form.Group controlId="avance" className="d-flex justify-content-between align-items-center">
                            <Form.Label className='labelFiltro'>¿Tarea finalizada?</Form.Label>
                            <div style={{width:'4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                {props.tarea.finalizada ? (
                                    <CheckIcon/>
                                ) :(
                                    <XIcon/>
                                )}
                            </div>
                        </Form.Group>

                        <Form.Group controlId="avance" className="d-flex justify-content-between align-items-center">
                            <Form.Label className='labelFiltro'>¿Requirio Tiempo Adicional?</Form.Label>
                            <div style={{width:'4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                {props.tarea.tiempoAdicional ? (
                                    <CheckIcon/>
                                ) : (
                                    <XIcon/>
                                )}
                            </div>
                        </Form.Group>

                        <Form.Group controlId="avance" className="d-flex justify-content-between align-items-center">
                            <Form.Label className='labelFiltro'>¿Reprogramo la Tarea?</Form.Label>
                            <div style={{width:'4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                {props.tarea.reprogramada ? (
                                    <CheckIcon/>
                                ) : (
                                    <XIcon/>
                                )}
                            </div>
                            </Form.Group>
                    </Col>
                </Form>
            </Row>
        </Container>

    );
}

export default ResumenTarea;