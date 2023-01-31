import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from './DataContext'
import './EditStudentPage.css'

const AddStudents = () => {
  const context = useContext(DataContext);
  const navigate = useNavigate();
  const newobject = {
    name: '',
    age: '',
    course: '',
    batch: ''
  }

  const Changefun = (e) => {
    newobject[e.target.name] = e.target.value;
  }

  const Updatefun = (e) => {
    e.preventDefault();
    context.updatefun((previousobj) => {
      previousobj.push(newobject);
      return (previousobj);
    })
    navigate('/Component/Students')
  }

  const Cancelfun = (e) => {

    navigate('/Component/Students')
  }
  return (
    <>
      <h1 className='add-h1tag'>Add Students Here</h1>
      <div className='addstudents'>
        <input type="text" onChange={Changefun} name='name'  placeholder='name' />
        <input type="number" onChange={Changefun} name='age'  placeholder='age' />
        <br />
        <input type="text" onChange={Changefun} name='course'  placeholder='course' />
        <input type="text" onChange={Changefun} name='batch'  placeholder='batch' />
        <br />
        <button className='submitbtn' onClick={Updatefun}>Submit</button>
        <button className='cancelbtn' onClick={Cancelfun}>Cancel</button>
      </div>
    </>
  )
}

export default AddStudents