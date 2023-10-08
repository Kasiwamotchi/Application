import Image from 'next/image';

const touchImage = () => {
  return `https://source.unsplash.com/random`;
}

const RandomView = () => {
  return (
    <div>
      <button>ボタン</button>
      <Image className="w-full" loader={touchImage} src="random" width={500} height={500} alt="ランダムで表示される画像" />
    </div>
  )
}

export default RandomView
