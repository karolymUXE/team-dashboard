import { db } from '../../firebase'
import DataTable from '../../components/DataTable'
import Typography from '@mui/material/Typography'
import PersonsEdit from './PersonsEdit'
import PersonsCreate from './PersonsCreate'
import PersonsView from './PersonsView'
import { useEffect, useState } from 'react'
import { onValue, remove, update, ref } from 'firebase/database'
import Button from '@mui/material/Button'

function PersonsList() {
  const [persons, setPersons] = useState([]);
  const [editingPerson, setEditingPerson] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState({});

  const handleOpenViewDialog = (person) => {
    setSelectedPerson(person);
    setOpenViewDialog(true);
  };

  const handleCloseViewDialog = () => {
    setOpenViewDialog(false);
  };

  const handleOpenCreateDialog = () => {
    setOpenCreateDialog(true);
  };

  const handleCloseCreateDialog = () => {
    setOpenCreateDialog(false);
  };

  useEffect(() => {
    const personsRef = ref(db, 'persons');
    onValue(personsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const personsList = Object.entries(data).map(([id, person]) => ({ id, ...person }));
        setPersons(personsList);
      }
    });
  }, []);

  const handleEdit = (person) => {
    setEditingPerson(person);
    setOpenEditDialog(true);
  };

  const handleSave = (editedPerson) => {
    if (editingPerson) {
      const personRef = ref(db, `persons/${editingPerson.id}`);
      update(personRef, editedPerson)
        .then(() => {
          console.log('Persona actualizada exitosamente en Firebase');
          setEditingPerson(null);
          setOpenEditDialog(false);
        })
        .catch((error) => {
          console.error('Error al actualizar la persona en Firebase:', error);
        });
    }
  };

  const handleCloseEditDialog = () => {
    setEditingPerson(null);
    setOpenEditDialog(false);
  };

  const handleDelete = (person) => {
    const personRef = ref(db, `persons/${person.id}`);
    remove(personRef)
      .then(() => {
        console.log('Persona eliminada exitosamente de Firebase');
      })
      .catch((error) => {
        console.error('Error al eliminar la persona de Firebase:', error);
      });
  };

  const columns = [
    { field: 'firstName', header: 'Nombre' },
    { field: 'lastName', header: 'Apellido' },
    { field: 'age', header: 'Edad' },
    { field: 'country', header: 'País' },
  ];

  return (
    <>
      <div>
        <Typography variant="h5" mb={2}>
          Lista de Personas
        </Typography>
        <PersonsCreate open={openCreateDialog} onClose={handleCloseCreateDialog} />
        <Button variant="contained" color="primary" onClick={handleOpenCreateDialog}>
          Crear Persona
        </Button>
        {persons.length > 0 && (
          <DataTable data={persons} columns={columns} onEdit={handleEdit} onDelete={handleDelete}  onView={handleOpenViewDialog} />
        )}
        <PersonsView open={openViewDialog} onClose={handleCloseViewDialog} person={selectedPerson} />
        <PersonsEdit
          open={openEditDialog}
          onClose={handleCloseEditDialog}
          person={editingPerson}
          onSave={handleSave}
        />
      </div>
    </>
  );
}

export default PersonsList;
