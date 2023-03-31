# Simerjit-Singh-IS24-full-stack-competition-req97073
Competition: REQ97073

# Testing Front-End
# Getting Started with Create React App
For Front-End i've used the yarn package manager for stable dependencies and version locking
 - To install Yarn globally, 
 - State npm install yarn --global 
 - Although, the project can run using npm start, as i've locked the dependencies package.json file to fix potential warnings.

## To install node_modules 
-  type yarn/or yarn add

### To start the project 
### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!



## To test server 

## To install node_modules 
- type npm i
### `npm start`

Runs the app in the development mode.\
 http://localhost:8000/api/products to view the products

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## For swagger documentation, 
- I've already provided the API documentation on alongside with schema inside the document
http://localhost:8000/api/api-docs


## How to use the application
 How to use the application
 This is the basic web application which helps to track the details of products/or specific product 

 
    1. Adding a Product : 

        In the home page of the app, the details of all products is given such as Product Name, Product Owner, Developers involved in the product, Scrum master Name, Start date of the project, and the type of methodology the product followed.
       
        To Add, there is an Add product button at the top right position of the table. After pressing, the Add product form will appear. One thing worth mentioning, all inputs must be filled in order to proceed further.
        
        Note: In the Developers input, to add multiple devs one must have to input name followed by a comma. For example "Developer 1, Developer 2, Developer 3". if no input is provided for methodology input, the default value of methodology will be "Agile".
        
        After filling the details, the product will be saved and will be appear in the Home page.
                
                
    2. Deleting a product: 
        Deleting a product is quite straight forward task, Each details of the product have been categories in the form of table. There is one column i.e. Action which appear to have two buttons. One of which is delete button. 
        
        If one wants to delete any product, simple press the delete button and the changes will appear right away.
                
    3. Editing the existing product: 
        
        Similarly, like a delete button in the Action column, there is a Edit Button which allows admin to update the existing product.</p>
        
        Note: The start date of the specific project/product will remain same
            
    4: Additional Feature:
        
        In the app, the two search fields has been given for searching the specific product with respect to the Scrum master name and developer name
        
        Note: Whenever the name is inputted in the search field, Press Enter to proceed the search.
            