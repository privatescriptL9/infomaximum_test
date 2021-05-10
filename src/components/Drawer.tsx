import React from 'react'
import { NavLink } from 'react-router-dom'
import { ILink } from '../interfaces'
import classes from '../scss/components/Drawer.module.scss'
import Backdrop from './Backdrop'
import diagram from '../images/diagram.png'
import user from '../images/user.png'
import proceset from '../images/proceset.png'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
}

const renderLinks = (links: Array<ILink>) => {
  return links.map((link, index) => {
    return (
      <li key={index}>
        <img src={link.icon} alt="icon" />
        <NavLink
          to={link.to}
          activeClassName={link.activeClassName}
          onClick={link.onClick}
        >
          {link.label}
        </NavLink>
      </li>
    )
  })
}

const Drawer: React.FC<DrawerProps> = props => {
  const cls = [classes.Drawer]

  if (!props.isOpen) {
    cls.push(classes.close)
  }

  const clickHandler = () => {
    props.onClose()
  }

  const links: Array<ILink> = [
    {
      to: '/profile',
      activeClassName: classes.active,
      onClick: clickHandler,
      label: 'Username',
      icon: user
    },
    {
      to: '/process',
      activeClassName: classes.active,
      onClick: clickHandler,
      label: 'Список процессов',
      icon: diagram
    }
  ]

  return (
    <>
      <nav className={cls.join(' ')}>
        <div className={classes.drawerMenu}>
          <div onClick={clickHandler}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0H4V4H0V0ZM6 6H10V10H6V6ZM10 0H6V4H10V0ZM12 0H16V4H12V0ZM4 6H0V10H4V6ZM12 6H16V10H12V6ZM4 12H0V16H4V12ZM6 12H10V16H6V12ZM16 12H12V16H16V12Z"
                fill="#FFFFFF"
              ></path>
            </svg>
            <img src={proceset} alt="proceset" />
          </div>
        </div>
        <ul>{renderLinks(links)}</ul>
      </nav>
      {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
    </>
  )
}

export default Drawer
