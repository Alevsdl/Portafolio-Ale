import styles from '@/styles/skills.module.css'
import styles2 from '@/styles/Home.module.css'
import Image from 'next/image';
import pic from '@/images/222.png'
import { useGradient } from '@/hooks/useGradient';
import Menu from '@/components/Menu';
import { useState } from 'react';
import HeartIcon from '@/components/HeartIcon';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Skills() {
    const [showMenu, setShowMenu] = useState(false);
    const [showText, setShowText] = useState(true);
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
        setShowText(!showText);
    };
    const [mouseXpercentage, mouseYpercentage] = useGradient();

    const backgroundStyle = {
        background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #d8bfd8, #FCFBF5)`,
    };
    return (
        <div className={styles.fullheight}>
            <div className={styles.marco}>
                <div className={styles2.radialGradient} style={backgroundStyle}> </div>
                <div className={styles.con}>
                    <div className={styles2.boxi} onClick={handleMenuClick}> <HeartIcon /></div>
                    {showMenu && (
                        <Menu />
                    )}



                    <div className={styles.container} style={{ display: showText ? "block" : "none" }}>
                        <div className={styles.columnas}>
                            <div className={styles.lines}>
                                <div className={styles.line}></div>
                                <div className={styles.line}></div>
                                <div className={styles.line}></div>
                            </div>
                            <div className={styles.header}>
                                <h1>Studies</h1>
                                <p>Universidad Rafael Landívar - Ingeniería en informática y sistemas</p>
                                <h1>Currently learning:</h1>
                                <p>Next js</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}