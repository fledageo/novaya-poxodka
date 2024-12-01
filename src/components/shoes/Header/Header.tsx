import { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import { IoMenu } from "react-icons/io5";
import { Menu } from '../Menu/Menu';
export const Header = () => {

  const [isSmall, setIsSmall] = useState<boolean>(window.innerWidth < 750)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);


  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 750)
      
      if(window.innerWidth > 750){
        setIsMenuOpen(false)
      }

    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize',handleResize)
  }, [])

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <header className={styles.wrapper}>
      <div className={`container ${styles.header}`}>
        <div className={styles.header__logo}>
          <a href="#">
            <img src="/public/images/logo.png" alt="logo" className={styles.logo__img} />
          </a>
        </div>
        {
          !isSmall ?
            <nav className={styles.header__menu}>
              <ul className={styles.menu__list}>
                <li className={styles.list__item}>
                  <a href="">Услуги</a>
                </li>
                <li className={styles.list__item}>
                  <a href="">Цены</a>
                </li>
                <li className={styles.list__item}>
                  <a href="">Наши работы</a>
                </li>
                <li className={styles.list__item}>
                  <a href="">Контакты</a>
                </li>
              </ul>
            </nav> 
            :
            <div className="">
              <IoMenu color='#d7ccc8' size={40} onClick={handleOpenMenu}/>
              <Menu isOpen={isMenuOpen} handleClose={() => setIsMenuOpen(false)}/>
            </div>

            
        }
      </div>
    </header>
  )
}
