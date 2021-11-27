import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const HomeMainContaner = styled.div`
  display: flex;
`
export const PremiumContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
`
export const PremiumBox1 = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`
export const PremiumBox2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const WesiteLogo = styled.img`
  height: 40px;
  width: 160px;
`
export const ParaGraph = styled.p`
  font-family: roboto;
  font-size: 30px;
  font-weight: solid;
`
export const GetItNowButton = styled.button`
  height: 40px;
  width: 120px;
  border: black 1px solid;
  background-color: transparent;
`
export const VideosContainer = styled.div`
  background-color: ${props => (props.Dark ? ' #475569' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: scroll;
  height: 90vh;
`
export const HomeVideosContainerAndPremiumContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 400px;
  border: 1px solid;
`
export const SearchBar = styled.input`
  height: 38px;
  width: 350px;
`

export const SearchButton = styled.button`
  height: 38px;
  width: 48px;
  border: solid 1px;
  justify-self: flex-end;
`
export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`
