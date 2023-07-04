import { db } from '../../firebase'
import DataTable from '../../components/DataTable'
import { onValue, ref, update, remove } from 'firebase/database'
import { useEffect, useState } from 'react'
import { Typography, Stack, Button } from '@mui/material'
import ProjectsEdit from './ProjectsEdit'
import ProjectsCreate from './ProjectsCreate'


function ProjectsList() {
  const [projects, setProjects] = useState([])
  const [editingProject, setEditingProject] = useState(null)
  const [openEditDialog, setOpenEditDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)

  const handleOpenCreateDialog = () => {
    setOpenCreateDialog(true)
  }

  const handleCloseCreateDialog = () => {
    setOpenCreateDialog(false)
  }

  useEffect(() => {
    const projectsRef = ref(db, 'projects')
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const projectsList = Object.entries(data).map(([id, project]) => ({ id, ...project }))
        setProjects(projectsList)
      }
    })
  }, [])

  const handleEdit = (project) => {
    setEditingProject(project)
    setOpenEditDialog(true)
  }

  const handleSave = (editedProject) => {
    if (editingProject) {
      const projectRef = ref(db, `projects/${editingProject.id}`)
      update(projectRef, editedProject)
        .then(() => {
          console.log('Proyecto actualizada exitosamente en Firebase')
          setEditingProject(null)
          setOpenEditDialog(false)
        })
        .catch((error) => {
          console.error('Error al actualizar la proyecto en Firebase:', error)
        })
    }
  }

  const handleCloseEditDialog = () => {
    setEditingProject(null)
    setOpenEditDialog(false)
  }

  const handleDelete = (project) => {
    const projectRef = ref(db, `projects/${project.id}`)
    remove(projectRef)
      .then(() => {
        console.log('Proyecto eliminada exitosamente de Firebase')
      })
      .catch((error) => {
        console.error('Error al eliminar la proyecto de Firebase:', error)
      })
  }

  const columns = [
    { field: 'title', header: 'Título' },
    { field: 'okr', header: 'OKR' },
    { field: 'responsible', header: 'Responsables' },
    { field: 'miroboard', header: 'Miroboard' },
    { field: 'jiraId', header: 'Jira ID' },
  ]

  return (
    <div>
      <Typography variant="h5" mb={2}>
          Projects List
      </Typography>
      <ProjectsCreate open={openCreateDialog} onClose={handleCloseCreateDialog} />
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} mb={2}>
        <Button variant="contained" color="terciary" onClick={handleOpenCreateDialog}>Add Project</Button>
      </Stack>
      {projects.length > 0 && (
          <DataTable
            data={projects}
            columns={columns}
            onEdit={handleEdit}
            onDelete={handleDelete}
            type='Projects'
          />
        )}
      <ProjectsEdit open={openEditDialog} onClose={handleCloseEditDialog} project={editingProject} onSave={handleSave} />
    </div>
  )
}

export default ProjectsList
