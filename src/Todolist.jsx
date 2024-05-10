import Table from 'react-bootstrap/Table';
import Todoitem from './Todoitem';

function Todotable() {
    const todo =[
        {
            name:"shopping",
            desc:"I'm going to shopping",
        },
        {
            name:"Cooking",
            desc:"I'm going to Cook today",
        },
    ];    
  return (
   <>
   <div className='m-5'>
   <h5 className='mb-5'>TodoList</h5>
   <Table striped bordered hover>
<thead>
  <tr>
    <th>S.NO</th>
    <th>Title</th>
    <th>Desc</th>
    <th>Action</th>
    
  </tr>
</thead>
<tbody>
    {todo.map((value,index)=>{
        return (
            <Todoitem v={value} i={index} />
            
        );
    }
        )}

</tbody>
</Table>
</div>
   </>
    
  );
}

export default Todotable;