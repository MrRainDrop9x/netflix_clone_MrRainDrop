import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
function Navbar() {
  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        handleShow(true)
      } else handleShow(false)
    })
  }, [])

  return (
    <div
      className={styles.navbar}
      style={
        show
          ? { backgroundColor: 'rgba(17, 17, 17,0.5)' }
          : { backgroundColor: 'transparent' }
      }
    >
      <img
        className={styles.navLogo}
        src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
        alt='NETFLIX LOGO'
      />
    </div>
  )
}

export default Navbar
