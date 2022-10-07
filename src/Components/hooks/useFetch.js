import { useState, useEffect } from 'react';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchCountries = async (configRequest, countryDataHandler) => {
    try {
      const response = await fetch(configRequest?.url);
      // if (!response.ok) {
      //   throw new Error("");
      // }
      const data = await response.json();
      countryDataHandler(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message || 'some thing went wrong');
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);
  return {
    isLoading,
    error,
    fetchCountries,
  };
};

export default useFetch;
