import React from "react"
import Login from './Components/login';
import {BrowserRouter,Routes,Route} from "react-router-dom"

const  Index :React.FC = () =>{
  return(
    <h1>this is index page</h1>
  )
}


const IndexRouter:React.FC = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default IndexRouter