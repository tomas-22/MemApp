import { NavLink, Routes, Route } from "react-router-dom";
import { Hot } from "./Hot";
import { Regular } from "./Regular";
import { AddMem } from "./AddMem";
import memSource from "../memy";
import { useState } from "react";

export const MemRouting = () => {
  const [mems, setMems] = useState(memSource);
  const setUpvote = (memId) => {
    setMems((currentMems) => {
      console.log(currentMems, memId);
      return currentMems.map((mem) => {
        if (memId === mem.id) {
          return {
            ...mem,
            upvotes: mem.upvotes + 1,
          };
        }
        return mem;
      });
    });
  };

  const setDownvote = (memId) => {
    setMems(
      mems.map((mem) => {
        console.log(memId);
        if (memId === mem.id) {
          return {
            ...mem,
            downvotes: mem.downvotes + 1,
          };
        }
        return mem;
      })
    );
  };

  return (
    <div>
      <div>
        <NavLink to="/hot">HOT</NavLink>
        <p>
          <NavLink to="/regular">REGULAR</NavLink>
        </p>
        <NavLink to="/addMem">Add your Mem</NavLink>
      </div>
      <Routes>
        <Route
          path="/hot"
          element={
            <Hot mems={mems} setUpvote={setUpvote} setDownvote={setDownvote} />
          }
        />
        <Route
          path="/regular"
          element={
            <Regular
              mems={mems}
              setUpvote={setUpvote}
              setDownvote={setDownvote}
            />
          }
        />
        <Route path="/addMem" element={<AddMem mems={mems}/>} />
      </Routes>
    </div>
  );
};
