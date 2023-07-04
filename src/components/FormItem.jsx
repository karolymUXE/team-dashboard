import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import PropTypes from 'prop-types'

export default function FormItem(props) {
  return (
    <ListItem>
      {props.icon && (
        <ListItemAvatar>
          <Avatar>
            {props.icon}
          </Avatar>
        </ListItemAvatar>
      )}
      <ListItemText primary={props.title} secondary={props.description} />
    </ListItem>
  )
}

FormItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}