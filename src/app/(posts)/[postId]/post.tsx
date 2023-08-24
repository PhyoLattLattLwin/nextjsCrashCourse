import { PostType } from "@/types/PostType";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: post.title;
}

interface PostPageProps {
    params : {
        postId : string;

    };
}

export default async function PostsPage({params}:PostPageProps) {
const postRes = await fetch("http://localhost:3001/posts/${params.postId}");
const post = (await postRes.json()) as PostType; 
    return (
        <main>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
        </main>
    );
}