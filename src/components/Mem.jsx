import { Photo } from "./Photo";

export const Mem = (props) => {
  return (
    <div>
      <h1>
        {props.title} {props.id}
      </h1>
      <h2>{props.upvotes}</h2>
      <p>{props.downvotes}</p>
      <p>
        <Photo img={props.img} />
      </p>
      <div>
        GŁOSUJ :
        <p>
          Liczba głosów na tak {props.upvotes}
          <button onClick={() => props.setUpvote(props.id)}>👍</button>
        </p>
        Liczba głosów na nie {props.downvotes}
        <button onClick={() => props.setDownvote(props.id)}>👎</button>
      </div>
    </div>
  );
};
