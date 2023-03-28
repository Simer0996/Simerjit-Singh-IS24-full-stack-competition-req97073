import React, { useState, useEffect } from 'react'
import DeleteButton from '../button/DeleteButton'
import EditButton from '../button/EditButton'
import { getProducts } from '../../handler/api'

const AllProducts = ({ loading, setLoading }) => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        getProducts()
            .then(res => {
                setProducts(res)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [setLoading])



    return (
        <div>{loading ? <h1>Loading...</h1> : products.map(product => (
            <div key={product.id}>
                <p>{product.productName}</p>
                <p>{product.scrumMaster}</p>
                <p>{product.productOwner}</p>
                <p>{product.developers}</p>
                <p>{product.startDate}</p>
                <p>{product.methodology}</p>
                <DeleteButton id={product.id} />
                <EditButton id={product.id} />
            </div>
        ))}</div>
    )
}

export default AllProducts