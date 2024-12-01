import styles from './ShoesPage.module.scss'
import { Header } from '../../components/shoes/Header/Header'
import { Hero } from '../../components/shoes/Sections/Hero/Hero'

export const ShoesPage = () => {
  return (
    <div className={styles.wrapper}>
        <Header/>
        <Hero/>
    </div>
  )
}
