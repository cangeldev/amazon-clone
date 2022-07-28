import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Config from "react-native-config";
export default function useFetch() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  async function fetchData() {
    try {
      const response = await axios.get(Config.API_URL);
      setProducts(response.data);
    } catch (err) {
      console.log("asd")
      setError(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return { products, error }
}