import Flowers from '@/components/common/flowers.json'
import { Button } from '@radix-ui/themes'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { GiFleurDeLys, GiFlowerTwirl } from 'react-icons/gi'

type Prop = {
  scientific_name: string
  japanese_name: string
  tips: string
  picture: string
}

const carpeDiem = () => {
  const [flower, setFlower] = useState<Prop>({ scientific_name: '', japanese_name: '', tips: '', picture: '' })
  const [favorites, setFavorites] = useState<Prop[]>([])
  const [showDetails, setShowDetails] = useState<boolean>(false)
    const [apiData, setApiData] = useState<string>('')


    useEffect(() => {
      axios
        .get('https://api.aoikujira.com/time/get.php')
        .then((response) => {
          console.log(response)
          setApiData(response.data)
        })
        .catch((error) => console.log(error))
    }, [])

  // const getApi = async () => {
  //   try {
  //     const response = await axios.get('https://api.aoikujira.com/time/get.php')
  //     setFlower(response.data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   getApi()
// }, [])


  const nextClick = () => {
    setFlower(Flowers[Math.floor(Math.random() * Flowers.length)])
    setShowDetails(false)
  }

  const flowerClick = () => {
    setShowDetails(true)
  }

  const indexClick = () => {
    setFavorites([...favorites, flower])
  }

  return (
    <div className='gap-y-4 grid grid-cols-4 grid-rows-7 p-5 h-full'>
      <h1 className='font-bold col-span-4 row-span-1 text-center'>CalpeDiem{apiData}</h1>
      <div className='border border-solid border-blue-200 rounded-md row-start-2 row-end-5 col-span-4 w-full h-full flex justify-center items-center'>
        <div className='text-center text-2xl text-bold'>
          {showDetails ? (
            <div>
              <img src={flower.picture} alt={flower.japanese_name} />
              {flower.japanese_name}
              {flower.tips}
            </div>
          ) : (
            <div className='overflow-y-auto'>
              {flower.scientific_name}
              <Image src={flower.picture} alt={flower.japanese_name} width={400} height={400} />
            </div>
          )}
        </div>
      </div>
      <div className='flex justify-center row-start-5 col-span-5 gap-10'>
        <Button
          className='flex gap-1 text-center items-center border border-solid border-blue-200 rounded-md bg-gray-100 w-20'
          onClick={flowerClick}
        >
          <GiFleurDeLys className='text-amber-300' />
          <p className='text-black'>Lily</p>
        </Button>
        <Button
          className='flex gap-1 text-center items-center border border-solid border-blue-200 rounded-md bg-gray-100 w-20'
          onClick={flowerClick}
        >
          <GiFlowerTwirl className='text-rose-950' />
          <p className='text-black'>Rose</p>
        </Button>
      </div>
      <div className='m-auto row-start-6 col-start-2 col-end-4'>
        <Button
          className='flex-col border border-solid rounded-md text-black bg-gray-100 border-blue-200 w-20 text-center'
          onClick={nextClick}
        >
          Next
        </Button>
      </div>
      <div className='row-start-7 col-span-full overflow-y-auto'>
        <Button
          className='border border-solid rounded-md text-black bg-gray-100 border-blue-200 w-20 text-center'
          onClick={indexClick}
        >
          Index
        </Button>
        {favorites.map((favorite, index) => (
          <div key={index}>
            <h3>{favorite.scientific_name}</h3>
            <img src={favorite.picture} alt={favorite.japanese_name} />
            <p>{favorite.japanese_name}</p>
            <p>{favorite.tips}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default carpeDiem
