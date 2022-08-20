import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Company from './components/pages/Company'
import Home from './components/pages/Home'
import Novoprojeto from './components/pages/Novoprojeto'
import Contato from './components/pages/Contato'
import Container from './components/layout/Container'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Projetos from './components/pages/Projetos'


function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/novoprojeto" element={<Novoprojeto />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="/projetos" element={<Projetos />}></Route>
   

        </Routes>
      </Container>
     <Footer/>
    </Router>
  )
}

export default App
