import { useEffect, useState } from "react";

export const useFetchData = (countryId) => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [FilterDataByRegion, setFilterDataByRegion] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    let url =
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,languages,tld,currencies";

    if (countryId && countryId !== "undefined") {
      url = `https://restcountries.com/v3.1/name/${countryId}?fields=name,flags,population,capital,region,languages,tld,currencies`;
      console.log("Fetching data for country:", countryId);
    }

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");

      const countries = await response.json();
      if (countryId) {
        console.log(countries[0]);

        setData(countries[0]);
      } else {
        setData(countries);
        setFilterDataByRegion(countries);
        setFilteredData(countries);
        localStorage.setItem("countryData", JSON.stringify(countries));
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchDataFromLocalStorage = () => {
    const localData = localStorage.getItem("countryData");
    if (localData) {
      const parsed = JSON.parse(localData);
      setData(parsed);
      setFilteredData(parsed);
      setLoading(false);
      setFilterDataByRegion(parsed);
    } else {
      fetchData();
    }
  };

  useEffect(() => {
    if (countryId) {
      fetchData();
    } else {
      fetchDataFromLocalStorage();
    }
  }, []);

  return {
    loading,
    isError,
    data,
    filteredData,
    setData,
    setFilteredData,
    FilterDataByRegion,
    setFilterDataByRegion,
  };
};
