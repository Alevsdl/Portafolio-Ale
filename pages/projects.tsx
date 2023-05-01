import styles from '@/styles/pro.module.css'
import styles2 from '@/styles/Home.module.css'
import { useGradient } from '@/hooks/useGradient';
import picp1 from '@/images/pp1.png'
import picp2 from '@/images/pp2.png'
import Menu from '@/components/Menu';
import { useState } from 'react';
import HeartIcon from '@/components/HeartIcon';
import Card from '@/components/proyectos/p1';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function Projects() {
    const [showMenu, setShowMenu] = useState(false);
    const [showText, setShowText] = useState(true);
    const [showPage2, setShowPage2] = useState(false);
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
        setShowText(!showText);
    };
    const handlePage2Click = () => {
        setShowMenu(!showPage2);
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
                        <div className={styles.items} style={{ display: showText ? "block" : "none" }}>
                            <Link href="/projects2"><FaArrowRight /></Link>
                        </div></div>
                    {showMenu && (
                        <Menu />
                    )}



                    <div className={styles.container} style={{ display: showText ? "block" : "none" }}>
                        <div className={styles.direction}><p>/projects</p></div>
                        <div className={styles.columnas}>
                            <div className={styles.c1}>
                                <Card
                                    title="Assist"
                                    description="Pagina web para llevar asistencias academicas."
                                    rol="Rol: desarrollo frontend"
                                    proceso=" Mi
                                    trabajo en el proyecto fue desarrollar y diseñar toda la parte
                                    visual de la página web, asegurándome de que cada vista
                                    cumpliera con los requisitos de cohesión, simplicidad y uso
                                    responsivo en todos los dispositivos"
                                    img={picp1}
                                    link="https://www.ejemplo.com"
                                />

                            </div>
                            <div className={styles.c2}>
                                <Card
                                    title="HACKFEST 2022"
                                    description="página web informativa sobre uno de los objetivos de desarrollo
                                    sostenible: Producción y consumo responsable. "
                                    rol="Rol: desarrollo frontend"
                                    proceso="Al ser una competencia permitió tener cierta libertad en los
                                    aspectos técnicos y creativos del diseño. Esto se convirtió en un
                                    proceso de desarrollo y diseño muy interesante, donde se
                                    pudieron aplicar tecnologías y metodologías que no había
                                    utilizado previamente."
                                    img={picp2}
                                    link="https://www.ejemplo.com"
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div >
    )

}