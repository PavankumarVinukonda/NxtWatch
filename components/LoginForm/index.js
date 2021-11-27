import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
import {
  LoginPageBackground,
  LoginformContainer,
  WebsiteLogo,
  FormEl,
  CustomLabel,
  CustomInput,
  CheckBoxContainer,
  CheckBox,
  LoginButton,
  ErrorMsg,
  ShowPassword,
} from './styledComponents'

class LoginFrom extends Component {
  state = {
    DarkMode: false,
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitfailure = error => {
    this.setState({
      errorMsg: `* ${error}`,
    })
  }

  onSubmitingForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitfailure(data.error_msg)
    }
  }

  onChangingusername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangingPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onToggleCheckBox = () => {
    const {showPassword} = this.state
    this.setState(PrvState => ({
      showPassword: !PrvState.showPassword,
    }))
  }

  render() {
    const {DarkMode, errorMsg, showPassword} = this.state
    const showingPasword = showPassword ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginPageBackground darkmode={DarkMode}>
        <LoginformContainer darkmode={DarkMode}>
          {DarkMode ? (
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              alt="Website logo"
            />
          ) : (
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="Website logo"
            />
          )}
          <FormEl onSubmit={this.onSubmitingForm}>
            <CustomLabel darkmode={DarkMode} htmlFor="username">
              USERNAME
            </CustomLabel>
            <CustomInput
              onChange={this.onChangingusername}
              darkmode={DarkMode}
              type="text"
            />
            <CustomLabel darkmode={DarkMode} htmlFor="username">
              PASSWORD
            </CustomLabel>
            <CustomInput
              onChange={this.onChangingPassword}
              darkmode={DarkMode}
              type={showingPasword}
            />
            <CheckBoxContainer>
              <CheckBox onChange={this.onToggleCheckBox} type="checkBox" />
              <ShowPassword>Show password</ShowPassword>
            </CheckBoxContainer>
            <LoginButton type="submit">Login</LoginButton>
            <ErrorMsg>{errorMsg}</ErrorMsg>
          </FormEl>
        </LoginformContainer>
      </LoginPageBackground>
    )
  }
}

export default LoginFrom
