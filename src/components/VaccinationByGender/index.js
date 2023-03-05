// Write your code here
import './index.css'
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {data} = props
  return (
    <div className="vaccination-container">
      <h1 className="vaccination-heading">Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="60%"
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius="40%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend iconType="circle" verticalAlign="bottom" align="center" />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
