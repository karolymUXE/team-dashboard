import { db } from '../../firebase'
import DataTable from '../../components/DataTable'
import { onValue, ref } from 'firebase/database'
import { useEffect, useState } from 'react'


function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectsRef = ref(db, 'projects');

    onValue(projectsRef, (snapshot) => {
      const projectsData = snapshot.val();
      setProjects(projectsData ? Object.values(projectsData) : []);
    });

    return () => {
      onValue(projectsRef, null);
    };
  }, []);

  const columns = [
    { field: 'title', header: 'Título' },
    { field: 'okr', header: 'OKR' },
    { field: 'responsible', header: 'Responsables' },
    { field: 'miroboard', header: 'Miroboard' },
    { field: 'jiraId', header: 'Jira ID' },
  ];

  const handleEdit = (projectId) => {
    console.log('Editar proyecto con ID:', projectId);
  };

  return (
    <DataTable data={projects} columns={columns} onEdit={handleEdit} />
  );
}

export default ProjectsList;
