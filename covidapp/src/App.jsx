import React, { useEffect, useState } from "react";

// import "./components/darklight";
import "./App.css";

function Covid() {
  const [darkMode, setDarkMode] = useState(false);
  const [country, setCountry] = useState("");
  const [continent, setContinent] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [deathCases, setDeathCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    country,
    continent,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
  }) => {
    setCountry(country);
    setContinent(continent);
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todayCases);
    setDeathCases(todayDeaths);
    setRecoveredCases(todayRecovered);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (props) => {
    props.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="switch-container">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round" />
          </label>
          <label className="switch-label">{darkMode ? "Dark" : "Light"}</label>
        </div>
        {/* {data && data.length > 0 ? <pages data={data} /> : <p>Loading...</p>} */}

        <div className="covid">
          <h1>COVID-19</h1>
          <div className="covid__input">
            <form onSubmit={handleSubmit}>
              {/* input county name */}
              <input onChange={handleSearch} placeholder="Enter Country Name" />
              {/* <br /> */}
              <button type="submit">Search</button>
            </form>
            <div className="container"></div>
          </div>
          {/* Showing the details of the country */}
          <div className="covid__countries__info">
            <p>Country Name : {country} </p>

            <p>continent : {continent}</p>

            <p>Cases : {cases}</p>

            <p>Deaths : {deaths}</p>

            <p>Recovered : {recovered}</p>

            <p>Cases Today : {todayCases}</p>

            <p>Deaths Cases Today : {deathCases}</p>

            <p>Recovered Cases Today : {recoveredCases}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Covid;