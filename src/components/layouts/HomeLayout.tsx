import '../../scss/components/layouts/HomeLayout.scss'
import Drawer from '../Drawer'
import React, { useState } from 'react'

const HomeLayout: React.FC = props => {
  const [menu, setMenu] = useState<boolean>(false)

  const openMenuHandler = () => {
    setMenu(true)
  }

  const menuCloseHandler = () => {
    setMenu(false)
  }

  return (
    <div className="HomeLayout">
      <div className="header">
        <div onClick={openMenuHandler}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0H4V4H0V0ZM6 6H10V10H6V6ZM10 0H6V4H10V0ZM12 0H16V4H12V0ZM4 6H0V10H4V6ZM12 6H16V10H12V6ZM4 12H0V16H4V12ZM6 12H10V16H6V12ZM16 12H12V16H16V12Z"
              fill="#6879BB"
            ></path>
          </svg>
          Меню
        </div>
      </div>

      <Drawer isOpen={menu} onClose={menuCloseHandler} />

      <main>{props.children}</main>
    </div>
  )
}

export default HomeLayout
