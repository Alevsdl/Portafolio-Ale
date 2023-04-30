import styles from '@/styles/prueba.module.css'
export default function prueba() {
    return (
        <div className={styles.container}>
            <div className={styles.menu_overlay}>
                <i>menu</i>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className={styles.landing_page}>
                <div className={styles.menu}>jeje
                </div>
                <div className={styles.side_text}>
                    <div >Web Developer</div>
                    <div >Web Designer</div>
                </div>
                <div className={styles.main}>jejej
                </div>
            </div>
        </div>
    );
}