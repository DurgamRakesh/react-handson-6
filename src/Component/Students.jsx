import React from 'react'
import { useNavigate} from 'react-router-dom'
import './Students.css'
import Table from './Table'


const Students = () => {
    const navigate  = useNavigate()
    const Nextpage = ()=> {
        navigate('/Component/AddStudents')
      }
  return (
    <>
    <div className='students'>
      <h1 className='h1-tag'>Student Data</h1>
      <button onClick={Nextpage} style = {{display:'block',margin:'10px  auto 20px'}}>AddNew</button>
      <Table/>
    </div>
    </>
  )
}

export default Students