import axios from "axios";

export const fetchData = async () => {
  const res = await fetch("https://corona.lmao.ninja/v2/countries");
  const res2 = await res.json();
  return res2;
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get("https://corona.lmao.ninja/v2/countries");

    return Object.keys(data).map((country) => {
      return data[country].country;
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountryData = async () => {
  let changeableUrl = "https://corona.lmao.ninja/v2/all";
  console.log();
  try {
    const {
      data: { cases, recovered, deaths },
    } = await axios.get(changeableUrl);
    return { cases, recovered, deaths };
  } catch (error) {
    console.log(error);
  }
};
