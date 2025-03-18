import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

interface CardProps {
    text: string;
    img: string;
}

const Card : React.FC<CardProps> = ({text, img}) => {

    return (
        <div className="border-[.8rem] border-neutral-950/20 rounded-3xl">
            <div className="relative">
                <img src={img} className="object-cover"/>
                <div className="absolute bottom-0 text-white right-0 p-1 mr-6">
                    <a className="flex flex-row items-center gap-2.5"> {text} 
                        <FaArrowCircleRight />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;