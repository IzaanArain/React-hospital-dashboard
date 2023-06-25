import React from 'react'

const NavBar = () => {
  return (
    <>
    <div className="navbar_container">
        <h2 style={{
            fontFamily:"sans-serif",
            fontStyle:"italic",
            fontWeight:"bolder",
            marginTop:"2rem",
            marginLeft:"2rem"}}>LODGN</h2>
            <nav>
              <ul>
                <li className='list_item'><a href="#" id="selected">Current requests</a></li>
                <li className='list_item'><a href="#">Ongoing stays</a></li>
                <li className='list_item'><a href="#">Previous stays</a></li>
                <li className='list_item'><a href="#">Reports</a></li>
              </ul>
            </nav>
            <div className="logout_container">
              <button id='logout_btn'>Log-Out</button>
              <div style={{
                width:"90%",
                textAlign:"center",
                marginTop:"0.5rem",
                fontSize:"12px"}} id='logoutText'>
              <p>Help-Desk:</p>
              <p>786-874 9988</p>
              </div>
            </div>
    </div>
    </>
  )
}

export default NavBar