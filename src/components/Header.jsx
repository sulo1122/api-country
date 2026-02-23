export default function Header({ dark, setDark }) {
  return (
    <header className="header">
      <h2>Where in the world?</h2>

      <button onClick={() => setDark(!dark)} className="dark-btn">
        {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  )
}