import { Button } from '@radix-ui/themes'
import { GiFleurDeLys, GiFlowerTwirl } from 'react-icons/gi'

const carpeDiem = () => {
  return (
    <div className='gap-y-4 grid grid-cols-4 grid-rows-6 p-5'>
      <h1 className='font-bold col-span-4 row-span-1 text-center'>CalpeDiem</h1>
      <div className='bg-red-100 border border-solid border-blue-200 rounded-md row-start-2 row-end-5 col-span-4 w-full h-full'></div>
      <div className='flex justify-center row-start-5 col-span-5 gap-10'>
        <Button className='flex gap-1 text-center items-center border border-solid border-blue-200 rounded-md bg-gray-100 w-20'>
          <GiFleurDeLys className='text-amber-300' />
          <p className='text-black'>Lily</p>
        </Button>
        <Button className='flex gap-1 text-center items-center border border-solid border-blue-200 rounded-md bg-gray-100 w-20'>
          <GiFlowerTwirl className='text-rose-950' />
          <p className='text-black'>Rose</p>
        </Button>
      </div>
      <div className='m-auto row-start-6 col-start-2 col-end-4'>
        <Button className='flex-col border border-solid rounded-md text-black bg-gray-100 border-blue-200 w-20 text-center'>
          Next
        </Button>
      </div>
    </div>
  )
}

export default carpeDiem
