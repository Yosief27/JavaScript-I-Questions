import  { useState,useEffect} from 'react'
import CountryCard from "./CountryCard"



const BASE_URL="https://restcountries.com/v3.1/all";
type country={
    name:{
        common:string,
    },
    capital:string
}
const CountriesPage = () => {
    const [countries,setCountries]=useState<country[]>([]);
    useEffect(()=>{
        const getCountries=async()=>{
            const data=await fetch(BASE_URL);
            const rowData=await data.json();
         
            setCountries(rowData);
        }
        getCountries();
        console.log(countries)
    },[]) 
  return (

    <div>{countries.map(country=>{
        return <CountryCard key={country.name.common} name={country.name.common} capital={country.capital}/>    
    })}</div>
  )
}

export default CountriesPage