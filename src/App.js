import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import "./App.css";
import Header from "./Header";
import { CountryPicker } from "./CountryPicker";
import DisplayCard from "./DisplayCard";
import { fetchCountryData } from "./info";

export const App = () => {
  const [api, setapi] = useState({});
  const [country, setcountries] = useState("");
  useEffect(() => {
    const apiData = async () => {
      const getApiData = await fetchCountryData();
      setapi(getApiData);
    };
    apiData();
  }, []);
  const handleCountryChange = async (country) => {
    const getApiData = await fetchCountryData(country);
    setapi(getApiData);
    setcountries(getApiData);
  };
  return (
    <div>
      <Header />
      <DisplayCard api={api} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Card />
    </div>
  );
};
