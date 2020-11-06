import {identity, pathOr} from 'ramda'
import axios from 'axios'

const fetchApi = async (axiosConfig, formatData = identity) => {
  const enrichedParams = {
    ...axiosConfig,
    withCredentials: false,
    params: {
      ...axiosConfig.params,
      apikey: process.env.REACT_APP_MARVEL_API_KEY,
    },
  }

  try {
    const response = await axios(enrichedParams)
    const {data, status, headers} = response

    return {data: formatData(data, headers), status}
  } catch (error) {
    const details = pathOr(null, ['response', 'data'], error)
    const status = pathOr(null, ['response', 'status'], error)

    const message = pathOr(
      'An unknown error occurred during an API request',
      'message',
      error,
    )

    // eslint-disable-next-line no-console
    console.error('Error in fetchApi:', message)

    return {error: {details, message}, status}
  }
}

export default fetchApi
