const API_KEY = process.env.REACT_APP_API_KEY

const getArticles = async (section, errorHandler) => {
  const newsUrl = (`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`)

  try {
    const response = await fetch(newsUrl)
    if (!response.ok) {
      console.log(response.status)
      throw new Error(response.status)
    }

    const data = await response.json()

    const formattedData = data.results.map((dataValue, index) => {
      const { section, subsection, title, abstract, url, byline,
              published_date, mulitmedia } = dataValue

      return {id: (index-1), section: section, subsection: subsection, title: title, abstract: abstract,
              url:url, byline: byline, published_date: published_date, mulitmedia: mulitmedia}
    })

    return formattedData.slice(2)

  } catch(error) {
    errorHandler(error.message)
  }
}

export { getArticles }