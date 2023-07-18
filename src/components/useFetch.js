import { useState, useEffect } from 'react';
import axios from 'axios';

// Définition de useFetch qui prend une URL en compte
const useFetch = (url) => {
const [fetchData, setImageData] = useState(null);
const [isLoading, setIsLoading] = useState(true);
// Effectue une  action au chargement de la page
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