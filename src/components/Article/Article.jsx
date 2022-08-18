import React from 'react'
import "./article.css"

const Article = ({ image, title, date }) => {
    return (
        <div className='article'>
            <div className='article-img'>
                <img src={image} alt="" />
            </div>
            <div className='article-info'>
                <p>{date}</p>
                <h3>{title}</h3>
                <span>Read Full Article</span>
            </div>

        </div>
    )
}

export default Article