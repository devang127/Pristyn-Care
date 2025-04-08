
import './App.css'
import './index.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {


  return (
    <div className='app-container'>
        <Navbar/>
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        </div>
        <Footer/>
    </div>
  )
}

export default App
