import styled from 'styled-components'

export const LoginPageBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.darkmode ? '#475569' : '#ffffff')};
  background-size: cover;
`
export const LoginformContainer = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: ${props => (props.darkmode ? '#000000' : '#ffffff')};
  background-size: cover;
  border-radius: 10px;
`

export const WebsiteLogo = styled.img`
  height: 60px;
  width: 100px;
  margin-bottom: 20px;
`

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`
export const CustomLabel = styled.label`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.darkmode ? '#ffffff' : '#000000')};
`
export const CustomInput = styled.input`
  height: 30px;
  width: 350px;
  border: ${props => (props.darkmode ? '#ffffff' : '#000000')} solid 1px;
  border-radius: 2px;
  margin-bottom: 10px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CheckBox = styled.input`
  height: 20px;
  width: 20px;
`
export const LoginButton = styled.button`
  height: 30px;
  width: 350x;
  border-radius: 2px;
  border: 0px;
  background-color: skyblue;
  color: white;
`
export const ErrorMsg = styled.p`
  font-family: roboto;
  font-size: 18px;
  color: red;
`
export const ShowPassword = styled.p`
  font-family: roboto;
  font-size: 18px;
  color: ${props => (props.darkmode ? 'white' : 'black')};
`
