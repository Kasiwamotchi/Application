import axios from 'axios'
import { useEffect, useState } from 'react'

const weatherReport = () => {
  const [weather, setWeather] = useState([])

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
  console.log(Object.values(weather))
  return (
    <div>
      <p>ぬ</p>
    </div>
  )
}
export default weatherReport
