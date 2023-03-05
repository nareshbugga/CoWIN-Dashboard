// Write your code here
import './index.css'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByGender = props => {
  const {data} = props
  return (
    <div className="vaccination-container">
      <h1 className="vaccination-heading">Vaccination by Age</h1>
      <ResponsiveContainer width="100%" height={450}>
        <PieChart>
          <Pie cx="50%" cy="50%" data={data} dataKey="count">
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill=" #64c2a6" />
          </Pie>
          <Legend iconType="circle" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
