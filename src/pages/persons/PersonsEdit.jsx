import { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { updateEntity, createEntity } from '../../firebaseUtils'

function PersonsEdit({ open, onClose, person }) {
  const [editedPerson, setEditedPerson] = useState(person || {});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (person) {
      setEditedPerson(person);
    }
  }, [person]);

  const handleSave = () => {
    if (editedPerson) {
      if (editedPerson.id) {
        updateEntity('persons', editedPerson.id, editedPerson)
          .then(() => {
            console.log('Persona actualizada exitosamente en Firebase');
            onClose();
          })
          .catch((error) => {
            console.error('Error al actualizar la persona en Firebase:', error);
          });
      } else {
        createEntity('persons', editedPerson)
          .then(() => {
            console.log('Nueva persona creada exitosamente en Firebase');
            onClose();
          })
          .catch((error) => {
            console.error('Error al crear la nueva persona en Firebase:', error);
          });
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Editar Persona</DialogTitle>
      <DialogContent>
        <TextField
          name="firstName"
          label="Nombre"
          value={editedPerson.firstName || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="lastName"
          label="Apellido"
          value={editedPerson.lastName || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="age"
          label="Edad"
          value={editedPerson.age || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="country"
          label="País"
          value={editedPerson.country || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSave} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

PersonsEdit.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  person: PropTypes.object,
};

export default PersonsEdit
