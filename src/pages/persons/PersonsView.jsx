import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material'
import PropTypes from 'prop-types'

function PersonsView({ open, onClose, person }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Detalles de Persona</DialogTitle>
      <DialogContent>
        <Typography variant="h6">Nombre: {person.firstName}</Typography>
        <Typography variant="h6">Apellido: {person.lastName}</Typography>
        <Typography variant="h6">Edad: {person.age}</Typography>
        <Typography variant="h6">País: {person.country}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

PersonsView.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  person: PropTypes.object,
}

export default PersonsView
