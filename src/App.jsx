
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Dashboard from './Pages/Dashboard'
import Auth from './Pages/Auth'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Projects' element={<Projects/>}/>
     <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register={true} />} />
    </Routes>
    <Footer/>

    </>
  )
}

export default App
