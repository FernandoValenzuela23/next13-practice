/*import Comments from "./comments/page"

const getPost = (id) => {
    return  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
}

export default async function Post({params}) {
    const {id} = params

    const post = await getPost(id)

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Comments id={post.id} />
        </article>
    )
}*/

export default function Post() {
    return null
}