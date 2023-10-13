import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { ReactNode } from 'react'

type Props = { children: ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex min-h-0 flex-auto flex-grow flex-col overflow-y-auto bg-base'>
        <Theme>{children}</Theme>
      </main>
    </div>
  )
}

export default Layout
