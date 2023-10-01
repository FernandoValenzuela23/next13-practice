import Image from "next/image";

const getComments = async (id) => {
    // Testing loading.jsx
    await new Promise(resolve => setTimeout(resolve, 5000))

    return  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res => res.json());
}

export default async function Comments({params}) {    
    const {id} = params
    const posts = await getComments(id);


    return (
        <ul>
        {
            posts.map(comment => (
                <li key={comment.id}>
                    <Image 
                        src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${comment.email.split('@')[0]}`} 
                        alt={comment.name} 
                        width={64}
                        height={64}
                        priority/>
                    <small>{comment.body}</small>
                </li>
            ))
        }
        </ul>
    )
}