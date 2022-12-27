import { Photo } from "./Photo";
import klass from "./mem.module.css";

export const Mem = (props) => {
  return (
    <div className={klass.container}>
      <div className={klass.top}>
        <h1>{props.title}</h1>
        <Photo img={props.img} />
        <div>
          VOTE :<h2>{props.upvotes}</h2>
          <button onClick={() => props.setUpvote(props.id)}>👍</button>
          <h2>{props.downvotes}</h2>
          <button onClick={() => props.setDownvote(props.id)}>👎</button>
        </div>
      </div>
    </div>
  );
};
