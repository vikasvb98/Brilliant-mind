import './App.css'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Hire from './Pages/Hire'
import Jobs from './Pages/Jobs'
import { Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/hire' element={<Hire/>} />
      <Route path='/jobs' element={<Jobs/>} />
    </Routes>
  )
}

export default App
