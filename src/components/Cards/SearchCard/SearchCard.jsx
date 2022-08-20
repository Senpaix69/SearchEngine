import React from 'react';
import './SearchCard.css'

const SearchCard = ({ link, title, desc, darkTheme }) => {
  return (
    <div className={`SearchCard ${darkTheme ? "SearchCard-d" : ""}`}>
      <a href={link} target="_blank" rel='noreferrer'>
        <p className='SearchCard-Link'>
          {link?.length > 30 ? link.substring(0, 30) : link}
        </p>
        <p className='SearchCard-Title'>
          {title}
        </p>
      </a>
      <p className='SearchCard-Desc'>{desc}</p>
    </div>
  )
}

export default SearchCard;
