import Flowers from './flowers.json'

const flowerElement =  Flowers[Math.floor(Math.random() * Flowers.length)]
const FlowerView = () => {
  return (
    <div className='border border-solid border-blue-200 rounded-md row-start-2 row-end-5 col-span-4 w-full h-full flex justify-center items-center'>
      <div className='text-center text-2xl	text-bold'>{flowerElement.scientific_name}</div>
    </div>
  )
}

export default FlowerView
