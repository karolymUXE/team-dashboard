import * as React from 'react'
import BigBox from "@components/BigBox"
import RadarChart from "@components/RadarChart"
import DataTable from "@components/DataTable"
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

const DiversityIndexData = [
  {
    "taste": "fruity",
    "chardonay": 94,
    "carmenere": 114,
    "syrah": 51
  },
  {
    "taste": "bitter",
    "chardonay": 95,
    "carmenere": 62,
    "syrah": 91
  },
  {
    "taste": "heavy",
    "chardonay": 91,
    "carmenere": 31,
    "syrah": 38
  },
  {
    "taste": "strong",
    "chardonay": 34,
    "carmenere": 65,
    "syrah": 117
  },
  {
    "taste": "sunny",
    "chardonay": 55,
    "carmenere": 111,
    "syrah": 26
  }
]

const DiversityIndex = () => {
  const [showChart, setShowChart] = React.useState(false)

  const toggleShowChart = () => {
    setShowChart(!showChart)
  }

  return (
    <>
      <div id="DiversityIndex">
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={toggleShowChart} disabled={showChart}>Chart</Button>
          <Button onClick={toggleShowChart} disabled={!showChart}>Table</Button>
        </ButtonGroup>

        {showChart ? (
          <BigBox title='Diversity Index Chart'>
            <div style={{height: '400px'}}>
              <RadarChart dataList={DiversityIndexData} />
            </div>
          </BigBox>
        ) : (
        <BigBox title='Diversity Index Table'>
          <div style={{height: '400px'}}>
            <DataTable />
          </div>
        </BigBox>
        )}
      </div>
    </>
  )
}


export default DiversityIndex;