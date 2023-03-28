import React from 'react'
import EditProduct from '../components/layout/EditProduct'
const EditPage = ({ extractId }) => {
    return (
        <div>
            <EditProduct extractId={extractId} />
        </div>
    )
}

export default EditPage