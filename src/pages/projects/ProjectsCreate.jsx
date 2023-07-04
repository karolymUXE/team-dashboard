import { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { createEntity } from '../../firebaseUtils'

function ProjectsCreate({ open, onClose }) {
  const [newProject, setNewProject] = useState({
    title: '',
    squad: '',
    responsible: [''],
    okr: '',
    miroboard: '',
    jiraId: '',
    description: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }))
  }

  const handleSave = () => {
    createEntity('projects', newProject)
      .then(() => {
        console.log('Nuevo proyecto creada exitosamente en Firebase')
        setNewProject({
          title: '',
          squad: '',
          responsible: [''],
          okr: '',
          miroboard: '',
          jiraId: '',
          description: ''
        })
        onClose()
      })
      .catch((error) => {
        console.error('Error al crear nuevo proyecto en Firebase:', error)
      })
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Projects Create</DialogTitle>
      <DialogContent>
        <TextField
          name="title"
          label="Title"
          value={newProject.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="squad"
          label="Squad"
          value={newProject.squad}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="responsible"
          label="Responsible"
          value={newProject.responsible}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="description"
          label="Description"
          value={newProject.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="jiraId"
          label="Jira ID"
          value={newProject.jiraId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="miroboard"
          label="MIRO Board Link"
          value={newProject.miroboard}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="okr"
          label="OKR"
          value={newProject.okr}
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
  )
}

ProjectsCreate.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

export default ProjectsCreate
