import React, { useEffect, useState } from 'react'
import image from '../Images/delete.png';

export default function Content() {
const [data,setData]=useState([])


const fetching=async ()=>{
  const API=await fetch('/db.json')
  const ans=await API.json()
  console.log(ans.data);
  setData(ans.data)
}
useEffect(()=>{
fetching()
},[])



console.log(data)
  return (
    <>
    <div  style={{backgroundColor:"lightblue",minWidth:"100vh",minHeight:"100vh"}}>
    <div className='d-flex justify-content-between' >
        <div>
        <br />
      <h1>Support Requests</h1>
      </div>
      <div>
    <br />
<div className="btn-group">
  <button type="button" style={{backgroundColor:"white"}} className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    May 2023
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">June 2023</a></li>
    <li><a className="dropdown-item" href="#">July 2023</a></li>
  </ul>
</div>
</div>
</div>
      <br />
      <br />
      <br />
<div className='d-flex'>
<div className='w-100'>
      <div>
      <table className="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Employees  Status</th>
      <th scope="col">Groups</th>
      <th scope="col">Status</th>
      <th scope="col">Assigned Signature</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{color:"#8A8A8A"}}>
      <td>Non Archived</td>
      <td>All group</td>
      <td></td>
      <td>All Signature</td>
    </tr>
  </tbody>
</table>
</div>
<br />
<div >
<table className="table ">
  <thead>
    <tr>
      <th scope="col">Employee’s Name</th>
      <th scope="col">Group</th>
      <th scope="col">Status</th>
      <th scope="col">Assigned Signature</th>
    </tr>
  </thead>
  <tbody>
  {data.map((element) => {
    return(
      <tr key={element.id}>
        <th>{element.employees_name}</th>
        <th style={{ color: "blue" }}>{element.group}</th>
        <th>{element.status}</th>
        <th>{element.assigned_signature}</th>
      </tr>
    );
})}
      </tbody>
</table>
</div>
</div>
<div style={{backgroundColor:"lightblue"}} >
    <input type="text" className='mx-2' placeholder='Search by Name' style={{borderRadius:"24px"}} name="" id="" />
    <br />
    <br />
    <h3 style={{fontSize:"18px"}} className='App'>1 to 18 of 18</h3>
</div>
</div>
      </div>
      </>
  )
}
