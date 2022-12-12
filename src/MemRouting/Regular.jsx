import memy from "../memy"
import { Mem } from "../components/Mem"




export const Regular = () => {

  // function createMem(memItem) {
  //   return <Mem key={memItem.id} title={memItem.title} img={memItem.img} upvote={memItem.upvote}/>
  // } 

    return <div>
        Regular: 
        {memy.map((memItem) => {
          return <Mem key={memItem.id} title={memItem.title} img={memItem.img} upvote={memItem.upvote}/>
        })}
    </div>
}