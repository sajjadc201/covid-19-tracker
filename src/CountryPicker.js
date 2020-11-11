import React, { useEffect, useState } from "react";
import { fetchDailyData } from "./info";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
// import styles from "../chart/Chart.module.css";

export const CountryPicker = (handleCountryChange) => {
  const [dailydata, setdailydata] = useState([]);
  useEffect(() => {
    const getDailyData = async () => {
      const chartFetchData = await fetchDailyData();
      setdailydata(chartFetchData);
    };
    getDailyData();
  }, [setdailydata]);
  return !dailydata ? (
    "Loading"
  ) : (
    <div>
      <FormControl className="formControl">
        <NativeSelect
          defaultChecked=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option>Global</option>
          {/* {dailydata.map((country, i) => (
            <option value={country} key={i}>
              {country}
            </option>
          ))} */}
        </NativeSelect>
      </FormControl>
    </div>
  );
};
