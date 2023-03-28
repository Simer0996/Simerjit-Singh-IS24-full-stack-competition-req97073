import React from 'react'
import { Link } from 'react-router-dom'

const EditButton = ({ id }) => {

    return (
        <button><Link to={`products/${id}`}>Edit</Link></button >
    )
}

export default EditButton