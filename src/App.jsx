import './App.css'
import Landing from './Pages/Landing'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Jobs from './Pages/Jobs'
import { Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/jobs' element={<Jobs/>} />
    </Routes>
  )
}

export default App
