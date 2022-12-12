import { Photo } from "./Photo"
import { Vote } from "./Vote"

export const Mem = (props) => {
    return <div>
        <h1>{props.title}</h1>
        <h2>{props.upvotes}</h2>
        <p>{props.downvotes}</p>
        <p><Photo img={props.img}/></p>
        <p><Vote /></p>
        
    </div>
}