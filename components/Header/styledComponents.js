import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  height: 100px;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.Dark ? '#475569' : '#ffffff')};
`
export const WebsiteLogo = styled.img`
  height: 45px;
  width: 120px;
  margin-left: 20px;
  @media (max-width: 576px) {
    height: 20px;
    width: 80px;
  }
`

export const NavbarsubContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`

export const LogoutButton = styled.button`
  height: 40px;
  width: 80px;
  border: ${props => (props.Dark ? '#ffffff' : ' #3b82f6')} 1px solid;
  background-color: white;
  color: ${props => (props.Dark ? '#475569' : ' #3b82f6')};
  @media (max-width: 576px) {
    display: none;
  }
`
export const ProfileImg = styled.img`
  height: 45px;
  width: 45px;
  margin-right: 20px;
  @media (max-width: 576px) {
    display: none;
  }
`
