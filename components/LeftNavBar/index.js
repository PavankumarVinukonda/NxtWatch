import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {GiConsoleController} from 'react-icons/gi'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  LeftNavContainer,
  CustumImg,
  BottumHeading,
  ThumbNailContainer,
  ThumbNails,
  TopContainer,
  BottumContainer,
  BottumSubContainer,
  ThumbNailCont,
} from './styledComponents'
import NxtWatxhContext from '../../Context/NxtWatchContext'
import './index.css'

const LeftNavBar = () => (
  <NxtWatxhContext.Consumer>
    {value => {
      const {DarkMode} = value
      return (
        <LeftNavContainer Dark={DarkMode}>
          <TopContainer>
            <ThumbNailContainer>
              <ThumbNailCont>
                <AiFillHome className="icon" />
                <ThumbNails Dark={DarkMode}>Home</ThumbNails>
              </ThumbNailCont>
              <ThumbNailCont>
                <AiFillFire className="icon" />
                <ThumbNails Dark={DarkMode}>Trending</ThumbNails>
              </ThumbNailCont>
              <ThumbNailCont>
                <GiConsoleController className="icon" />
                <ThumbNails Dark={DarkMode}>Head</ThumbNails>
              </ThumbNailCont>
              <ThumbNailCont>
                <MdPlaylistAdd className="icon" />
                <ThumbNails Dark={DarkMode}>Head</ThumbNails>
              </ThumbNailCont>
            </ThumbNailContainer>
          </TopContainer>
          <BottumContainer>
            <BottumHeading Dark={DarkMode}>Contact Us</BottumHeading>
            <BottumSubContainer>
              <CustumImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <CustumImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <CustumImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </BottumSubContainer>
          </BottumContainer>
        </LeftNavContainer>
      )
    }}
  </NxtWatxhContext.Consumer>
)

export default LeftNavBar
