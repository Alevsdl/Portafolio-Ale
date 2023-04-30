import { GetServerSideProps } from "next";
import axios from "axios";

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
    id: string;
    Titulo: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async context => {
    const { id } = context.query;
    if (typeof id === 'string') {
        // const endpoint = `https://strapi-production-7ed9.up.railway.app/api/blogs/$`;
        const endpoint = `http://localhost:3000/blog/${id}`
        const response = await axios.get<StrapiResponse>(endpoint);
        return {
            props: {
                id: '2',
                Titulo: response.data.data.attributes.Titulo,
            },
        };
    }
    return {
        props: {
            id: '404',
            Titulo: "no hay mas",
        },
    };
};

export default function Blogpage({ id, Titulo }: Props) {

    return (
        <div>
            {id} - {Titulo}
        </div>
    )
}