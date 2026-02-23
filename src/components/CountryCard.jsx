import { Link } from "react-router-dom"

export default function CountryCard({ country }) {
  return (
    <Link to={`/country/${country.name.common}`} className="card">
      <img src={country.flags.svg} alt={country.name.common} />

      <div className="card-body">
        <h3>{country.name.common}</h3>
        <p><b>Population:</b> {country.population.toLocaleString()}</p>
        <p><b>Region:</b> {country.region}</p>
        <p><b>Capital:</b> {country.capital?.[0]}</p>
      </div>
    </Link>
  )
}