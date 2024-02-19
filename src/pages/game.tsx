import { useState } from 'react'
const game = () => {
  const [playerChoice, setPlayerChoicer] = useState<string>('')

  const pcHand = ['グー', 'チョキ', 'パー']
  const pcChoice = pcHand[Math.floor(Math.random() * pcHand.length)]

  const gameObject = { playerChoice, pcChoice }

  const judgment = () => {
    if (gameObject.pcChoice === gameObject.playerChoice) {
      return 'あいこ'
    } else if (
      (gameObject.playerChoice === 'グー' && gameObject.pcChoice === 'チョキ') ||
      (gameObject.playerChoice === 'チョキ' && gameObject.pcChoice === 'パー') ||
      (gameObject.playerChoice === 'パー' && gameObject.pcChoice === 'グー')
    ) {
      return '勝ち'
    } else {
      return '負け'
    }
  }
  console.log(gameObject.pcChoice)

  return (
    <div>
      <div>{gameObject.playerChoice ? `${gameObject.pcChoice}` : 'pcの選択'}</div>
      <div>{gameObject.playerChoice ? `${judgment()}` : '勝敗判定を表示する'}</div>
      <div className='flex gap-4'>
        <button onClick={() => setPlayerChoicer('グー')}>グー</button>
        <button onClick={() => setPlayerChoicer('チョキ')}>チョキ</button>
        <button onClick={() => setPlayerChoicer('パー')}>パー</button>
      </div>
    </div>
  )
}
export default game
