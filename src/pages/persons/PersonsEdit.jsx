import { useState, useEffect } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { push, update, ref } from 'firebase/database'
import { db } from '../../firebase'

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
        const personRef = ref(db, `persons/${editedPerson.id}`);
        update(personRef, editedPerson)
          .then(() => {
            console.log('Persona actualizada exitosamente en Firebase');
            onClose();
          })
          .catch((error) => {
            console.error('Error al actualizar la persona en Firebase:', error);
          });
      } else {
        const personsRef = ref(db, 'persons');
        push(personsRef, editedPerson)
          .then((newPersonRef) => {
            console.log('Nueva persona creada exitosamente en Firebase con ID:', newPersonRef.key);
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
        <Button onClick={handleSave} color="primary">
          Guardar
        </Button>
        <Button onClick={onClose} color="secondary">
          Cancelar
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

export default PersonsEdit;