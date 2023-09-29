import { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { createEntity } from '../../firebaseUtils'

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
    squad: '',
    role: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }))
  }

  const handleSave = () => {
    createEntity('persons', newPerson)
      .then(() => {
        console.log('Nueva persona creada exitosamente en Firebase')
        setNewPerson({
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
          squad: '',
          role: '',
        })
        onClose()
      })
      .catch((error) => {
        console.error('Error al crear la nueva persona en Firebase:', error)
      })
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Person</DialogTitle>
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
        <TextField
          name="actionPlans"
          label="Action plans"
          value={newPerson.actionPlans}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="careerPlanId"
          label="Career Plan"
          value={newPerson.careerPlanId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="hardSkills"
          label="Hard Skills"
          value={newPerson.hardSkills}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="motivators"
          label="Motivators"
          value={newPerson.motivators}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="projects"
          label="Projects"
          value={newPerson.projects}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="salary"
          label="Salary"
          value={newPerson.salary}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="softSkills"
          label="Soft Skills"
          value={newPerson.softSkills}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="squad"
          label="Squad"
          value={newPerson.squad}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="role"
          label="Role"
          value={newPerson.role}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

PersonsCreate.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

export default PersonsCreate
