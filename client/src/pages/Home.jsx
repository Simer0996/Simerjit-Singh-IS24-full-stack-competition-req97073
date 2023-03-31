import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProducts } from '../handler/api'
import AllProducts from '../components/table/AllProducts'
import AddProductButton from '../components/button/AddProductButton'
import PrimaryNav from '../components/navigation/PrimaryNav'


const Home = () => {
    const [api, setApi] = useState([]);
    const [searchByName, setSearchByName] = useState();
    const [searchByDeveloper, setSearchByDeveloper] = useState();
    const [filteredData, setFilteredData] = useState([]);

    const addProductToast = () => toast.success("Product added successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const productUpdatedToast = () => toast.success("Product updated successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

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
            if (!searchByName) {
                return api
            }
            const data = api?.filter((value) => {
                return value.scrumMasterName.toLowerCase().includes(searchByName?.toLowerCase())
            }
            )
            setFilteredData(data)
        }
    }

    const handleSearchByDeveloperName = (e) => {
        if (e.key === 'Enter') {
            if (!searchByDeveloper) {
                return api
            }
            const data = api.filter(result =>
                result.developers?.some(developer => developer.toLowerCase().includes(searchByDeveloper?.toLowerCase()))
            )
            setFilteredData(data)
        }
    }

    const handleOnclickScrumName = () => {
        if (!searchByName) {
            return api
        }
        const data = api.filter(result => {
            return result
                .scrumMasterName.toLowerCase().includes(searchByName?.toLowerCase())
        })
        setFilteredData(data)
    }

    const handleOnclickDeveloperName = () => {
        if (!searchByDeveloper) {
            return api
        }
        const data = api.filter(result =>
            result.developers?.some(developer => developer.toLowerCase().includes(searchByDeveloper?.toLowerCase())))
        setFilteredData(data)
    }

    return (
        <div>
            <ToastContainer />
            <div>
                <PrimaryNav />
            </div>
            <h1 className="text-4xl text-center p-5">Track Progress </h1>
            <div className="flex justify-center">
                <input type="text" className="w-[70%] p-2" placeholder="Search by Scrum master" onChange={(e) => setSearchByName(e.target.value)} onKeyDown={handleSearchByScrumName} />
                <button onClick={handleOnclickScrumName} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-4">Search</button>
            </div>
            <div className="flex justify-center mt-3">
                <input type="text" className="w-[70%] p-2" placeholder="Search by developer" onChange={(e) => setSearchByDeveloper(e.target.value)} onKeyDown={handleSearchByDeveloperName} />
                <button onClick={handleOnclickDeveloperName} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-4">Search</button>
            </div>
            <AddProductButton addProductToast={addProductToast} />
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
                {filteredData.length
                    ? filteredData.map((data, key) => (
                        <tbody key={key}>
                            <AllProducts productUpdatedToast={productUpdatedToast}
                                data={data}
                                index={key}
                            />
                        </tbody>
                    ))
                    : api?.map((data, key) => (
                        <tbody key={key}>
                            <AllProducts productUpdatedToast={productUpdatedToast}
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