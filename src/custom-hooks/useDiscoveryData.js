import { useEffect, useState } from "react";
import { DISCOVERY_API_URL } from "../utils/constants";

const useDiscoveryData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(DISCOVERY_API_URL);
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching discovery data:", error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useDiscoveryData;
