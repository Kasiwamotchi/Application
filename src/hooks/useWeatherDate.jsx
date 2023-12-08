import axios from 'axios'
import { useState } from 'react'

const useWeatherDate = () => {
  const [date, setData] = useState({
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
  const getDate = async () => {
    try {
      const response = await axios.get('https://weather.tsukumijima.net/api/forecast/city/130010')
      setData(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  return { date, getDate }
}
export default useWeatherDate
