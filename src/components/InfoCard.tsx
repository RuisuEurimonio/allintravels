import React from "react";

interface infoCardProps {
    status: string;
    title: string;
    date: string;
    price: string;
    description: string;
    img: string
}

const InfoCard : React.FC<infoCardProps> = ({img, status, title, date, price, description})  => {
    return (
        <div className={`info-card ${status}`}>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
}

export default InfoCard;
