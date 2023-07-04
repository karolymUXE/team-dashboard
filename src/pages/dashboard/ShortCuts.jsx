import List from '@mui/material/List'
import Paper from '@mui/material/Paper'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'


const projects = [
  {
    title: "Proyecto A",
    date: "2023-07-01",
    progress: 80,
  },
  {
    title: "Proyecto B",
    date: "2023-06-15",
    progress: 50,
  },
  {
    title: "Proyecto C",
    date: "2023-07-10",
    progress: 20,
  },
  {
    title: "Proyecto D",
    date: "2023-07-10",
    progress: 20,
  },
];

function ShortCuts() {
  return (
    <Paper variant='elevation0' sx={{ backgroundColor: 'common.white', mb: 2}}>
      <List>
        {projects.map((item, index) => (
          <div key={index}>
            <ListItem>
              <ListItemText primary={item.title} />
            </ListItem>
            {index != (projects.length - 1) &&
              <Divider />
            }
          </div>
        ))}
      </List>
    </Paper>
  );
}

export default ShortCuts