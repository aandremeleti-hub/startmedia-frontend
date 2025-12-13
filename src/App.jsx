import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Design } from './pages/design'
import { Ia } from './pages/ia'
import { Site } from './pages/site'
import ScrollToTop from './components/scrollToTop'

function App() {

  return (

    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/design' element={<Design/>} />
        <Route path='/ia' element={<Ia/>} />
        <Route path='/site' element={<Site/>} />
      </Routes>
    </BrowserRouter>

  )

}

export default App
