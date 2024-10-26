import React from 'react';

const DataList = ({ dataList }) => {
    return (
        <table className="table table-bordered mt-4">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>SKU</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Description</th>
                    <th>Short Description</th>
                    <th>Tags</th>
                    <th>Price</th>
                    <th>Discounted Price</th>
                    <th>Tax Rate</th>
                </tr>
            </thead>
            <tbody>
                {dataList.map((item, index) => (
                    <tr key={index}>
                        <td>
                            {item.image && (
                                <img 
                                    src={item.image} 
                                    alt={item.productName} 
                                    style={{ width: '50px', height: '50px' }} 
                                />
                            )}
                        </td>
                        <td>{item.productName}</td>
                        <td>{item.productSKU}</td>
                        <td>{item.category}</td>
                        <td>{item.brand}</td>
                        <td>{item.description}</td>
                        <td>{item.shortDescription}</td>
                        <td>{item.tags}</td>
                        <td>{item.price}</td>
                        <td>{item.discountedPrice}</td>
                        <td>{item.taxRate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataList;
