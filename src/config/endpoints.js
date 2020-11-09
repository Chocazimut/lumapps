const apiBaseUrl = `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_VERSION}/${process.env.REACT_APP_API_TYPE}`

const endpoints = {
  apiRestCharacters: `${apiBaseUrl}/characters`,
  apiRestComics: `${apiBaseUrl}/comics`,
}

export default endpoints
