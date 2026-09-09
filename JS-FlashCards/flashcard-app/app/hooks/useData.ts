import { useEffect, useState } from "react";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);

    fetch(endpoint, { signal })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`HTTP error, Status: ${res.status}`);
        }
      })
      .then((result) => {
        setData(result.results);
        setLoading(false);
      })
      .catch((error) => {
        const message = "There was an error fetching data: " + error;
        setError(message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;