import React from 'react'

const TableData = ({info}) => {
  console.log(info)
  
  return (
    <div className='table-div'>
      <table className='table-data'>
        <tbody>

        <tr>
            <th>Pet's Name</th>
            <th>Pet's Type</th>
            <th>Breed</th>
            <th>Adopter Name</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
      
        {info.map((data,id)=>{
        return <tr key={id}>
          <td>{data.petName}</td>
          <td>{data.petType}</td>
          <td>{data.petBreed}</td>
          <td>{data.userName}</td>
          <td>{data.email}</td>
          <td>{data.phone}</td>
        </tr>
         })}
        </tbody>
      </table>
    </div>
  )
}

export default TableData
