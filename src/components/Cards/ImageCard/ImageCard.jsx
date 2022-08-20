import React from 'react';
import './ImageCard.css';

const ImageCard = ({ image, href, title, darkTheme }) => {
    return (
        <div className={`ImageCard ${darkTheme ? "ImageCard-d" : ""}`}>
            <a className='ImageBox' href={href} target='_blank' rel='noreferrer'>
                <img className='ImageCard-Image' src={image?.src} alt={title} loading='lazy' />
                <p className='ImageCard-Title'>{title}</p>
            </a>
        </div>
    )
}

export default ImageCard;