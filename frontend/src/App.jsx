
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {


  return (
    <div className=''>
        <Navbar/>
          <Routes>
            <Route path='/home' element={<Home/>} />
          </Routes>
        <Footer/>
    </div>
  )
}

export default App
