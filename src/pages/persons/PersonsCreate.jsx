import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { push, ref } from 'firebase/database';
import { db } from '../../firebase';

function PersonsCreate({ open, onClose }) {
  const [newPerson, setNewPerson] = useState({
    firstName: '',
    lastName: '',
    age: '',
    country: '',
    actionPlans: [''],
    careerPlanId: '',
    feedbacks: [''],
    hardSkills: [''],
    motivators: [''],
    projects: [''],
    salary: 0,
    softSkills: [''],
    squad: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const personsRef = ref(db, 'persons');
    push(personsRef, newPerson)
      .then(() => {
        console.log('Nueva persona creada exitosamente en Firebase');
        setNewPerson({
          firstName: '',
          lastName: '',
          age: '',
          country: '',
        });
        onClose();
      })
      .catch((error) => {
        console.error('Error al crear la nueva persona en Firebase:', error);
      });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Crear Persona</DialogTitle>
      <DialogContent>
        <TextField
          name="firstName"
          label="Nombre"
          value={newPerson.firstName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="lastName"
          label="Apellido"
          value={newPerson.lastName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="age"
          label="Edad"
          value={newPerson.age}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="country"
          label="País"
          value={newPerson.country}
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

PersonsCreate.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default PersonsCreate;
