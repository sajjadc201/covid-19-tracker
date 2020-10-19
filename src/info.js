import axios from "axios";

export const fetchData = async()=>{
    const res = await fetch(
      "https://api.thevirustracker.com/free-api?countryTotals=ALL"
    );
    const res2 = res.json();
    return res2
    
}

export const fetchDailyData = async () => {
  try {
    const {
      data: { countryitems },
    } = await axios.get(
      "https://api.thevirustracker.com/free-api?countryTotals=ALL"
    );
    return Object.keys(countryitems[0]).map((country) => {
      return countryitems[0][country].title;
    });
  } catch (error) {}
};

export const fetchCountryData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get("https://covid19.mathdro.id/api");
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};


