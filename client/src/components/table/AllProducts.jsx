import React from 'react'
import EditButton from '../button/EditButton'
import DeleteButton from '../button/DeleteButton'

const AllProducts = ({ data, index, productUpdatedToast, productDeletedToast }) => {
    return (
        <tr key={index}>
            <td className="border px-6 py-2">{index + 1}</td>
            <td className="border px-6 py-2">{data.productName}</td>
            <td className="border px-6 py-2">{data.productOwnerName}</td>
            <td className="border px-6 py-2">{data.developers.map((developer, index) => (
                <div key={index} className="flex">{developer}</div>
            ))}</td>
            <td className="border px-6 py-2">{data.scrumMasterName}</td>
            <td className="border px-6 py-2">{data.startDate}</td>
            <td className="border px-6 py-2">{data.methodology}</td>
            <td className="px-6 py-2 "><EditButton productUpdatedToast={productUpdatedToast} id={data.id} /><DeleteButton productDeletedToast={productDeletedToast} id={data.id} /></td>
        </tr>
    )
}

export default AllProducts