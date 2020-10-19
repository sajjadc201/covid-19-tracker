import React, { useEffect, useState } from "react";
import { fetchDailyData } from "./info";

export const CountryPicker = ({ handleCountryChange }) => {
  const [dailydata, setdailydata] = useState([]);
  useEffect(() => {
    const getDailyData = async () => {
      const chartFetchData = await fetchDailyData();
      setdailydata(chartFetchData);
    };
    getDailyData();
  }, [setdailydata]);
  return !dailydata ? "Loading" : <div></div>;
};
