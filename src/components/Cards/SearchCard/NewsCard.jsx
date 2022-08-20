import React from 'react';
import './SearchCard.css'

const NewsCard = ({ links, source, title, darkTheme }) => {
    return (
        <div className={`NewsCard ${darkTheme ? "NewsCard-d" : ""}`}>
            <a href={links?.[0].href} target="_blank" rel='noreferrer' className='NewsCard-Link'>
                <p className='NewsCard-Title'>
                    {title}
                </p>
            </a>
            <div className='NewsCard-Source'>
                <a href={source?.href} target="_blank" rel='noreferrer' className='hover:underline hover:text-blue-300'>{source?.href}</a>
            </div>
        </div>
    )
}

export default NewsCard;