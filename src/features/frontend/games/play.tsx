import { useState } from 'react'
type Props = {
  toggleComponent: (word: string) => void
  hand: string[]
  gameCount: number[]
}
const play: React.FC<Props> = (props) => {
  const [playerChoice, setPlayerChoice] = useState<string>('')
  const [pcChoice, setPcChoice] = useState<string>('')
  const [memory, setMemory] = useState<string[]>([])
  const [cardAmount, setCardAmount] = useState<number[]>(props.gameCount)

  const result = ['あいこ', '勝ち', '負け']

  const playerWin = memory.map((value) => value === result[1]).filter((value) => value === true).length

  const pcWin = memory.map((value) => value === result[2]).filter((value) => value === true).length
  const judgment = (playerChoice: string, pcChoice: string) => {
    if (pcChoice === playerChoice) {
      setPcChoice(pcChoice)
      return result[0]
    } else if (
      (playerChoice === props.hand[0] && pcChoice === props.hand[1]) ||
      (playerChoice === props.hand[1] && pcChoice === props.hand[2]) ||
      (playerChoice === props.hand[2] && pcChoice === props.hand[0])
    ) {
      setPcChoice(pcChoice)
      return result[1]
    } else {
      setPcChoice(pcChoice)
      return result[2]
    }
  }
  const umpire = () => {
    if (playerWin >= condition) {
      return 'プレイヤーの勝ち'
    } else if (pcWin >= condition) {
      return 'PCの勝ち'
    } else {
      return `PC${pcWin}勝 プレイヤー${playerWin}勝`
    }
  }
  const condition = Math.round(
    props.gameCount.reduce((amount, prevCount) => amount + prevCount) / props.gameCount.length,
  )

  const toggleMemory = (hand: string, number: number) => {
    const pcSelect = props.hand[Math.floor(Math.random() * props.hand.length)]
    setPlayerChoice(hand)
    setMemory((prev) => [...prev, judgment(hand, pcSelect)])
    const newCardAmount = [...cardAmount]
    newCardAmount[number] = cardAmount[number] - 1
    setCardAmount(() => newCardAmount)
  }
  console.log(cardAmount)
  return (
    <div>
      <p>{condition}勝先取で勝ち!</p>
      <div>{playerChoice ? `${pcChoice}` : 'pcの選択'}</div>
      <div>{umpire()} </div>
      <div>{playerChoice ? `${memory[memory.length - 1]}` : '勝敗判定を表示する'}</div>
      <div className='flex gap-4'>
        <div>
          <button onClick={() => toggleMemory(props.hand[0], 0)} disabled={cardAmount[0] === 0}>
            {props.hand[0]}
          </button>
          <p>残り{cardAmount[0]}回</p>
        </div>
        <div>
          <button onClick={() => toggleMemory(props.hand[1], 1)} disabled={cardAmount[1] === 0}>
            {props.hand[1]}
          </button>
          <p>残り{cardAmount[1]}回</p>
        </div>
        <div>
          <button onClick={() => toggleMemory(props.hand[2], 2)} disabled={cardAmount[2] === 0}>
            {props.hand[2]}
          </button>
          <p>残り{cardAmount[2]}回</p>
        </div>
      </div>
      <div>
        <button onClick={() => props.toggleComponent('false')}>ぬっぬー</button>
      </div>
    </div>
  )
}
export default play
