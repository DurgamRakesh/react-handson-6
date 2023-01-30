import React , { useContext } from 'react'
import { Link} from 'react-router-dom'
import DataContext from './DataContext'
import './Table.css'



const Table = () => {
  const context = useContext(DataContext)
  return (
    <div>
        <table className='tab'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          context.ents.map((data,i) =>(
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.course}</td>
              <td>{data.batch}</td>
              <td>
                {
                  <Link to='/Component/EditStudentPage' state={{data:i}}>Edit</Link>
                }
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div>
  )
}

export default Table