import React, { useState } from 'react'
import { createProduct } from '../../handler/api'
import ProductForm from "../forms/ProductForm"

const CreateProduct = ({ setLoading }) => {
    const [id, setID] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        createProduct({ id, name, price, description })
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
                setId={setID}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default CreateProduct