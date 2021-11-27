import {Component} from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import NxtWatchContext from './Context/NxtWatchContext'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    DarkMode: false,
    HomeVideoList: [],
  }

  setVideosList = videos => {
    console.log(videos)
  }

  render() {
    return (
      <NxtWatchContext.Provider
        value={{
          setVideosList: this.setVideosList,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
