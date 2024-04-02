import { QuizGame } from '@/features/frontend/buttonQuiz/components'
import { useState } from 'react'
const buttonQuiz = () => {
  const [changeView, setChangeView] = useState<string>('false')
  return (
    <div>
      {changeView === 'false' ? <button onClick={() => setChangeView('true')}>ゲーム開始</button> : <QuizGame />}
    </div>
  )
}
export default buttonQuiz
