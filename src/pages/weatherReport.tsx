import Weather from '@/components/common/weather'
import useWeatherDate from '@/hooks/useWeatherDate'
import Link from 'next/link'

const weatherReport = () => {
  const { date, getDate } = useWeatherDate()
  console.log(date)

  return (
    <div className='gap-2 items-center text-center'>
      <div>
        <p>{date.location.prefecture}の天気</p>
        <div className='flex text-center justify-center'>
          {date.forecasts.map((value, index, array) => {
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
      <button onClick={getDate}>地域変更</button>
      <div>
        <Link href={date.link} target='_blank' rel='noopener noreferrer'>
          天気予報APIより
        </Link>
      </div>
    </div>
  )
}
export default weatherReport
