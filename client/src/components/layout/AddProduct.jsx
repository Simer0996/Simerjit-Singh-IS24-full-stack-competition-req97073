import React, { useState } from 'react'
import { createProduct } from '../../handler/api'
import AddProductForm from "../forms/AddProductForm"
import { v4 as uuidv4 } from "uuid";

const AddProduct = ({ addProductToast }) => {

    const [productName, setProductName] = useState('')
    const [scrumMasterName, setScrumMasterName] = useState('')
    const [productOwnerName, setProductOwnerName] = useState('')
    const [developers, setDevelopers] = useState([])
    const [startDate, setStartDate] = useState('')
    const [methodology, setMethodology] = useState('Agile')

    const handleChange = (e) => {
        const value = e.target.value;
        setDevelopers(value.split(","));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uuidv4();
        createProduct({ id, productName, scrumMasterName, productOwnerName, developers, startDate, methodology })
            .then(res => {
                addProductToast()
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <AddProductForm
                setProductName={setProductName}
                setScrumMasterName={setScrumMasterName}
                setProductOwnerName={setProductOwnerName}
                handleChange={handleChange}
                setStartDate={setStartDate}
                setMethodology={setMethodology}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default AddProduct