import React, { useState } from 'react';
import { saveData } from '../utils/localStorage';

const DataForm = ({ addNewData }) => {
    const [formData, setFormData] = useState({
        productName: '',
        productSKU: '',
        category: '',
        brand: '',
        description: '',
        shortDescription: '',
        tags: '',
        price: '',
        discountedPrice: '',
        taxRate: '',
        image: null // to store the uploaded image base64
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onloadend = () => {
            setFormData(prevState => ({
                ...prevState,
                image: reader.result // Store the base64 string of the image
            }));
        };

        if (file) {
            reader.readAsDataURL(file); // Convert the image file to base64
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert formData into a plain object (JSON-compatible)
        const plainFormData = { ...formData };
        
        // Add new data to the list and update localStorage
        addNewData(plainFormData);
        saveData(plainFormData);

        // Reset the form after submission
        setFormData({
            productName: '',
            productSKU: '',
            category: '',
            brand: '',
            description: '',
            shortDescription: '',
            tags: '',
            price: '',
            discountedPrice: '',
            taxRate: '',
            image: null
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                {/* Product Name */}
                <div className="col-md-4 mb-3">
                    <label>Product Name</label>
                    <input 
                        type="text" 
                        name="productName" 
                        value={formData.productName} 
                        onChange={handleChange} 
                        className="form-control" 
                        required 
                    />
                </div>

                {/* Product SKU */}
                <div className="col-md-4 mb-3">
                    <label>Product SKU</label>
                    <input 
                        type="text" 
                        name="productSKU" 
                        value={formData.productSKU} 
                        onChange={handleChange} 
                        className="form-control" 
                        required 
                    />
                </div>

                {/* Category */}
                <div className="col-md-4 mb-3">
                    <label>Category</label>
                    <input 
                        type="text" 
                        name="category" 
                        value={formData.category} 
                        onChange={handleChange} 
                        className="form-control" 
                        required 
                    />
                </div>
            </div>

            <div className="row">
                {/* Brand */}
                <div className="col-md-4 mb-3">
                    <label>Brand</label>
                    <input 
                        type="text" 
                        name="brand" 
                        value={formData.brand} 
                        onChange={handleChange} 
                        className="form-control" 
                        required 
                    />
                </div>

                {/* Description */}
                <div className="col-md-4 mb-3">
                    <label>Description</label>
                    <textarea 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange} 
                        className="form-control" 
                        rows="4" 
                        required
                    />
                </div>

                {/* Short Description */}
                <div className="col-md-4 mb-3">
                    <label>Short Description</label>
                    <textarea 
                        name="shortDescription" 
                        value={formData.shortDescription} 
                        onChange={handleChange} 
                        className="form-control" 
                        rows="2" 
                        required
                    />
                </div>
            </div>

            <div className="row">
                {/* Tags */}
                <div className="col-md-4 mb-3">
                    <label>Tags</label>
                    <input 
                        type="text" 
                        name="tags" 
                        value={formData.tags} 
                        onChange={handleChange} 
                        className="form-control" 
                    />
                </div>

                {/* Price */}
                <div className="col-md-4 mb-3">
                    <label>Price</label>
                    <input 
                        type="number" 
                        name="price" 
                        value={formData.price} 
                        onChange={handleChange} 
                        className="form-control" 
                        required 
                    />
                </div>

                {/* Discounted Price */}
                <div className="col-md-4 mb-3">
                    <label>Discounted Price</label>
                    <input 
                        type="number" 
                        name="discountedPrice" 
                        value={formData.discountedPrice} 
                        onChange={handleChange} 
                        className="form-control" 
                    />
                </div>
            </div>

            <div className="row">
                {/* Tax Rate */}
                <div className="col-md-4 mb-3">
                    <label>Tax Rate (%)</label>
                    <input 
                        type="number" 
                        name="taxRate" 
                        value={formData.taxRate} 
                        onChange={handleChange} 
                        className="form-control" 
                        required 
                    />
                </div>

                {/* Product Image */}
                <div className="col-md-4 mb-3">
                    <label>Product Image (optional)</label>
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                        className="form-control" 
                    />
                </div>

                {/* Empty Column for Layout */}
                <div className="col-md-4 mb-3"></div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    );
};

export default DataForm;
