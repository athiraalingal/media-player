import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getAVideoAPI } from '../services/allAPI'


function WatchHistory() {
  const [history,setHistory]=useState([])



  useEffect(()=>{
    getHistory()
  },[])

  const getHistory=async()=>{
    const result = await getAVideoAPI()
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("api failed");
      setHistory(result.message)
    }
  }

  console.log(history)

  const removeVideoHistory= async(id)=>{
    await deleteHistoryAPI(id)
    getHistory()
  }
  return (
    <>
      
      <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2 className=''>Watch-History</h2>
        <Link style={{textDecoration:"none",color:"blueviolet",fontSize:"30px"}} to={"/home"}>Back To Home<i class="fa-solid fa-arrow-left"></i></Link>
      </div>
      <div className="container mt-5 mb-3 w-100">
        <table className='table shadow w-100 p-3 m-2'>
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>Video Url</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
          {history?.length>0?history.map((video,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{video?.caption}</td>
            <td><a href={video?.link} target='_blank'>{video?.link}</a></td>
            <td>01.23,29/10/2024</td>
            <td><button className='text-danger btn' onClick={()=>removeVideoHistory(video?.id)}><i class="fa-solid fa-trash"></i></button></td>
          </tr>
          )):<p className='text-danger fw-bolder'>Nothing to Display</p>}
        
        </table>
      </div>
    </>
  )
}

export default WatchHistory
