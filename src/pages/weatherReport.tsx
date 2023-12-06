import Weather from '@/components/common/weather'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const weatherReport = () => {
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
  return (
    <div className='gap-2 items-center text-center'>
      <div>
        <p>{weather.location.prefecture}の天気</p>
        <div className='flex text-center justify-center'>
          {weather.forecasts.map((value, index, array) => {
            return (
              <div>
                <Weather
                  date={value.date}
                  dateLabel={value.dateLabel}
                  telop={value.telop}
                  maxTemperature={value.temperature.max.celsius}
                  minTemperature={value.temperature.min.celsius}
                  url={value.image.url}
                  width={value.image.width}
                  height={value.image.height}
                  title={value.image.title}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <Link href={weather.link} target='_blank' rel='noopener noreferrer'>
          天気予報APIより
        </Link>
      </div>
    </div>
  )
}
export default weatherReport
