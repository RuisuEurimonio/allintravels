import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

interface CardProps {
    text: string;
    img: string;
    className?: string;
}

const Card : React.FC<CardProps> = ({text, img, className = ""}) => {

    return (
        <div className={`border-[.8rem] border-neutral-400/50 rounded-3xl ${className}`}>
            <div className="relative w-full">
                <img src={img} className="object-cover w-full"/>
                <div className="absolute bottom-0 text-white right-0 p-1 mr-6">
                    <a className="flex flex-row items-center gap-2.5 text-sm"> {text} 
                        <FaArrowCircleRight />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;