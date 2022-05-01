import './App.css'
import requests from './requests'
import Row from './Row'
import styles from './Row.module.css'

function App() {
  return (
    <div className='App'>
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
    </div>
  )
}

export default App
