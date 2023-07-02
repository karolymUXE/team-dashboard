import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'


function KPI({title, amount, number, color}) {
  return (
    <Card sx={{ display: 'flex', background: 'rgb(255,255,255,0.1)' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6" gutterBottom>
            {title}
          </Typography>
          <strong>
            <Typography variant="h4" color="text.secondary" component="div" gutterBottom>
              {Intl.NumberFormat().format(amount)}
            </Typography>
          </strong>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {number > 0 ? (
            <IconButton color="success" size='small' aria-label="chart up">
              <TrendingUpIcon fontSize="inherit" />
            </IconButton>
          ) : (
            <IconButton color="error" size='small' aria-label="chart down">
              <TrendingDownIcon fontSize="inherit" />
            </IconButton>
          )}
          <strong> {number}%</strong> than last week
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ m: 'auto' }}>
        <AccountBalanceWalletIcon color={color} fontSize="large" />
      </Box>
    </Card>
  );
}

KPI.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  number: PropTypes.number,
  color: PropTypes.string,
}

export default KPI