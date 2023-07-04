import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

export default function Poster({title, graph}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" component="div">
          benevolent {graph}
        </Typography>
      </CardContent>
    </Card>
  );
}

Poster.propTypes = {
  title: PropTypes.string,
  graph: PropTypes.string //debe ser array ya que trae el alt y el url de la img
}