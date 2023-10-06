import { ReactNode } from 'react'

type Props = { children: ReactNode }

const AppProvider = ({ children }: Props) => {
  return <>{children}</>
}

export default AppProvider
