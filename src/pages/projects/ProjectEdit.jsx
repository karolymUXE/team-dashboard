import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';

function EditDialog({ open, onClose, person }) {
  const [editedPerson, setEditedPerson] = useState(person);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Aquí puedes implementar la lógica para guardar los cambios en la persona
    console.log('Guardar cambios:', editedPerson);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Editar Persona</DialogTitle>
      <DialogContent>
        <TextField
          name="firstName"
          label="Nombre"
          value={editedPerson.firstName}
          onChange={handleChange}
        />
        <TextField
          name="lastName"
          label="Apellido"
          value={editedPerson.lastName}
          onChange={handleChange}
        />
        <TextField
          name="age"
          label="Edad"
          value={editedPerson.age}
          onChange={handleChange}
        />
        {/* Agrega más campos de texto para editar otros atributos de la persona */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave}>Guardar</Button>
        <Button onClick={onClose}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  );
}

EditDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  person: PropTypes.object,
};

export default EditDialog;