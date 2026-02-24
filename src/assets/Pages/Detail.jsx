import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Detail() {
  const { name } = useParams()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(res => res.json())
      .then(data => setCountry(data[0]))
  }, [name])

  if (!country) return <h2>Loading...</h2>

  return (
    <div className="detail">
      <Link id="back-detail" to="/">← Back</Link>

      <div className="detail-container">
        <img id="detail-image" src={country.flags.svg} alt={country.name.common} />

        <div className="detail-country">
          <h2>{country.name.common}</h2>
          <div className="detail-info">
          <div>
          <p><b>Native Name:</b> {Object.values(country.name.nativeName || {})[0]?.common}</p>
          <p><b>Population:</b> {country.population.toLocaleString()}</p>
          <p><b>Region:</b> {country.region}</p>
          <p><b>Sub Region:</b> {country.subregion}</p>
          <p><b>Capital:</b> {country.capital?.[0]}</p>
          <br /><br />
          <p><b>Border Countries:</b> {country.borders ? country.borders.join(", ") : "None"}</p>
          
          </div>
            <div>
          
          <p><b>Languages:</b> {Object.values(country.languages || {}).join(", ")}</p>
          <p><b>Currencies:</b> {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>
          <p><b>Top Level Domain:</b> {country.topLevelDomain?.[0]}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}