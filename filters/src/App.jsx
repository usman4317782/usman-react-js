// src/App.js

import React, { useState, useEffect } from 'react';
import DataForm from './components/DataForm';
import DataList from './components/DataList';
import Filter from './components/Filter';
import { getData } from './utils/localStorage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const App = () => {
    const [dataList, setDataList] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // New state for filtered data
    const [filter, setFilter] = useState('');

    // Fetch data from localStorage when the component mounts
    useEffect(() => {
        const storedData = getData();
        setDataList(storedData);
        setFilteredData(storedData); // Initialize filtered data
    }, []);

    // Add new data to both the local state and localStorage
    const addNewData = (data) => {
        const updatedData = [...dataList, data];
        setDataList(updatedData);
        setFilteredData(updatedData); // Update filtered data as well
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Product Management</h1>
            <DataForm addNewData={addNewData} />
            <hr />
            <Filter filter={filter} setFilter={setFilter} dataList={dataList} setFilteredData={setFilteredData} />
            <DataList dataList={filteredData} filter={filter} />
        </div>
    );
};

export default App;
