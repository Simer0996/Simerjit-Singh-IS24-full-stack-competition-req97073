import React, { useState } from 'react'
import { updateProduct } from '../../handler/api'
import EditProductForm from "../forms/EditProductForm"

const EditProduct = ({ id }) => {
    const [productName, setProductName] = useState('')
    const [scrumMasterName, setScrumMasterName] = useState('')
    const [productOwnerName, setProductOwnerName] = useState('')
    const [developers, setDevelopers] = useState([])
    const [methodology, setMethodology] = useState('Agile')

    const handleChange = (e) => {
        const value = e.target.value;
        setDevelopers(value.split(","));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateProduct(id, { productName, scrumMasterName, productOwnerName, developers, methodology })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <EditProductForm
                setProductName={setProductName}
                setScrumMasterName={setScrumMasterName}
                setProductOwnerName={setProductOwnerName}
                setDevelopers={setDevelopers}
                setMethodology={setMethodology}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </div>
    )
}

export default EditProduct