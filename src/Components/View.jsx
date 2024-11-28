import React, { useEffect, useState } from 'react'

import VideoCard from './VideoCard'

import { Col, Row } from 'react-bootstrap'
import { getAllVideoAPI, getCategoryAPI, updataCategoryAPI } from '../services/allAPI'




function View({uploadVideoResonse,setDropVideoResponse}) {
  const[DeleteVideoResponse,setDeleteVideoResponse]= useState([false])

const [allVideos,setAllVideos]=useState([])

const getAllVideos = async()=>{
  const result = await getAllVideoAPI()
  console.log(result)
  if(result.status==200){
    setAllVideos(result.data)
  }else{
    console.log("api failed");
    setAllVideos([])
  }
}
// console.log(allVideos)






useEffect(()=>{
  getAllVideos()
  setDeleteVideoResponse(false)
},[uploadVideoResonse,DeleteVideoResponse])


const dragOver=(e)=>{
  e.preventDefalut()
}

const videoDropped=async(e)=>{
  const{videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
  // console.log(videoId,categoryId)


  const {data}=await getCategoryAPI()
  const selectedCategory=data.fint(item=>item.id==categoryId)
  let result=selectedCategory.allVideos.filter(video=>video.Id!==videoId)
  console.log(result);
  let {id,categoryName}=selectedCategory
  let newCategory={id,categoryName,allVideos:result}
  const res = await updataCategoryAPI(categoryId,newCategory)
  setDropVideoResponse(res)

}

  return (
    <>

    <h2 className='text-info'>All Videos</h2>



    <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>
        {allVideos?.length>0?allVideos?.map((video,index)=>(
          <Col sm={12} md={6} lg={4}>
          <VideoCard video={video}/>
          </Col>
        )):<p className='text-danger'>Nothing to Display</p>
          
  }
</Row>
</>
      )
}


       

export default View
