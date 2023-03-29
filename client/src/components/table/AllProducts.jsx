import React from 'react'
import EditButton from '../button/EditButton'
import DeleteButton from '../button/DeleteButton'
import AddProductButton from '../button/AddProductButton'

const AllProducts = ({ data }) => {
    return (
        <div>
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
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="border px-6 py-2">{item.id}</td>
                            <td className="border px-6 py-2">{item.productName}</td>
                            <td className="border px-6 py-2">{item.productOwnerName}</td>
                            <td className="border px-6 py-2">{item.Developers.map(developer => (
                                <div className="flex">{developer}</div>
                            ))}</td>
                            <td className="border px-6 py-2">{item.scrumMasterName}</td>
                            <td className="border px-6 py-2">{item.startDate}</td>
                            <td className="border px-6 py-2">{item.methodology}</td>
                            <td className="px-6 py-2 "><EditButton id={item.id} /><DeleteButton id={item.id} /></td>
                        </tr>
                    ))}

                </tbody>
            </table></div>
    )
}

export default AllProducts