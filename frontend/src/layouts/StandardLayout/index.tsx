import { Outlet } from 'react-router-dom'

import MainContent from '../../components/MainContent'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'

import style from './style.module.css'

const StandardLayout = () => {
  return (
    <>
      <Sidebar />
      <div className={style.StandardLayout}>
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </>
  )
}

export default StandardLayout
