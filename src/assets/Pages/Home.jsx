
import { useEffect, useState } from "react"
import CountryCard from "../../components/CountryCard"
import SearchFilter from "../../components/SearchFilter"

export default function Home() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const countriesPerPage = 52

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital,borders,language,currencies,topLevelDomain')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  const filtered = countries
    .filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
    .filter(c => region ? c.region === region : true)

  const indexOfLast = currentPage * countriesPerPage
  const indexOfFirst = indexOfLast - countriesPerPage
  const currentCountries = filtered.slice(indexOfFirst, indexOfLast)

  const totalPages = Math.ceil(filtered.length / countriesPerPage)

  return (
    <div className="container">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
      />

      <div className="grid">
        {currentCountries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
        >
          Prev
        </button>

        <span>{currentPage} / {totalPages}</span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}
