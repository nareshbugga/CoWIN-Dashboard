// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiViews = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {by7DaysData: '', byAgeData: '', byGenderData: '', dataView: ''}

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({dataView: apiViews.inProgress})
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      const {
        last7DaysVaccination,
        vaccinationByAge,
        vaccinationByGender,
      } = updatedData
      const updateLast7DaysVaccinationData = last7DaysVaccination.map(
        eachData => ({
          dose1: eachData.dose_1,
          dose2: eachData.dose_2,
          vaccineDate: eachData.vaccine_date,
        }),
      )
      const updateVaccinationByAgeData = vaccinationByAge.map(eachAge => ({
        age: eachAge.age,
        count: eachAge.count,
      }))
      const updateVaccinationByGender = vaccinationByGender.map(eachGender => ({
        gender: eachGender.gender,
        count: eachGender.count,
      }))
      this.setState({
        by7DaysData: updateLast7DaysVaccinationData,
        byAgeData: updateVaccinationByAgeData,
        byGenderData: updateVaccinationByGender,
        dataView: apiViews.success,
      })
    } else {
      this.setState({dataView: apiViews.failure})
    }
  }

  getRenderVaccinationData = () => {
    const {by7DaysData, byAgeData, byGenderData} = this.state
    console.log(by7DaysData)
    console.log(byAgeData)
    console.log(byGenderData)

    return (
      <div>
        <VaccinationCoverage data={by7DaysData} />
        <VaccinationByGender data={byGenderData} />
        <VaccinationByAge data={byAgeData} />
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="container">
      <Loader type="ThreeDots" color=" #f54394" height={80} width={80} />
    </div>
  )

  renderFailure = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-description">Something Went Wrong</h1>
    </div>
  )

  ResultView = () => {
    const {dataView} = this.state
    switch (dataView) {
      case apiViews.success:
        return this.getRenderVaccinationData()
      case apiViews.failure:
        return this.renderFailure()
      case apiViews.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <h1 className="website-heading">Co-WIN</h1>
        </div>
        <h1 className="description">CoWIN Vaccination In India</h1>
        {this.ResultView()}
      </div>
    )
  }
}

export default CowinDashboard
