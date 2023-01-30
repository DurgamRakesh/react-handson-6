import React, { useState } from 'react'
import {NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import Students from './Component/Students'
import Contact from './Component/Contact'
import DataContext from './Component/DataContext'
import EditStudentPage from './Component/EditStudentPage'
import AddStudents from './Component/AddStudents'


const App = () => {
  const [data,setData] = useState([
    {
      name:'Rakesh',
      age:23,
      course:'MERN',
      batch:'22'
    },
    {
      name:'Vishnu',
      age:25,
      course:'Front-end',
      batch:'23'
    },
    {
      name:'Ansar',
      age:26,
      course:'MEAN',
      batch:'20'
    },
    {
      name:'Santhosh',
      age:24,
      course:'Back-End',
      batch:'22'
    },
    {
      name:'Srikanth',
      age:21,
      course:'MEARN',
      batch:'20'
    }
  ])
  return (
  
      <>
      <div className='main'>
        <nav>
          <h1>WELCOME</h1>
          <ul>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to={'./Comonent/Home'}>Home</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to={'./Component/Students'}>Students</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to={'./Component/Contact'}>Contact Us</NavLink></li>
          </ul>
        </nav>
      <Routes>
        <Route path='/Comonent/Home' element={<Home/>}/>
        <Route path='/Component/Students' element={
          <DataContext.Provider value={{ents:data,updatefun:setData}}>
            <Students/>
          </DataContext.Provider>
        }/>
        <Route path='/Component/Contact' element={<Contact/>}/>
        
        <Route path='/Component/EditStudentPage' element={
          <DataContext.Provider value={{ents:data,updatefun:setData}}>
            <EditStudentPage/>
          </DataContext.Provider>
        }/>
        <Route path='/Component/AddStudents' element={
          <DataContext.Provider value={{ents:data,updatefun:setData}}>
            <AddStudents/>
          </DataContext.Provider>
        }/>
      </Routes>
      </div>
      
      </>

  )
}

export default App