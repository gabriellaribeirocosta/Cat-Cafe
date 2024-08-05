import { useContext, useEffect, useRef, useState } from 'react'

import { AuthContext } from '../../contexts/AuthContext'

import { authService } from '../../services/firebase/auth/authService'

import style from './style.module.css'

import Logo from '../Logo'
import SidebarLink from './SidebarLink'
import { IconLogout, IconHome, IconCoffee } from '../Icons'
import { ProductContext } from '../../contexts/ProductContext'

type UserInfoType = {
  email: string | null | undefined
  displayName: string | null | undefined
  initials: string | null
}

const Sidebar = () => {
  const { user, loading } = useContext(AuthContext)

  const [userInfo, setUserInfo] = useState<UserInfoType>({
    email: '',
    displayName: '',
    initials: '',
  })

  const sidebarRef = useRef<HTMLElement | null>(null)

  const handleCloseSidebar = () => {
    sidebarRef.current?.setAttribute('data-is-mobile-menu-active', 'false')
  }

  const handleLogout = async () => {
    const response = await authService.logout()

    if (!response) {
      setProducts([])
    }
  }

  useEffect(() => {
    if (!loading) {
      setUserInfo({
        email: user?.email,
        displayName: user?.displayName || user?.email?.split('@')[0],
        initials: user?.email ? user.email.slice(0, 2) : 'XY',
      })
    }
  }, [loading, user])

  return (
    <aside
      className={style.Sidebar}
      data-is-mobile-menu-active="false"
      ref={sidebarRef}
    >
      <div className={style.wrapper}>
        <div className={style.button_container}>
          <div className={style.icon_content}>
            <button
              type="button"
              title="Close menu"
              onClick={handleCloseSidebar}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                <path d="M8 23.75 6.25 22l7-7-7-7L8 6.25l7 7 7-7L23.75 8l-7 7 7 7L22 23.75l-7-7z" />
              </svg>
            </button>
          </div>
        </div>
        <div className={style.main_container}>
          <section className={style.logo_content}>
            <Logo />
          </section>
          <section className={style.profile_content}>
            <div className={style.Profile}>
              <div className={style.initials}>{userInfo.initials}</div>
              <div className={style.fullname}>{userInfo.displayName}</div>
            </div>
          </section>
          <section className={style.menu_links_content}>
            <nav className={style.menu_links_wrapper}>
              <ul className={style.MenuLinksList}>
                <li className={style.MenuLinksItem}>
                  <SidebarLink to="/" title="Home" icon={<IconHome />} />
                </li>
                <li className={style.MenuLinksItem}>
                  <SidebarLink
                    to="/products"
                    title="Products"
                    icon={<IconCoffee />}
                  />
                </li>
              </ul>
            </nav>
          </section>
        </div>
        <div className={style.footer_container}>
          <nav className={style.logout_wrapper}>
            <ul className={style.logout_links_list}>
              <li className={style.logout_links_item} onClick={handleLogout}>
                <div>Logout</div>
                <div className={style.icon_content}>
                  <IconLogout />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
