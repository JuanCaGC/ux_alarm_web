import { Modal, Form, Col, Row, Container, ListGroup,Button } from "react-bootstrap";
import { CheckIcon } from "./CheckIcon";
import { XIcon } from "./XIcon";
import { AddIcon } from "./AddIcon";
import { useState } from "react";



const comentariosTareas = [{id: '1', comentarios: ['Comentario 1', 'Comentario 2', 'Comentario 3']},
                            {id: '2', comentarios: ['Comentario 3', 'Comentario 4', 'Comentario 5']},
                            {id: '3', comentarios: ['Comentario 6', 'Comentario 7', 'Comentario 8']},
                            {id: '4', comentarios: ['Comentario 9', 'Comentario 10', 'Comentario 11']},
                            {id: '5', comentarios: ['Comentario 12', 'Comentario 13', 'Comentario 14']}];

function ResumenTarea(props: { tarea: { id: String, finalizada: boolean, tiempoAdicional: boolean, reprogramada:boolean } }) {
    const [show, setShow] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [comment, setComment] = useState(comentariosTareas.find(comentarios => comentarios.id === props.tarea.id)?.comentarios ?? []);

    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true); console.log('show');};
    const handleSave = () => {
        if(newComment !== ''){
            setComment([...comment, newComment]);
        }

        setShow(false);
    };
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
            <Row className="rowComments">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '800px'}}>
                    <h3 className="commentsTittle">Comentarios</h3>
                    <AddIcon style={{cursor:"pointer"}} onClick={handleShow}/>
                    </div>
            </Row>
            <Row>
                <ListGroup>
                    {comment.map((comentario, index) => (
                        <ListGroup.Item key={index} className="commentItem">{comentario}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Row>
            <Modal show={show} onHide={handleClose}  className="modal-custom">
                <Modal.Header closeButton>
                    <Modal.Title className="modal-titulo">Agregar Comentario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control as="textarea" onChange={e => setNewComment(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                    Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>

    );
}

export default ResumenTarea;