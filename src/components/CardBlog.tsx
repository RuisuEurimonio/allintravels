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
        <div className={`${className} w-full h-full bg-white rounded-sm p-3 relative
                        lg:p-8 lg:rounded-xl
        `}>
            <img src={`/${img}`} className="object-cover w-full" alt="Blog Post" />
            <div className="card-blog-body">
                <h3 className="font-bold my-2
                                lg:text-xl
                                xl:text-2xl
                                2xl:text-4xl
                "> {title} </h3>
                <p className="mt-0 text-justify
                            xl:text-2xl
                            2xl:text-3xl
                "> {text} </p>
                <div className="text-right underline text-[var(--main-color)] font-bold
                                lg:text-2xl
                                2xl:text-4xl
                ">
                    <a href={`${link}`} className="relative text-end">Leer más</a>
                </div>
            </div>
        </div>
    );
};

export default CardBlog;