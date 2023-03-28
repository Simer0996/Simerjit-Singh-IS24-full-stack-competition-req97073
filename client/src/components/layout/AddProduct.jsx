import React, { useState, useId } from 'react'
import { createProduct } from '../../handler/api'
import ProductForm from "../forms/AddProductForm"


const AddProduct = ({ setLoading }) => {
    const id = useId();
    const [productName, setProductName] = useState('')
    const [scrumMaster, setScrumMaster] = useState('')
    const [productOwner, setProductOwner] = useState('')
    const [developers, setDevelopers] = useState([])
    const [startDate, setStartDate] = useState('')
    const [methodology, setMethodology] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        createProduct({ id, productName, scrumMaster, productOwner, developers, startDate, methodology })
            .then(res => {
                setLoading(false)
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <ProductForm
                setProductName={setProductName}
                setScrumMaster={setScrumMaster}
                setProductOwner={setProductOwner}
                setDevelopers={setDevelopers}
                setStartDate={setStartDate}
                setMethodology={setMethodology}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default AddProduct