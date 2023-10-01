'use client'
import { useState } from "react"

export function LikeButton({id}) {
    const [liked, setLiked] = useState(false)

    const onClickLike = (id) => {
        setLiked(!liked)
    }

    return (
        <button onClick={onClickLike}>{ liked ? '❤️': '🖤' }</button>
    )
}