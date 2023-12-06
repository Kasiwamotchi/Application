import Image from 'next/image'
import type { FC } from 'react'

type Props = {
  date: string
  dateLabel: string
  telop: string
  maxTemperature: string
  minTemperature: string
  url: string
  width: string
  height: string
  title: string
}

const weather: FC<Props> = (props) => {
  const convertHeight = Number(props.height)
  const convertWidth = Number(props.width)
  return (
    <div>
      <p>{props.dateLabel}</p>
      <Image src={props.url} height={convertHeight} width={convertWidth} alt={props.title} />
      <p>{props.telop}</p>
      <div className='flex gap-1 justify-center '>
        <p className='text-red-600'>{props.maxTemperature}</p>
        <p>/</p>
        <p className='text-blue-600'>{props.minTemperature}</p>
      </div>
    </div>
  )
}
export default weather
