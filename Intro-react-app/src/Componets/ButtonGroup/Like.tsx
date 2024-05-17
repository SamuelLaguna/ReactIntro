import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { useState } from "react";
import styles from "./Like.module.css"

interface LikeProps {
    onClick?: ()=> void;
}


const Like = ({onClick}: LikeProps) => {
    const [isLiked, setisLiked] = useState(false);


    const handleLikeClick = () => {
        setisLiked(!isLiked)
        if(onClick){
            onClick();
        }
    }
  return (
    <>
    <button onClick={handleLikeClick}>

    {isLiked ? <FcLike/> : <FcDislike />}
    </button>


    <button className={styles["secondBtn"]}>Button</button>


    </>
  )
}

export default Like

