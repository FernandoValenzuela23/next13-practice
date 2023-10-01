import Link from "next/link";
import { LikeButton } from "./like-button";

// Rect server component function without states and effects
const getPosts = () => {
    return  fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json());
}

export default async function Posts() {    

    /* With react only, with Next 13: React Server Component => if not "use client"

    import { useState, useEffect } from "react"

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
            console.log(data)
        })
    }, [])
    
    */
    
    const posts = await getPosts();


    return (
        <section>
        {
            posts.map(post => (
                <article key={post.id}>
                    <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <LikeButton id={post.id} />
                    </Link>
                </article>
            ))
        }
        </section>
    )
}