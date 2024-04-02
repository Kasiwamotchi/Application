import { useEffect, useState } from 'react'

const QuizGame = () => {
  const [timeChecker, setTimeChecker] = useState<boolean>(false)
  const [remainingTime, setRemainingTime] = useState<number>(10)
  const [dayOfWeek, setDayOfWeek] = useState<string>()
  const [answer, setAnswer] = useState<string>()
  const [playersAnswer, setPlayersAnswer] = useState<string>()

  const weekday = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
  const today = new Date()
  const year = today.getFullYear()
  const futureDay = new Date()
  const futureYear = futureDay.setFullYear(today.getFullYear() + 100)
  const afterDay = futureDay.getDay()

  useEffect(() => {
    const timer = setTimeout(() => setTimeChecker(true), 10000)
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 1)
    }, 1000)
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  const check = (answer: string | undefined) => {
    setPlayersAnswer(answer)
    setDayOfWeek(weekday[afterDay])
  }

  return (
    <div>
      {playersAnswer === weekday[afterDay] ? (
        <div>正解!100年後の今日は{weekday[afterDay]}です！</div>
      ) : playersAnswer !== dayOfWeek ? (
        <div>不正解!100年後の今日は{weekday[afterDay]}です！</div>
      ) : timeChecker ? (
        <div>時間切れ!100年後の今日は{weekday[afterDay]}です！</div>
      ) : (
        <div>
          <p>100年後の今日は何曜日？</p>
          <p>残り時間: {remainingTime}秒</p>
          <input className='border border-solid border-black' onChange={(e) => setAnswer(e.target.value)} />
          <button onClick={() => check(answer)} disabled={!answer}>
            回答
          </button>
        </div>
      )}
    </div>
  )
}

export default QuizGame
