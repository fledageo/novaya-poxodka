import styles from './Hero.module.scss'

export const Hero = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.layer}>
                <div className={`container ${styles.hero}`}>
                    <div className={styles.hero__content}>
                        <h1 className={styles.hero__title}>Ремонт обуви</h1>
                        <p className={styles.hero__subtitle}>Профессиональный ремонт обуви с гарантией качества.</p>
                        <button className={styles.hero__btn}>Посмотреть услуги</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
