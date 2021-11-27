import styled from 'styled-components'

export const LeftNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
  width: 10vw;
  background-color: ${props => (props.Dark ? '#475569' : '#ffffff')};
  @media (max-width: 576px) {
    display: none;
  }
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const BottumContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const BottumSubContainer = styled.div`
  display: flex;
  align-items: center;
`
export const BottumHeading = styled.h1`
  font-size: 25px;
  font-family: roboto;
  font-weight: bold;
  color: ${props => (props.Dark ? '#ffffff' : '#000000')};
`
export const ThumbNails = styled.h1`
  font-family: roboto;
  font-size: 20px;
  font-weight: solid;
  color: ${props => (props.Dark ? '#ffffff' : '#000000')};
`
export const ThumbNailContainer = styled.div`
  height: 40px;
`
export const ThumbNailCont = styled.div`
  display: flex;
  align-items: center;
`

export const CustumImg = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
