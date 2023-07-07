import BigBox from "@components/BigBox"
import PropTypes from 'prop-types'
import { ResponsiveHeatMap } from '@nivo/heatmap'

const CompetencyMatrixData = [
  {
    "id": "Japan",
    "data": [
      {
        "x": "Train",
        "y": -93635
      },
      {
        "x": "Subway",
        "y": 57458
      },
      {
        "x": "Bus",
        "y": -52745
      },
      {
        "x": "Car",
        "y": 24830
      },
      {
        "x": "Boat",
        "y": 60500
      },
      {
        "x": "Moto",
        "y": -57248
      },
      {
        "x": "Moped",
        "y": -2464
      },
      {
        "x": "Bicycle",
        "y": -95028
      },
      {
        "x": "Others",
        "y": 74976
      }
    ]
  },
  {
    "id": "France",
    "data": [
      {
        "x": "Train",
        "y": -76607
      },
      {
        "x": "Subway",
        "y": -10703
      },
      {
        "x": "Bus",
        "y": -45465
      },
      {
        "x": "Car",
        "y": 4794
      },
      {
        "x": "Boat",
        "y": -58171
      },
      {
        "x": "Moto",
        "y": -1088
      },
      {
        "x": "Moped",
        "y": -27122
      },
      {
        "x": "Bicycle",
        "y": -43050
      },
      {
        "x": "Others",
        "y": -87719
      }
    ]
  },
  {
    "id": "US",
    "data": [
      {
        "x": "Train",
        "y": 9394
      },
      {
        "x": "Subway",
        "y": -39579
      },
      {
        "x": "Bus",
        "y": 1832
      },
      {
        "x": "Car",
        "y": 28522
      },
      {
        "x": "Boat",
        "y": -87654
      },
      {
        "x": "Moto",
        "y": 86914
      },
      {
        "x": "Moped",
        "y": -64924
      },
      {
        "x": "Bicycle",
        "y": -33887
      },
      {
        "x": "Others",
        "y": 47356
      }
    ]
  },
  {
    "id": "Germany",
    "data": [
      {
        "x": "Train",
        "y": -77885
      },
      {
        "x": "Subway",
        "y": 73817
      },
      {
        "x": "Bus",
        "y": 45986
      },
      {
        "x": "Car",
        "y": 78148
      },
      {
        "x": "Boat",
        "y": 36436
      },
      {
        "x": "Moto",
        "y": -19612
      },
      {
        "x": "Moped",
        "y": 17073
      },
      {
        "x": "Bicycle",
        "y": -67851
      },
      {
        "x": "Others",
        "y": -60707
      }
    ]
  },
  {
    "id": "Norway",
    "data": [
      {
        "x": "Train",
        "y": -21991
      },
      {
        "x": "Subway",
        "y": -95547
      },
      {
        "x": "Bus",
        "y": 96403
      },
      {
        "x": "Car",
        "y": -1578
      },
      {
        "x": "Boat",
        "y": 62953
      },
      {
        "x": "Moto",
        "y": 23838
      },
      {
        "x": "Moped",
        "y": -67291
      },
      {
        "x": "Bicycle",
        "y": -77016
      },
      {
        "x": "Others",
        "y": 69897
      }
    ]
  },
  {
    "id": "Iceland",
    "data": [
      {
        "x": "Train",
        "y": 20246
      },
      {
        "x": "Subway",
        "y": 99402
      },
      {
        "x": "Bus",
        "y": -14398
      },
      {
        "x": "Car",
        "y": -91463
      },
      {
        "x": "Boat",
        "y": -85733
      },
      {
        "x": "Moto",
        "y": -66847
      },
      {
        "x": "Moped",
        "y": -10836
      },
      {
        "x": "Bicycle",
        "y": -95988
      },
      {
        "x": "Others",
        "y": 71543
      }
    ]
  },
  {
    "id": "UK",
    "data": [
      {
        "x": "Train",
        "y": 91765
      },
      {
        "x": "Subway",
        "y": -64772
      },
      {
        "x": "Bus",
        "y": 3063
      },
      {
        "x": "Car",
        "y": 44275
      },
      {
        "x": "Boat",
        "y": -41294
      },
      {
        "x": "Moto",
        "y": 84279
      },
      {
        "x": "Moped",
        "y": 67046
      },
      {
        "x": "Bicycle",
        "y": 61838
      },
      {
        "x": "Others",
        "y": 11897
      }
    ]
  },
  {
    "id": "Vietnam",
    "data": [
      {
        "x": "Train",
        "y": -84808
      },
      {
        "x": "Subway",
        "y": -21106
      },
      {
        "x": "Bus",
        "y": -18202
      },
      {
        "x": "Car",
        "y": -55226
      },
      {
        "x": "Boat",
        "y": 65779
      },
      {
        "x": "Moto",
        "y": 40700
      },
      {
        "x": "Moped",
        "y": 91352
      },
      {
        "x": "Bicycle",
        "y": -47412
      },
      {
        "x": "Others",
        "y": 70060
      }
    ]
  }
]

const CompetencyMatrix = () => (
  <BigBox title='Competency Matrix Chart'>
    <div style={{height: 'calc(100vh - 288px)'}}>
      <ResponsiveHeatMap
        data={CompetencyMatrixData}
        margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
        valueFormat=">-.2s"
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -90,
            legend: '',
            legendOffset: 46
        }}
        axisRight={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 70
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: -72
        }}
        colors={{
            type: 'sequential',
            scheme: 'green_blue',
            divergeAt: 0.33,
            minValue: -100000,
            maxValue: 100000
        }}
        emptyColor="#555555"
        legends={[
            {
                anchor: 'bottom',
                translateX: 0,
                translateY: 30,
                length: 400,
                thickness: 8,
                direction: 'row',
                tickPosition: 'after',
                tickSize: 3,
                tickSpacing: 4,
                tickOverlap: false,
                tickFormat: '>-.2s',
                title: 'Value →',
                titleAlign: 'start',
                titleOffset: 4
            }
        ]}
      />
    </div>
  </BigBox>
)

CompetencyMatrix.propTypes = {
  data: PropTypes.array
}

export default CompetencyMatrix;