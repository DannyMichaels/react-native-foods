import { useState, useEffect } from 'react';
import yelpApi from '../services/yelpApi';

export default function useRestaurants() {
  const [results, setResults] = useState([]); // restaurants
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (term) => {
    try {
      let response = await yelpApi.get('/search', {
        // query string
        params: {
          limit: 50,
          term,
          location: 'san jose',
        },
      });

      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
}
