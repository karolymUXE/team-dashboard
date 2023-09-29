import Poster from "@components/Poster"
import { useParams } from 'react-router-dom'
import { getEntityDetails } from '../../firebaseUtils'
import { useEffect, useState } from 'react'

function ProjectsView() {
  const { id } = useParams()
  const [projectData, setProjectData] = useState(null)

  useEffect(() => {
    if (id) {
      getEntityDetails('projects', id)
        .then((data) => {
          setProjectData(data)
        })
        .catch((error) => {
          console.error('Error al obtener los datos de la projecta desde Firebase:', error)
        })
    }
  }, [id])

  return (
    <>
      {projectData && (
        <Poster title={projectData.id} graph={projectData.title} />
      )}
    </>
  )
}

export default ProjectsView
