import { useState } from 'react'

const RandomView = () => {
  const [imageUrl, setImageUrl] = useState('')

  const handleClick = async () => {
    try {
      const response = await fetch('https://source.unsplash.com/random')
      setImageUrl(response.url)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <button onClick={handleClick}>ボタン</button>
      {imageUrl && <img src={imageUrl} />}
    </div>
  )
}

export default RandomView
