import { useEffect, useState } from 'react';

export function useFetch({ fetchFunction, deps = [], defaultValue = null }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(defaultValue);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await fetchFunction();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [...deps]);

  return { loading, error, data, refetch: fetchData };
}
