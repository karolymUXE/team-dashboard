import EditIcon from '@mui/icons-material/Edit'
import FormItem from '@components/FormItem'
import DataTable from '@components/DataTable'
import BigBox from '@components/BigBox'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Grid, Box, Typography, Paper, Avatar, Button, ListItem, ListItemIcon, Checkbox, ListItemText } from '@mui/material'
import { getEntityDetails } from '../../firebaseUtils'

export default function ProfileTab({ data }) {
  const [projectData, setProjectData] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const projectDetails = await Promise.all(data.projects.map(projectId => getEntityDetails('projects', projectId)))
      setProjectData(projectDetails)
    }

    if (data.projects) {
      fetchProjects()
    }
  }, [data.projects])

  const filteredProjects = projectData.filter(project => data.projects.includes(project?.id))

  const columns = [
    { field: 'title', header: 'Project' },
    { field: 'status', header: 'Status' },
  ]

  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{mb: 3}}>
        {data.firstName}&apos;s Profile
      </Typography>
      <Grid container spacing={2}>
        <Grid item sm={12} md={7}>
          <Paper variant="outlined" sx={{mb: 3, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box sx={{display: 'flex'}}>
              <Avatar alt={`${data.firstName} ${data.lastName}`} src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 85, height: 85 }} />
              <Box sx={{ml: 3}}>
                <Typography variant="h6" gutterBottom sx={{mb: 0}}>
                  {data.firstName} {data.lastName}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {data.role}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {data.squad}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Button color="secondary" variant="outlined" size="small" startIcon={<EditIcon />}>
                Edit
              </Button>
            </Box>
          </Paper>
          <BigBox title='Personal Information'>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <FormItem title='Age' description={data.age.toString()} />
                <FormItem title='Email' description={data.email} />
              </Grid>
              <Grid item md={4}>
                <FormItem title='Salary' description={data.salary.toString()} />
                <FormItem title='Motivators' description={data.motivators.join(", ")} />
              </Grid>
              <Grid item md={4}>
                <FormItem title='Country' description={data.country} />
                <FormItem title='Phone' description={data.phone} />
              </Grid>
            </Grid>
          </BigBox>
        </Grid>
        <Grid item sm={12} md={5}>
          <BigBox title='Tasks'>
            <ListItem>
              <ListItemIcon>
                <Checkbox />
              </ListItemIcon>
              <ListItemText primary={`Anunciar DT`} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Checkbox />
              </ListItemIcon>
              <ListItemText primary={`Anunciar DT`} />
            </ListItem>
          </BigBox>
          <BigBox title='Projects'>
            <DataTable data={filteredProjects} columns={columns} type='projects' />
          </BigBox>
        </Grid>
      </Grid>
    </Box>
  );
}

ProfileTab.propTypes = {
  data: PropTypes.object,
}