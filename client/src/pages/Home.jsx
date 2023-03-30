import React, { useEffect, useState } from 'react'
import { getProducts } from '../handler/api'
import AllProducts from '../components/table/AllProducts'
import AddProductButton from '../components/button/AddProductButton'


const Home = () => {
    const [api, setApi] = useState([]);
    const [searchByName, setSearchByName] = useState();
    const [searchByDeveloper, setSearchByDeveloper] = useState();
    const [filteredData, setFilteredData] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            getProducts()
                .then(res => {
                    setApi(res)
                })
                .catch(err => console.log(err))
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    const handleSearchByScrumName = (e) => {
        if (e.key === 'Enter') {
            if (searchByName === '' || searchByName === null || searchByName === undefined || searchByName.length <= 2) {
                api.filter(result => { return result }
                )
            } else {
                const data = api

                    ?.filter((value) => {
                        return value.scrumMasterName.toLowerCase().includes(searchByName?.toLowerCase())
                    }
                    )
                setFilteredData(data)
            }
        }
    }

    const handleSearchByDeveloperName = (e) => {
        if (e.key === 'Enter') {
            if (searchByDeveloper === '' || searchByDeveloper === null || searchByDeveloper === undefined || searchByDeveloper.length <= 2) {
                api.filter(result => { return result }
                )
            } else {
                const data = api.filter(result =>
                    result.developers?.some(developer => developer.toLowerCase().includes(searchByDeveloper?.toLowerCase()))
                )
                setFilteredData(data)
            }
        }
    }

    return (
        <div>
            <h1 className="text-3xl">Track the projects associated with the Government of British columbia</h1>
            <input type="text" className="w-full" placeholder="Search by Scrum master" onChange={(e) => setSearchByName(e.target.value)} onKeyDown={handleSearchByScrumName} />
            <input type="text" className="w-full" placeholder="Search by developer" onChange={(e) => setSearchByDeveloper(e.target.value)} onKeyDown={handleSearchByDeveloperName} />
            <AddProductButton />
            <table className="shadow-lg bg-white w-full">
                <thead>
                    <tr>
                        <th className="bg-blue-100 border text-left px-8 py-4">Product ID</th>
                        <th className="bg-blue-100 border text-left px-8 py-4">Product Name</th>
                        <th className="bg-blue-100 border text-left px-8 py-4">Product Owner Name</th>
                        <th className="bg-blue-100 border text-left px-8 py-4">Developers</th>
                        <th className="bg-blue-100 border text-left px-8 py-4">Scrum master Name</th>
                        <th className="bg-blue-100 border text-left px-8 py-4">Start Date</th>
                        <th className="bg-blue-100 border text-left px-8 py-4">Methodology</th>
                        <th className="bg-blue-100 border text-left px-8 py-4">Action</th>
                    </tr>
                </thead>
                {filteredData === undefined || null || ''
                    ? api.map((data, key) => (
                        <tbody key={key}>
                            <AllProducts
                                data={data}
                                index={key}
                            />
                        </tbody>
                    ))
                    : filteredData?.map((data, key) => (
                        <tbody key={key}>
                            <AllProducts
                                data={data}
                                index={key}
                            />
                        </tbody>
                    ))}
            </table>
        </div>
    )
}

export default Home