import { useState, useEffect } from 'react';

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchCountries = async (configRequest, countryDataHandler) => {
    try {
      const response = await fetch(configRequest?.url);
      const data = await response.json();
      if (data) {
        countryDataHandler(data);
      }
      setIsLoading(false);
    } catch (error) {
      setError(error.message || 'some thing went wrong');
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

