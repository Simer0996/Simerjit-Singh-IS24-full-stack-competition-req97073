import React, { useState } from 'react'
import { updateProduct } from '../../handler/api'
import ProductForm from "../forms/AddProduct"

const EditProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        updateProduct({ name, price, description })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <ProductForm

                setName={setName}
                setPrice={setPrice}
                setDescription={setDescription}
                handleSubmit={handleSubmit}
            />

        </div>
    )
}

export default EditProduct