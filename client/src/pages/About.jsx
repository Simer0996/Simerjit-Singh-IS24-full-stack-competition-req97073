import React from 'react'
import PrimaryNav from '../components/navigation/PrimaryNav'

const About = () => {
    return (
        <div>
            <PrimaryNav />
            <div >
                <h1 className="text-4xl p-4">How to use the application</h1>
                <p className="p-2">This is the basic web application which helps to track the details of products/or specific product </p>
                <div className="p-5">
                    <p className="text-xl">1. Adding a Product : </p>
                    <p className="p-3">In the home page of the app, the details of all products is given such as Product Name, Product Owner, Developers involved in the product, Scrum master Name, Start date of the project, and the type of methodology the product followed. </p>
                    <p className="px-3"> To Add, there is an Add product button at the top right position of the table. After pressing, the Add product form will appear. One thing worth mentioning, all inputs must be filled in order to proceed further.</p>
                    <p className="p-2"><span className="text-red-500 text-xl">Note</span> In the Developers input, to add multiple devs one must have to input name followed by a comma. For example "Developer 1, Developer 2, Developer 3". if no input is provided for methodology input, the default value of methodology will be "Agile".</p>
                    <p className="px-3">After filling the details, the product will be saved and will be appear in the Home page.</p>
                </div>
                <div className="p-5">
                    <p className="text-xl">2. Deleting a product: </p>
                    <p className="p-3">Deleting a product is quite straight forward task, Each details of the product have been categories in the form of table. There is one column i.e. Action which appear to have two buttons. One of which is delete button. </p>
                    <p className="p-3">If one wants to delete any product, simple press the delete button and the changes will appear right away.</p>
                </div>
                <div className="p-5">
                    <p className="text-xl">3. Editing the existing product: </p>
                    <p className="p-3">Similarly, like a delete button in the Action column, there is a Edit Button which allows admin to update the existing product.</p>
                    <p className="p-2"><span className="text-red-500 text-xl">Note</span> The start date of the specific project/product will remain same</p>
                </div>
                <div className="p-5">
                    <p className="text-xl">4: Bonus Feature:</p>
                    <p className="p-3">In the app, the two search fields has been given for searching the specific product with respect to the Scrum master name and developer name</p>
                    <p className="p-2"><span className="text-red-500 text-xl">Note</span> Whenever the name is inputted in the search field, Press Enter to proceed the search.</p>
                </div>

            </div>
        </div>
    )
}

export default About