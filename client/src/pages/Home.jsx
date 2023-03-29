import React, { useEffect, useState } from 'react'
import { getProducts } from '../handler/api'
import AllProducts from '../components/table/AllProducts'


const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            getProducts()
                .then(res => {
                    setData(res)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        }, 1000);
        return () => clearInterval(interval);

    }, [])

    return (
        <div>
            <h1 className="text-3xl">Track the projects associated with the Government of British columbia</h1>
            <AllProducts loading={loading} data={data} />
        </div>

    )
}

export default Home