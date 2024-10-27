import React from "react";
import SideBar from "./SideBar";

function AddProducts() {
  return (
    <div id="wrapper">
      <SideBar />
      <div className="container mt-5">
        <h2>Add New Product</h2>
        <form className="mt-4">
          <div className="form-group mb-3">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Enter price"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="category">Category</label>
            <select className="form-select" id="category" required>
              <option value="" disabled>
                Select Category
              </option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
              <option value="toys">Toys</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="image">Product Image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              accept="image/*"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="Enter product description"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
