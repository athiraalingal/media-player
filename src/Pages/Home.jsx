import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'


function Home() {

  const [uploadVideoResponse,setuploadVideoResponse]=useState({})
  const [dropVideoResponse,setDropVideoResponse]=useState({})
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between mb-3">
        <div className="add-videos">
          <Add setuploadVideoResponse={setuploadVideoResponse}/>
          <Link to={'/watch-history'} style={{textDecoration:"none"}} className='fw-bolder fs-2 text-primary text-center'>Watch-history <i class="fa-solid fa-arrow-right-to-bracket"></i></Link>
        </div>
      </div>
      <div className="container-fluid mt-5 w-100 row">
        <div className="col-lg-9 all-videos">
          <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
        </div>
        <div className="col-lg-3 all-catagory">
          <Category dropVideoResponse={dropVideoResponse}/>
        </div>
      </div>
    </>
  )
}

export default Home
