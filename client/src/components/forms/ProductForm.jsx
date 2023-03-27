import React from 'react'

const ProductForm = ({ setName, setPrice, setDescription, setId, handleSubmit }) => {
    return (
        <div>
            Add a Product
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="productid">Name</label>
                    <input type="number" className="form-control" id="productid" placeholder="Enter ID" onChange={(e) => setId(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Description</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name of the product" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" id="price" placeholder="Enter price of the product" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Image</label>
                    <input type="text" className="form-control" id="description" placeholder="Enter description of the product" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ProductForm