import React, { useState } from 'react'
import { updateProduct } from '../../handler/api'
import EditProductForm from "../forms/EditProductForm"

const EditProduct = () => {
    const [productName, setProductName] = useState('')
    const [scrumMaster, setScrumMaster] = useState('')
    const [productOwner, setProductOwner] = useState('')
    const [developers, setDevelopers] = useState([])
    const [methodology, setMethodology] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        updateProduct({ productName, scrumMaster, productOwner, developers, methodology })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <EditProductForm
                setProductName={setProductName}
                setScrumMaster={setScrumMaster}
                setProductOwner={setProductOwner}
                setDevelopers={setDevelopers}
                setMethodology={setMethodology}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default EditProduct