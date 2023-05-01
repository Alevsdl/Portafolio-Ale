import styles from '@/styles/Home.module.css'
import Link from 'next/link';
const Menu = () => {
    return (
        <div className={styles.columna1}>

            <div className={styles.menu}>
                <p><Link href="/" className={styles.items}>HOME</Link></p>
                <p><Link href="/info" className={styles.items}>INFO</Link></p>
                <p><Link href="/projects" className={styles.items}>PROJECTS</Link></p>
                <p><Link href="/blog" className={styles.items}>BLOG</Link></p>
                <p><Link href="/skills" className={styles.items}>SKILLS</Link></p>
            </div>

        </div>
    )
}
export default Menu