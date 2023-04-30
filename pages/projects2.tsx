import styles from '@/styles/pro.module.css'
import styles2 from '@/styles/Home.module.css'
import { useGradient } from '@/hooks/useGradient';
import picp3 from '@/images/pp3.jpg'
import picp4 from '@/images/pp4.png'
import Menu from '@/components/Menu';
import { useState } from 'react';
import HeartIcon from '@/components/HeartIcon';
import Card from '@/components/proyectos/p1';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function Projects2() {
    const [showMenu, setShowMenu] = useState(false);
    const [showText, setShowText] = useState(true);
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
        setShowText(!showText);
    };
    const [mouseXpercentage, mouseYpercentage] = useGradient();

    const backgroundStyle = {
        background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #D2E1C0, #FCFBF5)`,
    };
    return (
        <div className={styles.fullheight}>
            <div className={styles.marco}>
                <div className={styles2.radialGradient} style={backgroundStyle}> </div>
                <div className={styles.con}>
                    <div className={styles2.boxi} onClick={handleMenuClick}> <HeartIcon />
                        <div className={styles.items}>
                            <Link href="/projects"><FaArrowLeft /></Link>
                        </div></div>
                    {showMenu && (
                        <Menu />
                    )}



                    <div className={styles.container} style={{ display: showText ? "block" : "none" }}>
                        <div className={styles.direction}><p>/projects</p></div>
                        <div className={styles.columnas}>
                            <div className={styles.c1}>
                                <Card
                                    title="Savings Vault"
                                    description="Pagina web para llevar presupuestos"
                                    rol="Rol: desarrollo frontend"
                                    proceso=" Mi
                                    trabajo en el proyecto fue desarrollar y diseñar toda la parte
                                    visual de la página web, asegurándome de que cada vista
                                    cumpliera con los requisitos de cohesión, simplicidad y uso
                                    responsivo en todos los dispositivos"
                                    img={picp3}
                                    link="https://github.com/Alevsdl/alcancia-web"
                                />

                            </div>
                            <div className={styles.c2}>
                                <Card
                                    title="Flights Data"
                                    description="Aplicación para analizar datos de vuelos de aereolíneas "
                                    rol="Rol: desarrollo backend frontend"
                                    proceso="Aplicación en pyhton de analísis de datos de vuelos en tiempo real"
                                    img={picp4}
                                    link="https://github.com/Alevsdl/FlightsData"
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )

}