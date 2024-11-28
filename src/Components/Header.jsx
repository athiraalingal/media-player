import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <>
      <Navbar className="bg-primary">
        <Container>
          <Link to={'/'}style={{textDecoration:"none"}}>
          <Navbar.Brand href="#home" className='text-light fw-bolder'>
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-pHJhE-srnHAF3szlJKe0tdfUVC7I_FtFSg&s"
              
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Media - Player
          </Navbar.Brand>

          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
 