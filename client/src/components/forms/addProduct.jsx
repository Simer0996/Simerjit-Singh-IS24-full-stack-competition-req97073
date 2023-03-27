import React from 'react'

const addProduct = () => {
    return (
        <div>
            Add a Product
            <form>
                <div className="form-group">
                    <label htmlFor="productid">Name</label>
                    <input type="number" className="form-control" id="productid" placeholder="Enter ID" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Description</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name of the product" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" id="price" placeholder="Enter price of the product" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Image</label>
                    <input type="text" className="form-control" id="description" placeholder="Enter description of the product" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default addProduct