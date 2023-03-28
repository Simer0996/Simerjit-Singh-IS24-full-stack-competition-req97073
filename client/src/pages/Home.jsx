import { useState } from "react"
import AllProducts from "../components/layout/AllProducts"
import AddProduct from "../components/layout/AddProduct"



const Home = () => {
    const [loading, setLoading] = useState(true)


    return (
        <div>
            <AllProducts loading={loading} setLoading={setLoading} />
            <AddProduct loading={loading} setLoading={setLoading} />
        </div>
    )
}

export default Home