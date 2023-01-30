import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DataContext from './DataContext'
import './EditStudentPage.css'

const EditStudentPage = () => {
  const context = useContext(DataContext);
  const location = useLocation();
  const navigate = useNavigate();
  const index = (location.state.data)
  console.log(location.state.data);
  const newobj={
    name: context.ents[index].name,
    age: context.ents[index].age,
    course: context.ents[index].course,
    batch: context.ents[index].batch,

  }
  const ChangeHandle = (e)=>{
    newobj[e.target.name] = e.target.value;
  }
  const Update = (e)=>{
    context.updatefun((p) =>{
      p[index] = newobj;
      return p;
    })
    navigate('/Component/Students')
  }
  return (
    <div className='editdiv'>
      <input type="text" onChange={ChangeHandle} name='name' placeholder={context.ents[index].name} />
      <input type="number" onChange={ChangeHandle} name='age' placeholder={context.ents[index].age} />
      <br />
      <input type="text" onChange={ChangeHandle} name='course' placeholder={context.ents[index].course} />
      <input type="text" onChange={ChangeHandle} name='batch' placeholder={context.ents[index].batch} />
      <br />
      <button onClick={Update}>Update</button>
    </div>
  )
}

export default EditStudentPage