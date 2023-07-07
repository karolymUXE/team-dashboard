import CssBaseline from "@mui/material/CssBaseline"
import Paper from '@mui/material/Paper'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

function Bio() {
  return (
    <Paper component='div' variant='elevation0' sx={{bgcolor: 'terciary.light', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'flex-start', px: 3, height: '210px'}}>
      <CssBaseline />
      <Typography gutterBottom variant="h5" component="div" color='terciary.dark'>
        Welcome, i&apos;m <strong>Karolym</strong>
      </Typography>
      <Typography variant="body1" mb='24px'>
        Explore detailed statistics showcasing team performance, achieved milestones, and key metrics that support our work. Additionally, you&apos;ll be able to access ongoing projects, obtain an overview of their status, and understand the impact they have on the business.
      </Typography>
    </Paper>
  );
}

Bio.propTypes = {
  background: PropTypes.string
}

export default Bio