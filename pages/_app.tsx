import '../styles/globals.css'

export default function MyApp({
  Component,
  pageProps
}) {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <h1>Web Scraper Dashboard</h1>
          <div className="nav-links">
            <a href="/" className="nav-link">Home</a>
            <a href="/scraping" className="nav-link">Scraping</a>
            <a href="/visualization" className="nav-link">Visualization</a>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}