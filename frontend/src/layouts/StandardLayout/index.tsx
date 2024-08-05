import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import MainContent from '../../components/MainContent'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'

import style from './style.module.css'

const StandardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={style.StandardLayout}>
        <Header toggleSidebar={toggleSidebar} />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </>
  )
}

export default StandardLayout
