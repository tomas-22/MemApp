import { NavLink, Routes, Route } from "react-router-dom";
import { Hot } from "./Hot";
import { Regular } from "./Regular";
import { AddMem } from "./AddMem";
import memSource from "../memy";
import { useState } from "react";
import "../index.css";
import styles from "./index.module.css";

export const MemRouting = () => {
  const [mems, setMems] = useState(memSource);

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  const setUpvote = (memId) => {
    setMems((currentMems) => {
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
      <div className={styles.NabBar}>
        <NavLink to="/hot" className={styles.NavLink} style={navLinkStyles}>
          HOT
        </NavLink>
        <NavLink to="/regular" className={styles.NavLink} style={navLinkStyles}>
          REGULAR
        </NavLink>

        <NavLink to="/addMem" className={styles.NavLink} style={navLinkStyles}>
          ADD NEW MEM
        </NavLink>
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
        <Route path="/addMem" element={<AddMem mems={mems} />} />
      </Routes>
    </div>
  );
};
