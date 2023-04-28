import styles from '@/styles/Info.module.css'
import styles2 from '@/styles/Home.module.css'
import Image from 'next/image'
import pic from '@/images/pic.png'
import { useGradient } from '@/hooks/useGradient';
import Menu from '@/components/Menu';
import { useState } from 'react';
import { FaGithub, FaAt, FaLinkedin } from 'react-icons/fa';
import HeartIcon from '@/components/HeartIcon';
export default function Info() {
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
                            <div className={styles.primera}>
                                <div><p>/info</p></div>
                                <div className={styles.fondo}>
                                    <Image src={pic} alt="selfie" className={styles.foto} height={300} />
                                    {/* <div className={styles.fondoPerfil}></div> */}
                                    <div className={styles.socials}>
                                        <FaAt className={styles.icon} />
                                        <FaGithub className={styles.icon} />
                                        <FaLinkedin className={styles.icon} />

                                    </div>
                                </div>

                            </div>
                            <div>
                                <h1>Alejandra Santos</h1>
                                <p>Currently I’m a software engineer student in Guatemala.</p>
                                <p>I believe in the creativity involved in designing and programming. I enjoy experimenting and relish the challenges that come with being a developer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}