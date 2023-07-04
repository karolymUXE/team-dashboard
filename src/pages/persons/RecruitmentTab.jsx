import BigBox from '@components/BigBox'
import PropTypes from 'prop-types'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useEffect, useState } from 'react'
import { Box, List, Card, CardContent, Typography, ListItemButton, ListItemText, Collapse } from '@mui/material'
import { getEntityDetails, updateEntity } from '../../firebaseUtils'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

function RecruitmentTab({ data }) {
  const [processes, setProcesses] = useState([]);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const fetchProcesses = async () => {
      const processesDetails = await Promise.all(
        data.selectionProcesses.map((processId) => getEntityDetails('selectionProcesses', processId))
      );
      setProcesses(processesDetails);
    };

    if (data.selectionProcesses) {
      fetchProcesses();
    }
  }, [data.selectionProcesses]);

  const handleDragEnd = async (result) => {
    const { source, destination } = result;

    // Si no hay destino o el drag and drop es inválido, salimos de la función
    if (!destination || !result.destination) {
      console.log('El drag and drop no es válido, salimos de la función.');
      return;
    }

    // Si el candidato fue soltado en el mismo lugar que se encontraba antes, no hacemos nada
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      console.log('El candidato fue soltado en el mismo lugar que se encontraba antes, no hacemos nada.');
      return;
    }

    // Obtenemos el índice del candidato en la lista original (source)
    const candidateIndex = source.index;

    // Obtenemos el índice del stage de origen y de destino desde el droppableId
    const [sourceProcessIndex, sourceStageIndex] = source.droppableId.split('-').slice(1).map(Number);
    const [destProcessIndex, destStageIndex] = destination.droppableId.split('-').slice(1).map(Number);

    // Obtenemos los procesos de selección originales
    const sourceProcess = processes[sourceProcessIndex];
    const destProcess = processes[destProcessIndex];

    // Verificamos que los procesos y etapas existan antes de continuar
    if (
      !sourceProcess ||
      !sourceProcess.stages ||
      !sourceProcess.stages[`stage${sourceStageIndex + 1}`] ||
      !destProcess ||
      !destProcess.stages ||
      !destProcess.stages[`stage${destStageIndex + 1}`]
    ) {
      console.log('Los datos de las etapas no son válidos.');
      return;
    }

    // Creamos copias de los procesos de selección y etapas para actualizar
    const updatedSourceProcess = { ...sourceProcess };
    const updatedDestProcess = { ...destProcess };

    // Obtenemos los stages actualizados desde las copias de los procesos
    const updatedSourceStage = { ...updatedSourceProcess.stages[`stage${sourceStageIndex + 1}`] };
    const updatedDestStage = { ...updatedDestProcess.stages[`stage${destStageIndex + 1}`] };

    // Obtenemos el candidato desde el stage de origen y lo eliminamos de la lista
    const candidateToMove = updatedSourceStage.candidates.splice(candidateIndex, 1)[0];

    // Insertamos el candidato en la posición correspondiente del stage de destino
    updatedDestStage.candidates.splice(destination.index, 0, candidateToMove);

    // Actualizamos los stages en los procesos actualizados
    updatedSourceProcess.stages[`stage${sourceStageIndex + 1}`] = updatedSourceStage;
    updatedDestProcess.stages[`stage${destStageIndex + 1}`] = updatedDestStage;

      // Initialize the candidates array if it's empty
    updatedSourceStage.candidates = updatedSourceStage.candidates.length ? updatedSourceStage.candidates : [];
    updatedDestStage.candidates = updatedDestStage.candidates.length ? updatedDestStage.candidates : [];

    // Actualizamos los procesos en la base de datos
    try {
      await updateEntity('selectionProcesses', processes[sourceProcessIndex].id, {
        stages: {
          ...sourceProcess.stages,
          [`stage${sourceStageIndex + 1}`]: updatedSourceStage,
        },
      });

      await updateEntity('selectionProcesses', processes[destProcessIndex].id, {
        stages: {
          ...destProcess.stages,
          [`stage${destStageIndex + 1}`]: updatedDestStage,
        },
      });

      // Después de actualizar la base de datos, actualizamos el estado local con los procesos actualizados
      const updatedProcesses = [...processes];
      updatedProcesses[sourceProcessIndex] = updatedSourceProcess;
      updatedProcesses[destProcessIndex] = updatedDestProcess;
      setProcesses(updatedProcesses);
    } catch (error) {
      console.error('Error al actualizar los procesos de selección:', error);
    }
  };

  return (
    <BigBox title='Procesos de selección'>
      <DragDropContext onDragEnd={handleDragEnd}>
        {processes.map((process, processIndex) => (
          <List key={process.id}>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary={process.title} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" sx={{p: 2}} unmountOnExit>
              <Box sx={{display: 'flex'}}>
                {Object.values(process.stages).map((stage, stageIndex) => (
                  <BigBox title={stage.name} key={stageIndex} style={{width: '300px', marginRight: '24px'}}>
                    <Droppable droppableId={`stage-${processIndex}-${stageIndex}`} key={`droppable-${processIndex}-${stageIndex}`}>
                      {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                          {stage.candidates.length === 0 ? (
                            <p>No hay candidatos en esta etapa.</p>
                          ) : (
                            <div>
                              {stage.candidates.map((candidate, candidateIndex) => (
                                <Draggable key={candidate} draggableId={candidate} index={candidateIndex}>
                                  {(provided) => (
                                    <Card
                                      key={`candidate-${candidate}`}
                                      variant="outlined"
                                      sx={{mb: 2}}
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <CardContent>
                                        <Typography variant="body2">{candidate}</Typography>
                                      </CardContent>
                                    </Card>
                                  )}
                                </Draggable>
                              ))}
                            </div>
                          )}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </BigBox>
                ))}
              </Box>
            </Collapse>
          </List>
        ))}
      </DragDropContext>
    </BigBox>
  );
}

RecruitmentTab.propTypes = {
  data: PropTypes.object,
};

export default RecruitmentTab;
