// src/utils/localStorage.js

export const saveData = (data) => {
  const existingData = JSON.parse(localStorage.getItem('products')) || [];
  existingData.push(data); // Add the new product to the existing list
  localStorage.setItem('products', JSON.stringify(existingData));
};

export const getData = () => {
  return JSON.parse(localStorage.getItem('products')) || [];
};