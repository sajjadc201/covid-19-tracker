import axios from "axios";

export const fetchData = async () => {
  const res = await fetch("https://corona.lmao.ninja/v2/countries");
  const res2 = await res.json();
  return res2;
};

export const fetchDailyData = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${"https://covid19.mathdro.id/api"}/countries`);

    return countries.map((country) => {
      return country.name;
    });
  } catch (error) {
    console.log(error);
  }
};
const url = "https://covid19.mathdro.id/api";
export const fetchCountryData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};
