import React from 'react'
import "../NotFound.css"
import {Link} from 'react-router-dom'
const NotFoundPage = () => {
  return (
   <>
   <div className="not_found_page">
    <h1>not found</h1>
    <Link to='/'>Go back</Link>
   </div>
   </>
  )
}

export default NotFoundPage