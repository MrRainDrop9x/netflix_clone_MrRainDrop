import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainScreen from './screen/MainScreen'
import Login from './screen/Login'
function App() {
  const user = null
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<MainScreen />}></Route> */}
          <Route path='/' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
