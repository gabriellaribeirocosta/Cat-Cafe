import { ReactNode } from 'react'

import { NavLink } from 'react-router-dom'

import style from './style.module.css'

interface SidebarLinkProps {
  to: string
  title: string
  icon: ReactNode
}

const SidebarLink = (props: SidebarLinkProps) => {
  const { to, title, icon } = props

  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return `${style.SidebarLink} ${isActive ? style.active : ''}`
      }}
    >
      <div className={style.icon_content}>{icon}</div>
      <div>{title}</div>
    </NavLink>
  )
}

export default SidebarLink
