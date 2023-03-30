import React from 'react'

const AddProductForm = ({ setProductName,
    setScrumMasterName,
    setProductOwnerName,
    handleChange,
    setStartDate,
    setMethodology,
    handleSubmit }) => {

    return (
        <div>
            <h1>Add a Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" className="form-control" id="productName" placeholder="Enter name of the product" onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="productOwnerName">Product Owner</label>
                    <input type="text" className="form-control" id="productOwnerName" placeholder="Enter the product Owner" onChange={(e) => setProductOwnerName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="Developers">Developers</label>
                    <input type="text" className="form-control" id="Developers" placeholder="Enter name of the Developers" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="scrumMasterName">Scrum master Name</label>
                    <input type="text" className="form-control" id="scrumMasterName" placeholder="Enter the name of Scrum Master" onChange={(e) => setScrumMasterName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" className="form-control" id="startDate" placeholder="Enter the start date of project" onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="methodology">Methodology</label>
                    <select id="favColor" onChange={(e) => setMethodology(e.target.value)}>
                        <option value="agile">Agile</option>
                        <option value="waterFall">Waterfall</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddProductForm