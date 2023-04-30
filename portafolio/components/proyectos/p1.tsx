import styles from '@/styles/card.module.css';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { FaArrowRight } from 'react-icons/fa';


type Props = {
    title: string;
    description: string;
    rol: string;
    proceso: string;
    link: string;
    img: string | StaticImageData;
};

const Card = ({ title, description, img, link, rol, proceso }: Props) => {
    return (
        <div className={styles.card}>
            <Image src={img} alt="selfie" className={styles.foto} height={865} width={865} />
            <div className={styles.card_content}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{rol}</p>
                <p>{proceso}</p>
                <a href={link} className={styles.button}>
                    <span>Repositorio: </span>
                    <span className={styles.material}><FaArrowRight /></span>
                </a>
            </div>
        </div>
    );
};

export default Card;
