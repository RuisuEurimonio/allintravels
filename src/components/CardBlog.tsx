import React from "react";

interface cardBlogProps {
    img : string;
    title: string;
    className?: string;  
    text?: string;
    link?: string; 
}

const CardBlog : React.FC<cardBlogProps> = ({img, title, className, text, link}) => {
    return (
        <div className={`${className} w-full h-full bg-white rounded-sm p-3 relative`}>
            <img src={`/src/assets/${img}`} className="object-cover w-full" alt="Blog Post" />
            <div className="card-blog-body">
                <h3 className="font-bold my-2"> {title} </h3>
                <p className="mt-0 text-justify"> {text} </p>
                <div className="text-right underline text-[var(--main-color)] font-bold">
                    <a href={`${link}`} className="relative text-end">Leer más</a>
                </div>
            </div>
        </div>
    );
};

export default CardBlog;