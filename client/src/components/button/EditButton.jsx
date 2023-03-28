import React from 'react'
import { Link } from 'react-router-dom'

const EditButton = ({ id }) => {

    return (
        <div><Link to={`/products/${id}`}><button>Edit</button></Link></div >
    )
}

export default EditButton