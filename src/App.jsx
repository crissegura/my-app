import React,{useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
 
const URL = 'http://181.13.244.170:5000/';

const columns = [
  {title:'hola'},
  {title:'chau'},
  {title:'nose'}
]

function App() {
  const [data, setData] = useState([])

  const petitionGet=async()=>{
    await axios.get(URL)
    .then(response=>{
      setData(response.data)
    })
  }
  useEffect(()=>{
    petitionGet();
  },[])

  return (
    <>
      <MaterialTable 
        columns={columns}
        data={data}
        title= 'table'
      />
    </>
  );
}

export default App;
