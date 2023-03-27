import { useState } from "react"
import AllProducts from "../components/layout/AllProducts"
import CreateProduct from "../components/layout/CreateProduct"



const Home = () => {
    const [loading, setLoading] = useState(true)


    return (
        <div>
            <AllProducts loading={loading} setLoading={setLoading} />
            <CreateProduct loading={loading} setLoading={setLoading} />

        </div>
    )
}

export default Home