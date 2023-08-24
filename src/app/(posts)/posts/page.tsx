import {PostType} from "@/types/PostType";

export const metadata : Metadata = {
    title: "All posts",
}

export default async function PostsPage() {
    const postsRes = await fetch("http://localhost:3001/posts", {
        cache : "no-cache",
        });
    const posts= (await postsRes.json()) as [PostType];

    // const commentRes = await fetch("http://localhost:3001/posts");
    // const comments= (await postsRes.json()) as [PostType];
    
    
    return (
        <main>
            <h1 className="text-2xl">All Posts</h1>
            <ul>{posts.map((post)=>{
                return (
                <li key={post.id}>
                    <a href="{/post/${post.id}}">
                    <span>{post.title}</span>
                    </a>
                </li>
                );
            })}
            </ul>
        </main>
    );
}

