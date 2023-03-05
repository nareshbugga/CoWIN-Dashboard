// Write your code here
import './index.css'
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const {data} = props
  const DataFormatter = number => {
    if (number >= 1000) {
      return `${number.toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="vaccination-container">
      <h1 className="vaccination-heading">Vaccination Coverage</h1>
      <BarChart data={data} margin={{top: 5}} width={1000} height={300}>
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: ' #6c757d',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: ' #6c757d',
            strokeWidth: 1,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar
          dataKey="dose1"
          name="Dose1"
          fill=" #5a8dee"
          barSize="20%"
          radius={[5, 5, 0, 0]}
        />
        <Bar
          dataKey="dose2"
          name="Dose2"
          fill="#f54394"
          barSize="20%"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
