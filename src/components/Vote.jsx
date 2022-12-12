import { useState } from "react"

export const Vote = () => {
const [upvote,setUpvote] = useState(0);
const [downvote, setDownvote] = useState(0);

    return <div>
        GŁOSUJ :
        <p>Liczba głosów na tak {upvote}
        <button onClick={ () => setUpvote(upvote + 1)}>👍</button></p>
        
        Liczba głosów na nie {downvote}
        <button onClick={ () => setDownvote(downvote + 1) }>👎</button>

    </div>
}