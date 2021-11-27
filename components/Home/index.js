import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import NxtWatchContext from '../../Context/NxtWatchContext'
import Header from '../Header'
import LeftNavBar from '../LeftNavBar'
import VideoItem from '../VideoItem'
import {
  HomeContainer,
  WesiteLogo,
  HomeMainContaner,
  PremiumContainer,
  PremiumBox1,
  PremiumBox2,
  ParaGraph,
  GetItNowButton,
  VideosContainer,
  HomeVideosContainerAndPremiumContainer,
  SearchBarContainer,
  SearchBar,
  SearchButton,
  VideosListContainer,
} from './styledComponents'
import './index.css'

const ApiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    showPremiumAdd: true,
    Search: '',
    videos: [],
    apiStatus: ApiStatusConstants.success,
  }

  componentDidMount() {
    this.getData()
  }

  onClickingCloseIcon = () => {
    this.setState({
      showPremiumAdd: false,
    })
  }

  onSearching = event => {
    this.setState(
      {
        Search: event.target.value,
      },
      this.getData,
    )
  }

  getData = async () => {
    const {Search} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${Search}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const fetchedData = data.videos
      console.log(fetchedData)
      const videosData = fetchedData.map(item => ({
        id: item.id,
        title: item.title,
        profileImageUrl: item.channel.profile_image_url,
        viewCount: item.view_count,
        publishedAt: item.published_at,
        thumbnailUrl: item.thumbnail_url,
        channelName: item.channel.name,
      }))
      this.setState({
        videos: videosData,
      })
    } else {
      this.setState({
        apiStatus: ApiStatusConstants.failure,
      })
    }
  }

  renderVidesContainer = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {DarkMode, setVideosList} = value
        const {videos} = this.state
        const updateData = () => {
          setVideosList(videos)
        }
        updateData()

        return (
          <VideosContainer>
            <SearchBarContainer>
              <SearchBar
                onChange={this.onSearching}
                type="text"
                placeholder="Search"
              />
              <SearchButton>
                <BsSearch className="SearchIcon" />
              </SearchButton>
            </SearchBarContainer>
            <VideosListContainer>
              {videos.map(item => (
                <VideoItem key={item.id} videosDetails={item} />
              ))}
            </VideosListContainer>
          </VideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    const {showPremiumAdd} = this.state
    return (
      <NxtWatchContext>
        {value => {
          const {DarkMode} = value
          return (
            <HomeContainer>
              <Header />
              <HomeMainContaner>
                <LeftNavBar />
                <HomeVideosContainerAndPremiumContainer>
                  {showPremiumAdd ? (
                    <PremiumContainer>
                      <PremiumBox1>
                        <WesiteLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="Website Logo"
                        />
                        <AiOutlineClose
                          onClick={this.onClickingCloseIcon}
                          className="closeIcon"
                        />
                      </PremiumBox1>
                      <PremiumBox2>
                        <ParaGraph>
                          Buy Nxt Watch Premium prepaid plans with <br /> UPI
                        </ParaGraph>
                        <GetItNowButton type="button">
                          GET IT NOW
                        </GetItNowButton>
                      </PremiumBox2>
                    </PremiumContainer>
                  ) : null}
                  {this.renderVidesContainer()}
                </HomeVideosContainerAndPremiumContainer>
              </HomeMainContaner>
            </HomeContainer>
          )
        }}
      </NxtWatchContext>
    )
  }
}

export default Home
