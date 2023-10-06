import { ReactNode } from 'react'

type Props = { children: ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex min-h-0 flex-auto flex-grow flex-col overflow-y-auto bg-base'>{children}</main>
    </div>
  )
}

export default Layout
