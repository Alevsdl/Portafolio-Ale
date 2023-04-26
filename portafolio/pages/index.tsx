import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Info from '@/components/informacion/Info';
import Projects from '@/components/proyectos/Projects';
import { useGradient } from '@/hooks/useGradient';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showProject, setShowProject] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(true);
    setShowInfo(false);
    setShowHome(false);
    setShowProject(false);

  };
  const handleHomeClick = () => {
    setShowInfo(false);
    setShowMenu(false);
    setShowHome(true);
    setShowProject(false);
  };
  const handleInfoClick = () => {
    setShowInfo(true);
    setShowMenu(false);
    setShowProject(false);

  };

  const handleProjectClick = () => {
    setShowInfo(false);
    setShowMenu(false);
    setShowProject(true);
  };

  const [mouseXpercentage, mouseYpercentage] = useGradient();

  const backgroundStyle = {
    background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #3498db, #FCFBF5)`,
  };

  return (
    <div className={styles.fullheight}>
      <div className={styles.marco}>
        <div className={styles.radialGradient} style={backgroundStyle}> </div>
        <div className={styles.container}>

          <div className={styles.boxi}><FaHeart className={styles.fa} onClick={handleMenuClick} /></div>
          <div className={styles.columna1}>
            {showMenu && (
              <div className={styles.menu} style={{ display: showMenu ? "block" : "none" }}>
                <p onClick={handleHomeClick} className={styles.items}>HOME</p>
                <p onClick={handleInfoClick} className={styles.items} >INFO.</p>
                <p onClick={handleProjectClick} className={styles.items} >PROJECTS</p>
                <p><Link href="/blog" className={styles.items}>BLOG</Link></p>
                <p><Link href="/anexo" className={styles.items}>ANEXO</Link></p>
              </div>
            )}
            {showInfo && (
              <div className={styles.columna1} style={{ display: showInfo ? "block" : "none" }}>
                <Info />
              </div>
            )}
            {showHome && (
              <div className={styles.content} style={{ display: showHome ? "block" : "none" }}>
                <div className={styles.columna1}><h1>HI, IM ALE</h1></div>
                {/* <div className={styles.box}><p>Developer porfolio</p></div> */}
              </div>
            )}
            {showProject && (
              <div className={styles.columna1} style={{ display: showProject ? "block" : "none" }}>
                <Projects />
              </div>
            )}

          </div>
        </div>
      </div>

    </div>

  )
}
