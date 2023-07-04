import { useParams } from 'react-router-dom'
import { getEntityDetails } from '../../firebaseUtils'
import React, { useEffect, useState } from 'react'
import {Tabs, Tab, Box } from '@mui/material'
import TabPanel from '@components/TabPanel'
import ProfileTab from '@pages/persons/ProfileTab'
import OnboardTab from '@pages/persons/OnboardTab'
import RecruitmentTab from '@pages/persons/RecruitmentTab'


function PersonsView() {
  const { id } = useParams()
  const [personData, setPersonData] = useState(null)
  
  useEffect(() => {
    if (id) {
      getEntityDetails('persons', id)
        .then((data) => {
          setPersonData(data)
        })
        .catch((error) => {
          console.error('Error al obtener los datos de la persona desde Firebase:', error)
        })
      }
    }, [id])
    
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
      setValue(newValue)
    }

    const tabsList = ['Profile', 'Onboard', 'Recruitment', 'Engage', 'Develop', 'Perform', 'Reward']
    
  return (
    <>
      {personData && (
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto' }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider', minWidth: '180px' }}
          >
            {tabsList.map((item, index) => (
              <Tab key={index} label={item} id={`vertical-tab-${index}`} aria-controls={`vertical-tabpanel-${index}`} />
            ))}
          </Tabs>
          <TabPanel value={value} index={0}>
            <ProfileTab data={personData} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <OnboardTab />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <RecruitmentTab data={personData} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            OKR, motivators
          </TabPanel>
          <TabPanel value={value} index={4}>
            careers plan, matrix of competency, celebration grid, iterations, upskills
          </TabPanel>
          <TabPanel value={value} index={5}>
            iterations, feedback, actions plan
          </TabPanel>
          <TabPanel value={value} index={6}>
            merit, salary formula, recognition, kudo cards
          </TabPanel>
        </Box>
      )}
    </>
  )
}

export default PersonsView
