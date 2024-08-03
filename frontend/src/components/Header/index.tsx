import Input from '../Input/index.tsx'

import style from './style.module.css'

import Logo from '../Logo/index.tsx'

import arrowIcon from '../../../public/arrowIcon.png'
import hamburguerIcon from '../../../public/hamburguerIcon.png'

const Header = () => {
  return (
    <>
      <header className={style.Header}>
        <div className={style.logo_content}>
          <Logo />
        </div>
        <img src={hamburguerIcon} alt="" />
      </header>
      <nav className={style.Navbar}>
        <div className={style.icon_content}>
          <img src={arrowIcon} alt="Arrow Icon" />
        </div>
        <div className={style.input_content}>
          <Input placeholder={'Search...'} onChange={() => {}} value={''} />
        </div>
      </nav>
    </>
  )
}

export default Header
