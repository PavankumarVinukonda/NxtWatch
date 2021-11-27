import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {BsSun} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImExit} from 'react-icons/im'
import Cookies from 'js-cookie'
import {
  Navbar,
  ProfileImg,
  WebsiteLogo,
  NavbarsubContainer,
  LogoutButton,
} from './styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'
import './index.css'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {DarkMode} = value
      const {history} = props
      const onClikingLogOutButton = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <Navbar Dark={DarkMode}>
          {DarkMode ? (
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              alt="website logo"
            />
          ) : (
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          )}
          <NavbarsubContainer>
            {DarkMode ? (
              <BsSun className="icons" />
            ) : (
              <FaMoon className="icon" />
            )}

            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            {DarkMode ? (
              <GiHamburgerMenu className="ham white" />
            ) : (
              <GiHamburgerMenu className="ham" />
            )}

            <LogoutButton
              Dark={DarkMode}
              type="button"
              onClick={onClikingLogOutButton}
            >
              Logout
            </LogoutButton>
            <button
              type="button"
              onClick={onClikingLogOutButton}
              className="logoutbtn"
            >
              {DarkMode ? (
                <ImExit className="icons white" />
              ) : (
                <ImExit className="ham" />
              )}
            </button>
          </NavbarsubContainer>
        </Navbar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
