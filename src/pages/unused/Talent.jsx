import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import PropTypes from 'prop-types'
import DiversityIndex from '@pages/talent/DiversityIndex'
import CompetencyMatrix from '@pages/talent/CompetencyMatrix'
import TalentHunt from '@pages/talent/TalentHunt'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function tabsProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

function Talent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="Talent">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Diversity Index" {...tabsProps(0)} />
          <Tab label="Competency Matrix" {...tabsProps(1)} />
          <Tab label="Talent Hunt" {...tabsProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DiversityIndex />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CompetencyMatrix />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TalentHunt />
      </TabPanel>
    </div>
  );
}

export default Talent;