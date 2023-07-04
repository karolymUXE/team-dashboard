import { db } from "../../firebase"
import { uid } from "uid"
import { set, ref } from "firebase/database"
import React, { useState } from "react"
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'

export default function Projects() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [okr, setOKR] = useState("")

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  const handleOKRChange = (e) => {
    setOKR(e.target.value)
  }
  // write
  const writeToDatabase = () => {
    const uuid = uid()
    set(ref(db, `/${uuid}`), {
        uuid,
        title,
        description,
        okr,
        // responsables,
        // squad,
        // miroboard,
        // jiraid,
    })

    setTitle("")
    handleClose()
  }
  // read
  // update
  // delete

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div id="Projects-create">
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} mb={2}>
        <Button variant="contained" color="terciary" onClick={handleClickOpen}>add project</Button>
      </Stack>
      <Dialog maxWidth='lg' open={open} onClose={handleClose}>
        <DialogTitle>Add Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Box noValidate component="form" sx={{ display: 'flex',flexDirection: 'column', m: 'auto'}}>
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <TextField id="title" label="Title" variant="outlined" fullWidth  value={title} onChange={handleTitleChange}/>
            </FormControl>
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <TextField id="title" label="Description" variant="outlined" fullWidth multiline maxRows={4} value={description} onChange={handleDescriptionChange}/>
            </FormControl>
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <TextField id="title" label="Okr" variant="outlined" fullWidth value={okr} onChange={handleOKRChange}/>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={writeToDatabase}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}