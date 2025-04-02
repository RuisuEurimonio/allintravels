import React from "react";

interface infoCardProps {
    status: string;
    title: string;
    date: string;
    price: string;
    description: string;
    img: string
    className: string;
}

const InfoCard : React.FC<infoCardProps> = ({className, img, status, title, date, price, description})  => {
    return (
        <div className={` ${className} max-w-[25rem] w-[90%]`}>
            <div className={`info-card ${status} rounded-2xl w-full m-auto shadow-2xl relative z-10 bg-white`}>
                <img src={img} alt={title} className="w-full object-cover" />
                <p className="text-center bg-[var(--main-color)] text-white font-bold"> {status} </p>
                <h2 className="mt-3 text-center font-extrabold">{title}</h2>
                <p className="text-[var(--main-color)] text-center font-bold px-4">{date} | {price}</p>
                <p className="text-center px-4 pb-4">{description}</p>
            </div>
            <button className="block relative w-full m-auto mt-[-1rem] pb-4 pt-8 mb-2 rounded-b-2xl font-extrabold text-white underline text-xl bg-[var(--main-color)]"> Más información </button>
        </div>
    );
}

export default InfoCard;
