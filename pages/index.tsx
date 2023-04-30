import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import { useGradient } from '@/hooks/useGradient';
import Menu from '@/components/Menu';
import BlurredText from '@/components/BlurredText';
import HeartIcon from '@/components/HeartIcon';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [showMenu, setShowMenu] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [showText, setShowText] = useState(true);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setShowText(!showText);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLine(true)
    }, 1000)
  }, []);

  const [mouseXpercentage, mouseYpercentage] = useGradient();

  const backgroundStyle = {
    background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #EBDEFC, #FCFBF5)`,
  };

  return (
    <div className={styles.fullheight}>
      <div className={styles.marco}>
        <div className={styles.radialGradient} style={backgroundStyle}> </div>
        <div className={styles.container}>
          <div className={styles.boxi} onClick={handleMenuClick}> <HeartIcon /></div>
          {showMenu && (
            <Menu />
          )}
          <div className={styles.content} style={{ display: showText ? "block" : "none" }}>
            <div className={styles.box}>
              <h1>HI IM ALE</h1>
              <div className={styles.line} style={{ width: showLine ? "100%" : "0px" }} />
            </div>
            {/* <div className={styles.box}><p>Developer porfolio</p></div> */}
          </div>
        </div>
      </div>

    </div>

  )
}
