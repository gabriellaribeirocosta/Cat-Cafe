import { Outlet } from 'react-router-dom'
import MainContent from '../../components/MainContent'

const StandardLayout = () => {
  return (
    <>
      <aside>Sidebar</aside>
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  )
}

export default StandardLayout
