import { useState, useEffect } from "react";
import axios from "axios";

//Getting random data from the server
export const GetData = ({ endpoint, query }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://api.spoonacular.com/recipes/random?apiKey=dc08124ff78a4ea9855372247525457d&number=5`,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.recipes);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading };
};

export default GetData;

//Getting vegetarian data from the server
export const GetVegetarianData = ({ endpoint, query }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://api.spoonacular.com/recipes/random?apiKey=dc08124ff78a4ea9855372247525457d&number=5&tags=vegetarian`,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.recipes);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading };
};

//Getting Africa data from the server
export const GetAfricaData = ({ endpoint, query }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://api.spoonacular.com/recipes/random?apiKey=dc08124ff78a4ea9855372247525457d&number=5&tags=african`,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.recipes);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading };
};

//Getting America data from the server
export const GetAmericaData = ({ endpoint, query }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://api.spoonacular.com/recipes/random?apiKey=dc08124ff78a4ea9855372247525457d&number=3&tags=american`,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.recipes);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading };
};


//Getting Thai data from the server
export const GetThaiData = ({ endpoint, query }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://api.spoonacular.com/recipes/random?apiKey=dc08124ff78a4ea9855372247525457d&number=3&tags=thai`,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.recipes);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading };
};


//Getting Thai data from the server
export const GetItalianData = ({ endpoint, query }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://api.spoonacular.com/recipes/random?apiKey=dc08124ff78a4ea9855372247525457d&number=3&tags=italian`,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.recipes);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading };
};
