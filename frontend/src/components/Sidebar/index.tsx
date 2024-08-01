import { useRef } from 'react'

import style from './style.module.css'

import Logo from '../Logo'

const Sidebar = () => {
  const sidebarRef = useRef<HTMLElement | null>(null)

  const handleCloseSidebar = () => {
    sidebarRef.current?.setAttribute('data-is-mobile-menu-active', 'false')
  }

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
            <Logo text="CRUD OPERATIONS" />
          </section>
          <section className={style.profile_content}>
            <div className={style.Profile}>
              <div className={style.initials}>BB</div>
              <div className={style.fullname}>Bilbo Baggins</div>
            </div>
          </section>
          <section className={style.menu_links_content}>
            <nav className={style.menu_links_wrapper}>
              <ul className={style.MenuLinksList}>
                <li className={style.MenuLinksItem}>
                  <a href="#" className={style.MenuLinksButton}>
                    <div className={style.icon_content}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="17"
                      >
                        <g clipPath="url(#a)">
                          <path d="M18.917 7.301 10.246.265a1.18 1.18 0 0 0-1.49 0L.083 7.301a.223.223 0 0 0-.033.315l.468.582a.225.225 0 0 0 .317.033L2.11 7.195v9.273A.533.533 0 0 0 2.64 17h13.722a.526.526 0 0 0 .528-.53v-9.27l1.28 1.038a.224.224 0 0 0 .317-.033l.468-.58a.24.24 0 0 0-.037-.323m-11 8.636v-5.313h3.167v5.313zm7.917 0h-3.695v-5.844a.533.533 0 0 0-.528-.531H7.39a.526.526 0 0 0-.528.531v5.844H3.167V6.338l6.192-5.026a.22.22 0 0 1 .277 0l6.198 5.03z" />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path d="M0 0h19v17H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div>Home</div>
                  </a>
                </li>
                <li className={style.MenuLinksItem}>
                  <a
                    href="#"
                    className={`${style.MenuLinksButton} ${style.active}`}
                  >
                    <div className={style.icon_content}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="16"
                      >
                        <path d="m19.13 4.812-8.281-2.677a2.74 2.74 0 0 0-1.697 0L.87 4.812C.342 4.983 0 5.45 0 6s.342 1.017.87 1.188l.928.3q-.154.29-.229.619A.99.99 0 0 0 1 9c0 .398.237.735.573.896l-.564 3.496c-.05.312.122.608.354.608h1.274c.232 0 .405-.296.354-.608l-.564-3.496A.99.99 0 0 0 3 9a.98.98 0 0 0-.42-.793c.047-.145.12-.277.206-.4l1.67.54L4 12c0 1.105 2.686 2 6 2s6-.895 6-2l-.457-3.653 3.587-1.16c.528-.17.87-.636.87-1.187 0-.55-.342-1.017-.87-1.188m-4.146 7.121C14.648 12.287 12.939 13 10 13s-4.647-.713-4.984-1.067l.41-3.273 3.726 1.205c.08.026.803.288 1.697 0l3.726-1.205zm3.837-5.696L10.54 8.914a1.74 1.74 0 0 1-1.08 0L3.97 7.14l6.122-1.148a.5.5 0 1 0-.184-.982L3.54 6.203a2.5 2.5 0 0 0-1.034.463l-1.328-.43a.246.246 0 0 1 0-.473L9.46 3.086a1.75 1.75 0 0 1 1.08 0l8.28 2.677c.232.075.248.394.001.474" />
                      </svg>
                    </div>
                    <div>Students</div>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
        <div className={style.footer_container}>
          <nav className={style.logout_wrapper}>
            <ul className={style.logout_links_list}>
              <li className={style.logout_links_item}>
                <div>Logout</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill=""
                  >
                    <path
                      fill=""
                      d="M5.313 7.208c0-.292.239-.53.53-.53h4.782V3.558c0-.235.286-.355.452-.189l4.701 4.751c.21.21.21.545 0 .754l-4.701 4.752a.265.265 0 0 1-.452-.19V10.32H5.844a.533.533 0 0 1-.532-.532zm-1.063 0v2.58c0 .88.714 1.594 1.594 1.594h3.718v2.055c0 1.179 1.428 1.777 2.265.94l4.705-4.748a1.595 1.595 0 0 0 0-2.258L11.827 2.62c-.833-.834-2.264-.243-2.264.94v2.055h-3.72c-.88 0-1.593.717-1.593 1.593M0 3.718v9.563c0 .88.714 1.594 1.594 1.594h4.383a.4.4 0 0 0 .398-.398v-.266a.4.4 0 0 0-.398-.399H1.594a.533.533 0 0 1-.532-.53V3.718c0-.292.24-.531.532-.531h4.383a.4.4 0 0 0 .398-.399v-.266a.4.4 0 0 0-.398-.398H1.594C.714 2.125 0 2.839 0 3.719"
                    />
                  </svg>
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
