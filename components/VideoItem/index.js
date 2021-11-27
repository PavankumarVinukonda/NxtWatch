import {Link} from 'react-router-dom'
import {
  VideoItemContainer,
  VideoThumbnailImage,
  VideoDescriptionBox,
  ProfileImg,
  Box2,
  Videodisc,
  ChannelName,
  CountAndTime,
  Count,
} from './styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'
import './index.css'

const VideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {DarkMode} = value
      const {videosDetails} = props
      const {
        id,
        title,
        profileImageUrl,
        viewCount,
        publishedAt,
        thumbnailUrl,
        channelName,
      } = videosDetails

      return (
        <Link to={id} className="link">
          <VideoItemContainer Dark={DarkMode}>
            <VideoThumbnailImage src={thumbnailUrl} />
            <VideoDescriptionBox>
              <ProfileImg src={profileImageUrl} />
              <Box2>
                <Videodisc>{title}</Videodisc>
                <ChannelName>{channelName}</ChannelName>
                <CountAndTime>
                  <Count>{viewCount} Views.</Count>
                  <Count>{publishedAt}</Count>
                </CountAndTime>
              </Box2>
            </VideoDescriptionBox>
          </VideoItemContainer>
        </Link>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default VideoItem
