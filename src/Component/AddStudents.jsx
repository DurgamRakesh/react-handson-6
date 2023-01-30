import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DataContext from './DataContext'
import './EditStudentPage.css'

const AddStudents = () => {
const [rows,setRows] = useContext(DataContext);
//   const location = useLocation();
  const navigate = useNavigate();
  let {id} = useParams();
//   const index = (location.state.data)
//   console.log(location.state.data);
const [details,setDetails] = useState({
  id:'',
    name:'',
    age:'',
    course:'',
    batch:''
})
useEffect(() => {
  rows.forEach(() => {
    if(details.id===id){
      setDetails({
        name:details.name,
        age:details.age,
        course:details.course,
        batch:details.batch,
      })
    }
  })
})
//   const newobj={
//     name: context.ents[index].name,
//     age: context.ents[index].age,
//     course: context.ents[index].course,
//     batch: context.ents[index].batch,

//   }
  const Changefun = (e)=>{
    setDetails({...details,[e.target.name] : e.target.value})
  }



  
  const Updatefun = (e)=>{
    e.preventDefault();
    if(id === undefined){
      let newDetails = {...details,id: new Date().getTime().toString()}
      setRows([...rows,newDetails])
    }
    else{
      setRows((prevs) => {
        prevs.map((student) => 
          (student.id === id)
          ?
          {
            id : details.id,
            name : details.name,
            age : details.age,
            course : details.course,
            batch : details.batch,
          }
          : student
        )
      })
    }
    
    navigate('/Component/Students')
  }
  const Cancelfun = (e)=>{
    
    navigate('/Component/Students')
  }
  return (
    <>
    <h1 style={{textAlign:'center'}}>welcome to Addstudents</h1>
    <div className='addstudents'>
    <input type="text" onChange={Changefun} id='name'  name='name' value={details.name} placeholder='name' />
      <input type="number" onChange={Changefun} id = 'age'  name='age'value={details.age} placeholder='age' />
      <br />
      <input type="text" onChange={Changefun}  name='course' id='course' value={details.course} placeholder='course' />
      <input type="text" onChange={Changefun}  name='batch' id='batch' value={details.batch} placeholder='batch' />
      <br />
      <button onClick={Updatefun}>Submit</button>
      <button onClick={Cancelfun}>Cancel</button>
    </div>
    </>
  )
}

export default AddStudents