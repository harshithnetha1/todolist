import React from 'react'
import Button from 'react-bootstrap/Button';
export default function Todoitem(props) {
  
  return (
    <tr>
                <td>{props.i+1}</td>
                <td>{props.v.name}</td>
                <td>{props.v.desc}</td>
                <td>
                    <Button variant="outline-success" className='m-2'>Update</Button>
                    <Button variant="outline-danger">Delete</Button>
                </td>
            </tr>
  )
}
