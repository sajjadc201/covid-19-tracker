import React, { useState, useEffect} from 'react';
import {Card} from './Card';
import './App.css';
import Header from './Header'
import { CountryPicker } from './CountryPicker';
import DisplayCard from "./DisplayCard";
import { fetchCountryData } from "./info";



export const App = () => {
    const [api,setapi] = useState({})
    useEffect(() => {
      const apiData = async () => {
        const getApiData = await fetchCountryData();
        setapi(getApiData);
        console.log(getApiData);
      };
      apiData();
    }, []);


    
    return (
      <div>
        <Header />
        <DisplayCard api={api} />
        <CountryPicker />
        <Card />
      </div>
    );
}
