import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Row,Col,Button } from 'react-bootstrap';

export default function AddTodo() {
    const[title,settitle]=useState('');
    const[desc,setdesc]=useState('');
  return (
    <Form> 
    <h5 className='m-3'>ADD To List</h5>
    <Row  className='m-3'>
        <Col xs={3} >
        <Form.Control type="email" placeholder="Title"  size="lg" onChange={(event)=>{
                  settitle(event.target.value);
                }}/>
        </Col>
        <Col>
        <Form.Control type="email" placeholder="Description"  size="lg" onChange={(event)=>{
            setdesc(event.target.value);
        }}/>
        
        </Col>
        <Col>
        <Button variant="info">ADD</Button>
        </Col> 
    </Row> 
    <p>{title}</p>
    <p>{desc}</p>
    </Form>
  )
}
