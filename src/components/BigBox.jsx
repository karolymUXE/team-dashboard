import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

const BigBox = ({children, title}) => (
  <Card sx={{ background: 'rgb(255,255,255,0.1)'}}>
    <CardContent>
      <Typography component="div" variant="h6" gutterBottom>
        {title}
      </Typography>

      {children}
    </CardContent>
  </Card>
);

BigBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  props: PropTypes.array,
}

export default BigBox;