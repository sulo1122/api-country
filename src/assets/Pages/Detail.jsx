
  
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {

  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    setCountry(null);
    setBorderCountries([]);

    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(res => res.json())
      .then(data => {
        setCountry(data[0]);

      
        if (data[0].borders) {
          fetch(`https://restcountries.com/v3.1/alpha?codes=${data[0].borders.join(",")}`)
            .then(res => res.json())
            .then(borderData => setBorderCountries(borderData));
        }
      });

  }, [name]);

  if (!country) return <h2>Loading...</h2>;

  return (
    <div className="detail">
      <Link id="back-detail" to="/">← Back</Link>

      <div className="detail-container">
        <img
          id="detail-image"
          src={country.flags.svg}
          alt={country.name.common}
        />

        <div className="detail-country">
          <h2>{country.name.common}</h2>

          <div className="detail-info">
            <div className="detail-value">

              <div>
                <p><b>Native Name:</b> {Object.values(country.name.nativeName || {})[0]?.common}</p>
                <p><b>Population:</b> {country.population.toLocaleString()}</p>
                <p><b>Region:</b> {country.region}</p>
                <p><b>Sub Region:</b> {country.subregion}</p>
                <p><b>Capital:</b> {country.capital?.[0]}</p>
              </div>

              <div>
                <p><b>Top Level Domain:</b> {country.tld?.[0] || "N/A"}</p>
                <p><b>Currencies:</b> {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>
                <p><b>Languages:</b> {Object.values(country.languages || {}).join(", ")}</p>
              </div>

            </div>

            
            <div className="border-countries">
              <b>Border Countries:</b>

              {borderCountries.length > 0 ? (
                borderCountries.map((border) => (
                  <button
                    key={border.cca3}
                    className="border-btn"
                    onClick={() => navigate(`/country/${border.name.common}`)}
                  >
                    {border.name.common}
                  </button>
                ))
              ) : (
                <span> None</span>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}