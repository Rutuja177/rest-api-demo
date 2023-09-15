import {useState } from "react";
import axios from 'axios';

const Display = () =>{
    
    const [countryData, setCountryData] = useState(null);
    const [countryName, setCountryName] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [displayData, setDisplayData] = useState(false);
    const [err, setErr] = useState('');

    
        const fetchCountryData = async () =>{
            try {
                const response = await axios
                .get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
                setCountryData(response.data[0]);  
                setDisplayData(true);    
                setCountryName('');
                setErr('');
                console.log( `country data ${countryName}`, countryData)
            } catch(error){
                console.error('Error fetching country data', error);
                setErr('Enter Valid country name')
            } finally {
                setIsLoading(false);
            }   
        } 
    return(
        <>  
        <div className ="display-data">
        <label>Enter full name of the country</label>
        <input 
                placeholder="search based on country.."
                value = {countryName}
                onChange={e=> setCountryName(e.target.value)}
            /> 
            <button className ="display-button" 
            type = "submit" 
            onClick={fetchCountryData}>Search</button>
            {isLoading && <h3>Loading ....</h3>}
            {err ?<p>{err}</p> : (
            displayData && countryData && (
                <table>
                    <thead>
                        <th>Property</th>
                        <th>Value</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name of the country</td>
                            <td>{countryData.name.common}</td>
                        </tr>
                        <tr>
                            <td>Capital</td>
                            <td>{countryData.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Population</td>
                            <td>{countryData.population}</td>
                        </tr>
                        <tr>
                            <td>Region</td>
                            <td>{countryData.region}</td>
                        </tr>
                        <tr>
                            <td>Continents</td>
                            <td>{countryData.continents.map((continent)=>
                                <p>{continent}</p>)}</td>
                        </tr>
                        <tr>
                            <td>Flag image</td>
                            <td><img src={countryData.flags.png} 
                            alt={countryData.flags.alt}></img></td>
                        </tr>
                        <tr>
                            <td>Coat of Arms</td>
                            <td><img className="coat" src={countryData.coatOfArms.png} alt="coat of arms"></img></td>
                        </tr>
                        <tr> 
                            <td>Currancy</td>
                            <td>{Object.keys(countryData.currencies).map((code)=>(
                                <p key = {code}>Name:{countryData.currencies[code].name}<br></br>Symbol:{countryData.currencies[code].symbol}</p>
                            )
                            )}</td>
                        </tr>
                        <tr> 
                            <td>languages spoken:</td>
                            <td>{Object.keys(countryData.languages).map((language)=>(
                                <p key = {language}>{countryData.languages[language]}</p>
                            )
                            )}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>       
        </>
    ) 
}
export default Display;