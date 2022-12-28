import { Photo } from "./Photo";
import klass from "./mem.module.css";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import Fab from '@mui/material/Fab';



export const Mem = (props) => {
  return (
    <div className={klass.parent}>
      <div className={klass.container}>
      <div className={klass.top}>
        <h1>{props.title}</h1>
        <Photo img={props.img} />
        <div className={klass.down}>
          <div className={klass.left}>
            <h2 className={klass.text}>{props.upvotes}</h2>
          <Fab color="primary" onClick={() => props.setUpvote(props.id)}>
            <ThumbUpAltIcon fontSize="large"/>
          </Fab>
          </div>
          <div className={klass.right}>
             <h2 className={klass.text}>{props.downvotes}</h2>
          <Fab color="error" onClick={() => props.setDownvote(props.id)}>
            <ThumbDownAltIcon fontSize="large"  />
          </Fab>
          </div>
         
          {/* <Fab><ThumbDownAltIcon /></Fab> */}
          
        </div>
      </div>
    </div> 
    </div>
   
  );
};
