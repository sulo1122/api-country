export default function SearchFilter({ search, setSearch, region, setRegion }) {
  return (
    
    <div className="filter-container">
  <div className="search-box">
    
    <span className="search-icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="5.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m15 15l4 4" />
        </g>
      </svg>
    </span>

    
    <input
      id="search-container"
      type="text"
      placeholder="Search for a country..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

      <select id="region-container" value={region} onChange={(e) => setRegion(e.target.value)}>
        <option className="option-container"  value="">Filter by Region</option>
        <option className="option-container" value="Africa">Africa</option>
        <option className="option-container" value="Americas">America</option>
        <option className="option-container" value="Asia">Asia</option>
        <option className="option-container" value="Europe">Europe</option>
        <option className="option-container" value="Oceania">Oceania</option>
      </select>
    </div>
  )
}
