import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Header from '../Header'
import Profile from '../profile'
import EmploymentCard from '../emplymentCard'
import JobsItem from '../jobItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'Failure',
  inProgress: 'INPROGRESS',
}

class Jobs extends Component {
  state = {
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {searchInput} = this.state
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const JwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs?employment_type=FULLTIME,PARTTIME&minimum_package=1000000&search=${searchInput}`
    const options = {
      headers: {
        Authorization: `bearer ${JwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const reponseData = await response.json()
      console.log(reponseData)
    }
  }

  searchItem = event => {
    const {searchInput} = this.state
    this.setState(
      {
        searchInput: event.target.value,
      },
      this.getData,
    )
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="main-container">
        <Header />
        <div className="main-box">
          <div className="box-1">
            <Profile />
            <hr className="horizantalLine" />
            <EmploymentCard />
            <hr className="horizantalLine" />
          </div>
          <div className="box-2">
            <div className="inputContainer">
              <input
                type="text"
                value={searchInput}
                className="inputElement"
                onChange={this.searchItem}
              />
              <div className="serachIconCont">
                <BsSearch className="searchIcon" />
                <ul>
                  <JobsItem />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
