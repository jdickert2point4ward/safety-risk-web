// src/api.js
import axios from 'axios';

// Base URL of your Flask API (adjust this if deployed differently)
const API_URL = "http://localhost:5001"; 

export const getPredictions = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/predict`, { data });
    return response.data;
  } catch (error) {
    console.error("Error fetching predictions:", error);
    throw error;
  }
};