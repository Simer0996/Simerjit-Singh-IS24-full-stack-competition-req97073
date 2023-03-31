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

        <div className="p-1"><button className="cursor-pointer text-sm bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded" onClick={handleDelete}>Delete</button></div>
    )
}

export default DeleteButton