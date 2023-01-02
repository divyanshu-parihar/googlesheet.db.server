import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import axios from 'axios'
function Dashboard() {
  const { session, logout } = useAuth();
  const [ sheets , setSheets ] = useState([]);
  // const {}
  const sheetref = useRef()
  const navigate = useNavigate();
  useEffect(() => {
    console.log(session)
    if (!session) navigate('/login')
  },[])

  useEffect(()=>{
    if(!session.session) return;
    axios.post('http://localhost:8080/db/getUserSheets', {
      params: {
        user_id: session.session.user.id
      }
    }).then(response => {
      console.log("sheets", response)
      setSheets(response.data)
    }).catch(e => console.log(e))
  },[])

  

  async function handleLogout() {
    await logout();
    navigate('/login')
  }


  async function handleSubmit() {
    const sheet_id = sheetref.current.value;
    console.log(session.session.user.id)

    if(!session) return ;
    axios.post('http://localhost:8080/db/add', {
      params: {
        sheet_id: sheet_id,
        user_id: session.session.user.id
      }
    }).then(response => {
      console.log(response)
    }).catch(e => console.log(e))
    axios.post('http://localhost:8080/db/getUserSheets', {
      params: {
        user_id: session.session.user.id
      }
    }).then(response => {
      console.log("sheets", response)
      setSheets(response.data)
    }).catch(e => console.log(e))
  }
  return (
    <>
      <button onClick={handleLogout}>logout</button>
      <div>Dashboard</div>

      <input ref={sheetref} type='text'></input>
      <button onClick={handleSubmit}>Add</button>
      <pre>{JSON.stringify(session)}</pre>


       <ul>
        {
          sheets.length && sheets.map((el,idx)=>{
            return (<li key={idx}>{el.sheet_id}    {el.token}    {el.user_id}</li>)
          })
        }
      </ul>
    </>
  )
}

export default Dashboard;