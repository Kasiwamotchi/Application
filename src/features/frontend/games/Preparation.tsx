import React, { useState } from 'react'

type Props = {
  toggleComponent: (word: string) => void
  hand: string[]
  toggleCount: (number: number[]) => void
  gameCount: number[]
}

const Preparation: React.FC<Props> = (props) => {
  const [numbers, setNumbers] = useState<number[]>(props.gameCount.map(() => 0))
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, id: number, value: string) => {
    const newNumbers = [...numbers]
    newNumbers[id] = parseInt(e.target.value) || parseInt(value)
    setNumbers(newNumbers)
  }
  const playGame = (numbers: number[]) => {
    props.toggleCount(numbers)
    props.toggleComponent('true')
  }
  return (
    <div>
      <div>
        <div className='flex'>
          {props.hand.map((value, id) => (
            <div key={value}>
              <p>{value}</p>
              <input
                id={`${id}`}
                type='number'
                className='border border-solid border-black'
                value={numbers[id]}
                onChange={(e) => handleInputChange(e, id, value)}
              />
            </div>
          ))}
        </div>
        <button
          className='box-border w-full'
          onClick={() => {
            playGame(numbers)
          }}
        >
          ゲーム開始
        </button>
      </div>
    </div>
  )
}

export default Preparation
