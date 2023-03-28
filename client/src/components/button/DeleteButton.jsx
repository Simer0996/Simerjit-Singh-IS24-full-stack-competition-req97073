import React from 'react'
import { deleteProduct } from '../../handler/api'

const DeleteButton = ({ id }) => {

    const handleDelete = () => {
        deleteProduct(id)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }


    return (

        <div><button onClick={handleDelete}>Delete</button></div>
    )
}

export default DeleteButton