import {useState} from "react";
export default function LikeButton(){
    let style = {color : "red"};
    let [isLiked , setisLiked] = useState(false);
    let [clicked , setclicked] = useState(0);
    let Toggle = () => {
        setisLiked(!isLiked);
        setclicked(clicked+1);
    };
    
    return(
        <div>
            <h3>Like Button</h3>
            <p onClick={Toggle}>
               {isLiked ? <i className="fa-solid fa-heart" style={style}></i> : <i className="fa-regular fa-heart"></i> }
                {clicked}
            </p>
        </div>
    )
}