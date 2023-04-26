import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [showText, setShowText] = useState(true);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setShowText(!showText);
  };

  const [mouseXpercentage, setMouseXpercentage] = useState(0);
  const [mouseYpercentage, setMouseYpercentage] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const newMouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
      const newMouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

      setMouseXpercentage(newMouseXpercentage);
      setMouseYpercentage(newMouseYpercentage);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const backgroundStyle = {
    background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%,#3498db, #9b59b6)`,
  };
  return (
    <div className={styles.fullheight}>
      <div className={styles.marco}>
        <div className={styles.radialGradient} style={backgroundStyle}> </div>
        <div className={styles.container}>

          <div className={styles.boxi}><FaHeart className={styles.fa} onClick={handleMenuClick} /></div>
          {showMenu && (
            <div className={styles.menu}>
              <div className={styles.box}>
                <p>HOME</p>
                <p>INFO.</p>
                <p>PROJECTS</p>
                <p>BLOG</p>
                <p>ANEXO</p>
              </div>
            </div>
          )}
          <div className={styles.content} style={{ display: showText ? "block" : "none" }}>
            <div className={styles.box}><h1>HI, IM ALE</h1></div>
            {/* <div className={styles.box}><p>Developer porfolio</p></div> */}
          </div>
        </div>
      </div>

    </div>

  )
}
