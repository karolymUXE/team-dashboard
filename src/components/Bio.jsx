import CssBaseline from "@mui/material/CssBaseline"
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

function Bio() {
  return (
    <Paper component='div' sx={{boxShadow: '0', bgcolor: 'primary.light', p: 4}}>
      <CssBaseline />
      <Typography gutterBottom variant="h5" component="div">
        Congratulations
        Fabiana Capmany!
      </Typography>
      <Typography variant="body2" color="text.secondary" mb='24px'>
        Best seller of the month
        You have done 57.6% more sales today.
      </Typography>
      <Button variant="contained" size="small" color="primary" aria-label="buy">Go Now</Button>
    </Paper>
  );
}

Bio.propTypes = {
  background: PropTypes.string
}

export default Bio