// import EditIcon from '@mui/icons-material/Edit'
import PropTypes from 'prop-types'
import {Typography, Paper, Box} from '@mui/material'

export default function BigBox({ children, title, ...other }) {

  return (
    <Paper variant="outlined"  sx={{mb: 3, p: 2}}  {...other}>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        {/*<Box>
          <Button color="secondary" variant="outlined" size="small" startIcon={<EditIcon />} >
            Edit
          </Button>
  </Box>*/}
      </Box>
      <div>
        {children}
      </div>
    </Paper>
  );
}

BigBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}
