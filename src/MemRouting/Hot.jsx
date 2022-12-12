import memy from "../memy"
import { Mem } from "../components/Mem"
import { useState } from "react"
import { Vote } from "../components/Vote"

  

export const Hot = () => {
function createMem(memItem) {
    return <Mem key={memItem.id} title={memItem.title} upvotes={memItem.upvotes} img={memItem.img} />
  } 

  const memList = () => {
    return memy.map(createMem)
  }


    const [displayedMems, setDisplayedMems] = useState(memList);

    const hideMem = (upvote) => {
      const upDatedMem = displayedMems.filter(upvote => upvote < 5 );
      return setDisplayedMems(upDatedMem);
    }
    return <div>
        Hot:

        {displayedMems.map((mem) => {
          return <Mem ukryj={hideMem}/>
        })}
    
    </div>
}