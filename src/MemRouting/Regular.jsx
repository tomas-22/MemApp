import { Mem } from "../components/Mem";

export const Regular = (props) => {
  function createMem(memItem) {
    return (
      <Mem
        key={memItem.id}
        id={memItem.id}
        title={memItem.title}
        upvotes={memItem.upvotes}
        downvotes={memItem.downvotes}
        img={memItem.img}
        setUpvote={props.setUpvote}
        setDownvote={props.setDownvote}
      />
    );
  }

  return (
    <div>
      Regular:
      {props.mems
        .filter((mem) => mem.upvotes - mem.downvotes <= 5)
        .map(createMem)}
    </div>
  );
};
