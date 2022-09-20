import React from "react";

export default function CardItem({card}){
    return(
    <div className="card">
        <h2>{card.title}</h2>
        <img src={ImageItem}/>
        <p>{card.info}</p>
        <p>{card.price}</p>
    </div>)
}
