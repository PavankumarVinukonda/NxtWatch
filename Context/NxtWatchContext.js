import React from 'react'

const NxtwatchContext = React.createContext({
  DarkMode: true,
  HomeVideoList: [],
  setVideosList: () => {},
})

export default NxtwatchContext
