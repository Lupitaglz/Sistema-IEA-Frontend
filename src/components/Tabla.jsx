import React, { useState } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import NavBar from "./NavBar"

const Tabla = () => {
  const [showModal, setShowModal] = useState(false);
  const [programas, setProgramas] = useState([]);
  const [nuevoPrograma, setNuevoPrograma] = useState('');
  const [nuevoPuntaje, setNuevoPuntaje] = useState('');
  const [programaSeleccionado, setProgramaSeleccionado] = useState(null);

  const agregarPrograma = () => {
    const programa = {
      nombre: nuevoPrograma,
      puntaje: nuevoPuntaje
    };

    setProgramas([...programas, programa]);
    resetForm();
    handleCloseModal();
  };

  const actualizarPrograma = () => {
    const programasActualizados = programas.map((programa) => {
      if (programa === programaSeleccionado) {
        return {
          ...programa,
          nombre: nuevoPrograma,
          puntaje: nuevoPuntaje
        };
      }
      return programa;
    });

    setProgramas(programasActualizados);
    resetForm();
    handleCloseModal();
  };

  const eliminarPrograma = () => {
    const programasActualizados = programas.filter(
      (programa) => programa !== programaSeleccionado
    );

    setProgramas(programasActualizados);
    resetForm();
    handleCloseModal();
  };

  const resetForm = () => {
    setNuevoPrograma('');
    setNuevoPuntaje('');
    setProgramaSeleccionado(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleEditPrograma = (programa) => {
    setNuevoPrograma(programa.nombre);
    setNuevoPuntaje(programa.puntaje);
    setProgramaSeleccionado(programa);
    handleShowModal();
  };
  return (
    <div>
      <NavBar />
      <br/>
      <br/>
      <h2>Tabla de Programa Educativo</h2>
      <hr></hr>
      <Button variant="outline-success" onClick={handleShowModal}>
        Añadir Registro
      </Button>
      <br/>
      <br/>
      <table class="table">
        <thead>
          <tr>
            <th>Programa</th>
            <th>Puntaje</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {programas.map((programa, index) => (
            <tr key={index}>
              <td>{programa.nombre}</td>
              <td>{programa.puntaje}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => handleEditPrograma(programa)}
                  className="mr-"
                >
                  Actualizar
                </Button>{' '}
                <Button
                  variant="danger"
                  onClick={() => eliminarPrograma(programa)}
                >
                  Eliminar
                </Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {programaSeleccionado ? 'Actualizar Registro' : 'Añadir Registro'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPrograma">
              <Form.Label>Programa</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del programa"
                value={nuevoPrograma}
                onChange={(e) => setNuevoPrograma(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPuntaje">
              <Form.Label>Puntaje</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el puntaje"
                value={nuevoPuntaje}
                onChange={(e) => setNuevoPuntaje(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          {programaSeleccionado ? (
            <Button variant="primary" onClick={actualizarPrograma}>
              Actualizar
            </Button>
          ) : (
            <Button variant="primary" onClick={agregarPrograma}>
              Guardar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Tabla