import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Get_data = () => {

    const [data, setData]=useState([])
    

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => setData(response.data))
        .then((data)=> setData(data))
    },[])
  return (
    <>
    <div className='App'>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map(user => (
          <tr key={user.id}>
            <td>{user.userId}</td>
            <td>{user.title}</td>
            <td>{user.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
      
    </div>
    </>
  )
}

export default Get_data
