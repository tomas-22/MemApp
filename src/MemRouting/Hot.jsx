import memy from "../memy"
import { Mem } from "../components/Mem"
import { useState } from "react"
import { Vote } from "../components/Vote"

  

export const Hot = (props) => {
function createMem(memItem) {
    return <Mem key={memItem.id} id={memItem.id} title={memItem.title} upvotes={memItem.upvotes} downvotes={memItem.downvotes} img={memItem.img} setUpvote={props.setUpvote} setDownvote={props.setDownvote}/>
  } 

  
    return <div>
        Hot:

      {props.mems.filter(mem => (mem.upvotes - mem.downvotes) > 5 ).map(createMem)}
    </div>
}