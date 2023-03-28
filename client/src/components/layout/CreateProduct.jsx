import React, { useState } from 'react'
import { createProduct } from '../../handler/api'
import ProductForm from "../forms/AddProduct"
import { v4 as uuidv4 } from "uuid";

const CreateProduct = ({ setLoading }) => {
    const [id] = useState(uuidv4());
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

export default CreateProduct