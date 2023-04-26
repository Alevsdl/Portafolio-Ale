import styles from '@/styles/Info.module.css'
import Image from 'next/image'
import pic from '@/images/pic.png'
import { useGradient } from '@/hooks/useGradient';
const Info = () => {
    const [mouseXpercentage, mouseYpercentage] = useGradient();

    const backgroundStyle = {
        background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #F57292, #A5AAD3)`,
    };
    return (
        <div className={styles.container}>
            <p>/info</p>
            <div className={styles.columnas}>
                <div className={styles.fondoPerfil} style={backgroundStyle}>
                    <Image src={pic} alt="selfie" className={styles.foto} />
                </div>
                <div>
                    <h1>Alejandra Santos</h1>
                    <p>Currently I’m a software engineer student in Guatemala.</p>
                    <p>I believe in the creativity involved in designing and programming. I enjoy experimenting and relish the challenges that come with being a developer.</p>
                </div>
            </div>
        </div>
    )
}
export default Info