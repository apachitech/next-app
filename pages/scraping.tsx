import { useState } from 'react'
import scrapingService from '../services/scrapingService'

export default function Scraping() {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleScrape = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    try {
      const { success, data, error: scrapeError } = await scrapingService.scrapeWebsite(url)
      if (success) {
        setResult(data)
      } else {
        alert(scrapeError)
      }
    } catch (err) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1 className="dashboard-title">Scraping Configuration</h1>
      <form onSubmit={handleScrape} className="scraping-config">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to scrape"
          className="config-input"
          required
        />
        <button type="submit" className="config-button" disabled={loading}>
          {loading ? 'Scraping...' : 'Start Scraping'}
        </button>
      </form>
      {result && (
        <div className="scraping-result">
          <h2>Results</h2>
          <ul>
            {result.map((link, index) => (
              <li key={index}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}