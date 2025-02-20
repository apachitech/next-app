import axios from 'axios'
import * as cheerio from 'cheerio'

const scrapingService = {
  async scrapeWebsite(url: string) {
    try {
      console.log('Attempting to scrape:', url)
      const response = await axios.get(url)
      const $ = cheerio.load(response.data)
      const links = $('a[href]').map((index, element) => ({
        text: $(element).text().trim(),
        href: $(element).attr('href')
      })).get()

      console.log('Scraping successful')
      return {
        success: true,
        data: links
      }
    } catch (error) {
      console.error('Scraping failed:', error.message)
      return {
        success: false,
        error: error.message
      }
    }
  }
}

export default scrapingService