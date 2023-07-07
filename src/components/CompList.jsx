import List from '@mui/material/List'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import LinearProgress from '@mui/material/LinearProgress'


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
];

function CompList() {
  return (
    <Paper variant='elevation0' sx={{ backgroundColor: 'common.white'}}>
      <List sx={{p: 4}}>
        {projects.map((item, index) => (
          <div key={index}>
            <ListItem>
              <ListItemText primary={item.title} />
              <ListItemText primary={item.date} />
              <Box sx={{ flexGrow: 2 }}>
                <LinearProgress variant="determinate" value={50} color={index % 2 === 0 ? "terciary" : "secondary"} />
              </Box>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Paper>
  );
}

export default CompList;