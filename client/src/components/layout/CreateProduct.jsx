import React, { useState } from 'react'
import { createProduct } from '../../handler/api'
import ProductForm from "../forms/ProductForm"

const CreateProduct = ({ setLoading }) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        createProduct({ name, price, description })
            .then(res => {
                setLoading(false)
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

export default CreateProduct