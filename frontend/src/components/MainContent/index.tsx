import React from 'react'

import style from './style.module.css'

interface MainContentProps {
  children: React.ReactNode
}

const MainContent = ({ children }: MainContentProps) => {
  return <main className={style.MainContent}>{children}</main>
}

export default MainContent
