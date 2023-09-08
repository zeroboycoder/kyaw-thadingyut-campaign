import {Routes, Route} from 'react-router-dom'
import Layout from "./layout/layout"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import './App.css'

const App = () => {
  return <Layout>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </Layout>
}

export default App