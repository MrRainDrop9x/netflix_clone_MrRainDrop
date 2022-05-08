import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainScreen from './screen/Main/MainScreen'
import Home from './screen/Home/Home'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/browser' element={<MainScreen />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
