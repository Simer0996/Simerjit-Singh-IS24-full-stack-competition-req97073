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
            <h1 className="text-2xl py-5">Add a Product</h1>
            <form onSubmit={handleSubmit} className="w-[300px]">
                <div className="form-group">
                    <span className="flex"><label htmlFor="productName" className="text-xl">Product Name</label><p className="text-red-600">*</p></span>
                    <input type="text" className="w-full p-2" id="productName" placeholder="Enter name of the product" onChange={(e) => setProductName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <span className="flex"><label htmlFor="productOwnerName" className="text-xl">Product Owner</label><p className="text-red-600">*</p></span>
                    <input type="text" className="w-full p-2" id="productOwnerName" placeholder="Enter the product Owner" onChange={(e) => setProductOwnerName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <span className="flex"><label htmlFor="Developers" className="text-xl">Developers</label><p className="text-red-600">*</p></span>
                    <input type="text" className="w-full p-2" id="Developers" placeholder="Enter name of the Developers" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <span className="flex"><label htmlFor="scrumMasterName" className="text-xl">Scrum master Name</label><p className="text-red-600">*</p></span>
                    <input type="text" className="w-full p-2" id="scrumMasterName" placeholder="Enter the name of Scrum Master" onChange={(e) => setScrumMasterName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <span className="flex"><label htmlFor="startDate" className="text-xl">Start Date</label><p className="text-red-600">*</p></span>
                    <input type="date" className="w-full p-2" id="startDate" placeholder="Enter the start date of project" onChange={(e) => setStartDate(e.target.value)} required />
                </div>
                <div className="form-group">
                    <span className="flex"><label htmlFor="methodology" className="text-xl">Methodology</label><p className="text-red-600">*</p></span>
                    <select id="favColor" onChange={(e) => setMethodology(e.target.value)} className="w-[70%] p-2" required>
                        <option value="Agile">Agile</option>
                        <option value="WaterFall">Waterfall</option>
                    </select>
                </div>
                <div className="flex justify-center py-6">
                    <button type="submit" className="cursor-pointer text-sl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddProductForm