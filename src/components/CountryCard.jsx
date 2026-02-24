import { Link } from "react-router-dom"

export default function CountryCard({ country }) {
  return (
    <Link to={`/country/${country.name.common}`} className="card">
      <img src={country.flags.svg} alt={country.name.common} />

      <div className="card-body">
        <h3 id="heading-bold">{country.name.common}</h3>
        <p><span className="para-bold">Population:</span> {country.population.toLocaleString()}</p>
        <p><span className="para-bold">Region:</span> {country.region}</p>
        <p><span className="para-bold">Capital:</span> {country.capital?.[0]}</p>
      </div>
    </Link>
  )
}