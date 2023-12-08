import axios from 'axios'
import { useEffect, useState } from 'react'

const useApi = () => {
  const [weather, setWeather] = useState({
    link: '',
    location: { prefecture: '' },
    forecasts: [
      {
        date: '',
        dateLabel: '',
        telop: '',
        temperature: { min: { celsius: '' }, max: { celsius: '' } },
        image: { url: '', width: '', height: '', title: '' },
      },
    ],
  })
  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get('https://weather.tsukumijima.net/api/forecast/city/130010')
        setWeather(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    getApi()
  }, [])

  return weather
}
export default useApi
