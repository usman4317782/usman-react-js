// src/components/Filter.js

import React, { useState } from 'react';

const Filter = ({ filter, setFilter, dataList, setFilteredData }) => {
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [tags, setTags] = useState('');

    const handleFilter = () => {
        let filteredData = dataList;

        // Apply name filter
        if (filter) {
            filteredData = filteredData.filter(item =>
                item.productName.toLowerCase().includes(filter.toLowerCase())
            );
        }

        // Apply category filter
        if (category) {
            filteredData = filteredData.filter(item =>
                item.category.toLowerCase() === category.toLowerCase()
            );
        }

        // Apply brand filter
        if (brand) {
            filteredData = filteredData.filter(item =>
                item.brand.toLowerCase().includes(brand.toLowerCase())
            );
        }

        // Apply price range filter
        if (minPrice || maxPrice) {
            filteredData = filteredData.filter(item => {
                const price = parseFloat(item.price);
                const min = minPrice ? parseFloat(minPrice) : 0;
                const max = maxPrice ? parseFloat(maxPrice) : Infinity;
                return price >= min && price <= max;
            });
        }

        // Apply tags filter
        if (tags) {
            const tagsArray = tags.split(',').map(tag => tag.trim().toLowerCase());
            filteredData = filteredData.filter(item =>
                item.tags && tagsArray.some(tag => item.tags.toLowerCase().includes(tag))
            );
        }

        setFilteredData(filteredData);
    };

    const handleClearFilters = () => {
        setFilter('');
        setCategory('');
        setBrand('');
        setMinPrice('');
        setMaxPrice('');
        setTags('');
        setFilteredData(dataList); // Reset to original data
    };

    return (
        <div className="row mb-4">
            <div className="col-md-3">
                <input
                    type="text"
                    placeholder="Search by Name"
                    className="form-control"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                />
            </div>
            <div className="col-md-3">
                <input
                    type="text"
                    placeholder="Filter by Category"
                    className="form-control"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />
            </div>
            <div className="col-md-3">
                <input
                    type="text"
                    placeholder="Filter by Brand"
                    className="form-control"
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
                />
            </div>
            <div className="col-md-3">
                <input
                    type="text"
                    placeholder="Min Price"
                    className="form-control"
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Max Price"
                    className="form-control mt-2"
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                />
            </div>
            <div className="col-md-3 mt-3">
                <input
                    type="text"
                    placeholder="Filter by Tags (comma-separated)"
                    className="form-control"
                    value={tags}
                    onChange={e => setTags(e.target.value)}
                />
            </div>
            <div className="col-md-3 mt-3">
                <button className="btn btn-primary" onClick={handleFilter}>
                    Apply Filters
                </button>
                <button className="btn btn-secondary ml-2" onClick={handleClearFilters}>
                    Clear Filters
                </button>
            </div>
            {/* New section to display message if no records found */}
            <div className="col-md-12 mt-3">
                {setFilteredData.length === 0 && (
                    <div className="alert alert-warning">
                        No records found matching your search criteria.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filter;
