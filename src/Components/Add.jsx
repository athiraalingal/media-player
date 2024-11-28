import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { addVideoAPI } from '../services/allAPI';




function Add({setuploadVideoResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);

  setuploadVideo({id:"",caption:"",url:"",link:""

  })
}
  const handleShow = () => setShow(true);

const [uploadVideo,setuploadVideo]=useState({
  id:"",caption:"",url:"",link:""
})


const getYoutubeLink = (e)=>{
  const {value}=e.target

  if(value.includes("v=")){
    let VID =value.split("v=")[1].slice(0,11)
    console.log(`https://www.youtube.com/embed/${VID}`);
    setuploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
  }else{
    setuploadVideo({...uploadVideo,link:""})
  }
} 



const handleAdd =async()=>{
  const{id,caption,url,link}=uploadVideo

  if(!id || !caption || !url || !link){
alert("please fill the missing fileds")

  }else{
    //api call -uploade video to json server
    const result = await addVideoAPI(uploadVideo)
console.log(result);
if(result.status>=200 && result.status<=300){
  alert("video uploaded")
  handleClose()
  setuploadVideoResponse(result.data)
}else{
  alert(result.message)
}

}
}



  return (
    <>
      <div className='d-flex'>
        <h2>Upload Videos</h2>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-upload fs-3"></i></button>

      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Video Id</Form.Label>
        <Form.Control type="text" placeholder="Video Id" onChange={(e)=>setuploadVideo({...
           uploadVideo,id:e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image Title</Form.Label>
        <Form.Control type="text" placeholder="image title" onChange={(e)=>setuploadVideo({...
           uploadVideo,caption:e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setuploadVideo({...
           uploadVideo,url:e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Video URL</Form.Label>
        <Form.Control type="text" placeholder="Video URL"onChange={getYoutubeLink} />
      </Form.Group>

      

      
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>



    </>
  )
}

export default Add
