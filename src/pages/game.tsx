import Preparation from '@/features/frontend/games/Preparation'
import Play from '@/features/frontend/games/play'
import { useState } from 'react'
const game = () => {
  const [changeView, setChangeView] = useState<string>('false')
  const [gameCount, setGameCount] = useState<number[]>([0, 0, 0])
  const hand = ['グー', 'チョキ', 'パー']

  const toggleComponent = (word: string) => {
    setChangeView(word)
  }
  const toggleCount = (number: number[]) => {
    setGameCount(number)
  }

  console.log(gameCount)
  return (
    <div>
      {changeView === 'false' ? (
        <Preparation toggleComponent={toggleComponent} hand={hand} toggleCount={toggleCount} gameCount={gameCount} />
      ) : (
        <Play toggleComponent={toggleComponent} hand={hand} gameCount={gameCount} />
      )}
    </div>
  )
}
export default game
