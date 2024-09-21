
import axios from 'axios';

const API_URL = 'http://tu-dynmap-url'; 

export const fetchDynMapData = async () => {
  try {
    const response = await axios.get(`${API_URL}/path/to/endpoint`); 
    return response.data;
  } catch (error) {
    console.error('Error fetching DynMap data:', error);
    throw error;
  }
};