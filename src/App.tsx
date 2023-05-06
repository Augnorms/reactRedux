import './App.css'
import Home from './components/Home'
import Forms from './components/Forms'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>

      <Routes>
         <Route path={'/'} element={<Home />}/>
         <Route path={'/form'} element={<Forms />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
