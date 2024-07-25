import './App.css'
import Home from './components/Home'
import Forms from './components/Forms'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Counters } from './components/Counter'


function App() {
  

  return (
    <BrowserRouter>

      <Routes>
         <Route path={'/'} element={<Home />}/>
         <Route path={'/form'} element={<Forms />}/>
         <Route path={'/count'} element={<Counters />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
