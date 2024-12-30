import React from 'react'
import EmployeeListComponenet from './components/EmployeeListComponenet'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent'
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent'

const App = () => {
  return (
    <>

    <HeaderComponent/>
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<EmployeeListComponenet/>}/>
        <Route path='/employees' element={<EmployeeListComponenet/>}/>
        <Route path='/add-employee' element={<CreateEmployeeComponent/>}/>
        <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    <FooterComponent/>

    </>
  )
}

export default App


