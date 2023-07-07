import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import CssBaseline from "@mui/material/CssBaseline"
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'

function percentDiff(a, b) {
  if (a === b) {
    return 0
  } else if (a === 0 || b === 0) {
    return 100
  }

  const diff = Math.abs(a - b)
  const max = Math.max(a, b)
  const percent = Math.floor((diff / max) * 100)

  return percent
}

const KPI = ({title, lastValue, newValue, type, bgColor, textColor}) => (
  <Paper component='div' variant='elevation0' sx={{ display: 'flex', width: '302px', bgcolor: bgColor, p: 2, color: textColor, mb: 2}}>
    <CssBaseline />
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Typography component="div" variant="body1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" component="div">
        {newValue > lastValue ? (
          <TrendingUpIcon fontSize="inherit" />
        ) : newValue < lastValue ? (
          <TrendingDownIcon fontSize="inherit" />
        ) : (
          <TrendingFlatIcon fontSize="inherit" />
        )}
        <strong> {percentDiff(newValue, lastValue)}%</strong> than last time
      </Typography>
    </Box>
    <Box sx={{background: 'rgb(255,255,255,0.1)', px: 1, py: 2, ml: 'auto', height: '75px', borderRadius: 2, typography: 'h5', textAlign: 'center', fontWeight: 'bold', display: 'flex'}}>
      {Intl.NumberFormat().format(newValue)} {type == 'percent' && ('%')}
    </Box>
  </Paper>
);

KPI.propTypes = {
  title: PropTypes.string,
  newValue: PropTypes.number,
  lastValue: PropTypes.number,
  type: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default KPI;