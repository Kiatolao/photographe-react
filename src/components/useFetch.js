import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
const [fetchData, setImageData] = useState(null);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const { data } = response.data;
      setImageData(data);
      setIsLoading(false);
    } 
    catch (error) {
      console.error('Error:', error.message);
    }
  };

  fetchData();
}, []);


return { fetchData, isLoading}
}
export default useFetch;