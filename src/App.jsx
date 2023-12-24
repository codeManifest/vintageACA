import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { Routes,Route } from "react-router-dom"

import Nav from './nav/Nav'
import allData from './DataArry'




import './App.css'
import Homepage from './pages/Homepage'
import Footer from './component/Footer'




function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    {/*  component all  */}
      <Router>
        <Nav/>
        <Routes>
        {allData.Menulist.map((item) =>(
          <Route  path={item.to} element={item.path} />
         
          ))}
          
          
        
        

        </Routes>
      </Router>
          
          



<Footer/>
    </>
  )
}


export default App
