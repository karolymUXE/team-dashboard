import { db } from '../../firebase';
import DataTable from '../../components/DataTable';
import { onValue, remove, ref, update } from 'firebase/database';
import { useState, useEffect } from 'react';
import { Button, Typography, Stack } from '@mui/material';
import PersonsEdit from './PersonsEdit';
import PersonsCreate from './PersonsCreate';

function PersonsList() {
  const [persons, setPersons] = useState([]);
  const [editingPerson, setEditingPerson] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);

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
          Persons List
        </Typography>
        <PersonsCreate open={openCreateDialog} onClose={handleCloseCreateDialog} />
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} mb={2}>
          <Button variant="contained" color="terciary" onClick={handleOpenCreateDialog}>Add person</Button>
        </Stack>
        {persons.length > 0 && (
          <DataTable
            data={persons}
            columns={columns}
            onEdit={handleEdit}
            onDelete={handleDelete}
            type='People'
          />
        )}
        <PersonsEdit open={openEditDialog} onClose={handleCloseEditDialog} person={editingPerson} onSave={handleSave} />
      </div>
    </>
  );
}

export default PersonsList;
