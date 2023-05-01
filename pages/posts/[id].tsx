import { GetServerSideProps } from "next";
import axios from "axios";
import styles from '@/styles/blog.module.css'
import styles2 from '@/styles/Home.module.css'
import Image from 'next/image';
import pic from '@/images/222.png'
import { useGradient } from '@/hooks/useGradient';
import Menu from '@/components/Menu';
import { useState } from 'react';
import HeartIcon from '@/components/HeartIcon';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface Post {
    id: number;
    attributes: {
        Titulo: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

interface StrapiResponse {
    data: Post;
}
interface Props {
    posts: Post;
}

export const getServerSideProps: GetServerSideProps<Props> = async context => {
    const { id } = context.query;
    const endpoint = `${process.env.STRAPIURL}/blogs/${id}`;
    const response = await axios.get<StrapiResponse>(endpoint, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPITOKEN}`
        }
    });
    const posts = response.data.data;
    return {
        props: {
            posts
        },
    };
};

export default function Blogpage({ posts }: Props) {
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
                            <div className={styles.header}>
                                <div className={styles.titulo}><p>/BLOG</p></div>
                                <div className={styles.c3}>
                                    <Image src={pic} alt="selfie" className={styles.foto} height={865} width={865} />
                                </div>
                            </div>
                            <div className={styles.individual} >
                                <div>
                                    <h1>{posts.id} - {posts.attributes.Titulo}</h1>
                                    <p>
                                        {posts.attributes.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}