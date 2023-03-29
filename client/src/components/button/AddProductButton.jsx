import React, { useState } from 'react'
import Modal from 'react-modal';
import AddProduct from '../forms/AddProductForm';

const AddProductButton = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="flex justify-end p-4">
            <button onClick={openModal} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add Product</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <AddProduct />
            </Modal>
        </div>
    )
}

export default AddProductButton