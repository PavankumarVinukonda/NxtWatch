import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  list-style: none;
  height: 500px;
  width: 250px;
  margin: 5px;
  background-color:{props => props.Dark ? '#000000' : '#ffffff'};
  color:{props => props.Dark ? '#ffffff' : '#000000'};
`
export const VideoThumbnailImage = styled.img`
  height: 200px;
  width: 250px;
`
export const VideoDescriptionBox = styled.div`
  display: flex;
`
export const ProfileImg = styled.img`
  height: 40px;
  width: 40px;
`
export const Box2 = styled.div`
  display: flex;
  flex-direction: column;
`
export const Videodisc = styled.p`
  font-family: roboto;
  font-size: 15px;
  font-weight: solid;
`
export const ChannelName = styled.h1`
  font-size: 15px;
  font-family: roboto;
  font-weight: solid;
`
export const CountAndTime = styled.div`
  display: flex;
  align-items: center;
`

export const Count = styled.p`
  font-family: roboto;
  font-size: 15px;
  font-weight: solid;
`
