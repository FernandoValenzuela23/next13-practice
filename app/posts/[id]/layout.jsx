
import Link from "next/link"
import { Aladin } from 'next/font/google'

const getPost = (id) => {
    return  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
}

// Google Fonts.... If loading a variable font, you don't need to specify the font weight
const aladin = Aladin({ 
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap' 
})

export default async function PostLayout({children, params}) {
    const {id} = params

    const post = await getPost(id)

    return (
        <article>
            <h1 className={aladin.className}>{post.title}</h1>
            <p>{post.body}</p>
            {/* common way: receive as normal parameter <Comments id={post.id} /> */}
            <Link href={`/posts/${id}/comments`}>Show comments</Link>
            {children}
        </article>
    )
}