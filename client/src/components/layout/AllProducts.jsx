import React, { useState, useEffect } from 'react'
import DeleteButton from '../button/DeleteButton'
import EditButton from '../button/EditButton'
import { getProducts } from '../../handler/api'

const AllProducts = ({ loading, setLoading }) => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        const interval = setInterval(() => {
            getProducts()
                .then(res => {
                    setProducts(res)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        }, 1000);
        return () => clearInterval(interval);
    }, [setLoading])



    return (
        <div>{loading ? <h1>Loading...</h1> : products.map(product => (
            <div key={product.id} className="w-full flex-1">
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
                <h3>{product.description}</h3>
                <EditButton id={product.id} />
                <DeleteButton id={product.id} />
            </div>
        ))}</div>
    )
}

export default AllProducts