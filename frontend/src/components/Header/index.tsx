import React from 'react'
import Input from '../Input/index.tsx'
import style from './style.module.css'
import Logo from '../Logo/index.tsx'
import arrowIcon from '../../../public/arrowIcon.png'
import { IconSearch } from '../Icons/index.tsx'

type HeaderProps = {
  toggleSidebar: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <>
      <header className={style.Header}>
        <div className={style.logo_content}>
          <Logo />
        </div>
        <button className={style.hamburger} onClick={toggleSidebar}>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
        </button>
      </header>
      <nav className={style.Navbar}>
        <div className={style.icon_content}>
          <img src={arrowIcon} alt="Arrow Icon" />
        </div>
        <div className={style.input_content}>
          <Input
            placeholder={'Search...'}
            onChange={() => {}}
            value={''}
            className={style.InputSearch}
            icon={<IconSearch />}
          />
        </div>
      </nav>
    </>
  )
}

export default Header
