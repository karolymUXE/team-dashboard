import { useState, useEffect } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { updateEntity, createEntity } from '../../firebaseUtils'

function ProjectsEdit({ open, onClose, project }) {
  const [editedProject, setEditedProject] = useState(project || {})

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }))
  }

  useEffect(() => {
    if (project) {
      setEditedProject(project);
    }
  }, [project])

  const handleSave = () => {
    if (editedProject) {
      if (editedProject.id) {
        updateEntity('projects', editedProject.id, editedProject)
          .then(() => {
            console.log('Proyecto actualizada exitosamente en Firebase')
            onClose()
          })
          .catch((error) => {
            console.error('Error al actualizar el proyecto en Firebase:', error);
          })
      } else {
        createEntity('projects', editedProject)
          .then(() => {
            console.log('Nuevo proyecto creado exitosamente en Firebase')
            onClose()
          })
          .catch((error) => {
            console.error('Error al crear el nuevo proyecto en Firebase:', error)
          })
      }
    }
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Projects Edit</DialogTitle>
      <DialogContent>
        <TextField
          name="title"
          label="Title"
          value={editedProject.title}
          onChange={handleChange}
        />
        <TextField
          name="squad"
          label="Squad"
          value={editedProject.squad}
          onChange={handleChange}
        />
        <TextField
          name="responsible"
          label="Responsible"
          value={editedProject.responsible}
          onChange={handleChange}
        />
        <TextField
          name="description"
          label="Description"
          value={editedProject.description}
          onChange={handleChange}
        />
        <TextField
          name="jiraId"
          label="Jira ID"
          value={editedProject.jiraId}
          onChange={handleChange}
        />
        <TextField
          name="miroboard"
          label="MIRO Board Link"
          value={editedProject.miroboard}
          onChange={handleChange}
        />
        <TextField
          name="okr"
          label="OKR"
          value={editedProject.okr}
          onChange={handleChange}
        />
        {/* Agrega más campos de texto para editar otros atributos del proyecto */}
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
  )
}

ProjectsEdit.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  project: PropTypes.object,
}

export default ProjectsEdit