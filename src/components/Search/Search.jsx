import React, { useState, useEffect } from 'react';
import './Search.css';
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../../contexts/ResultContextsProvider';
import darkSearch from '../images/dark-search.png';
import lightSearch from '../images/white-search.png';
import Links from '../Links/Links';
import { NavLink } from 'react-router-dom';


const Search = ({ darkTheme, stat, setStat }) => {
  const [text, setText] = useState(() => {
    const prevText = JSON.parse(localStorage.getItem('text'));
    return prevText && !stat ? prevText : '';
  });
  const { setSearchTerm } = useResultContext();
  const [debounceValue] = useDebounce(text, 300);

  useEffect(() => {
    localStorage.setItem('text', JSON.stringify(text));
  }, [text])

  useEffect(() => {
    if (debounceValue) {
      if (!stat) {
        setSearchTerm(debounceValue);
      } else {
        setSearchTerm('');
      }
    }
  }, [debounceValue]);

  return (
    <div className='Search'>
      <div className={`Search-Box Search-Box${darkTheme ? "" : "-d"}`}>
        <img src={darkTheme ? darkSearch : lightSearch} alt="Search-Icon" className="Search-Icon" />
        <input type="text" className='Search-Input' placeholder='Search...' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      {!stat ? <Links darkTheme={darkTheme} /> : <button className='Search-btn' onClick={() => setStat(text ? false : true)}><NavLink className='nav-link' to={text ? '/search' : ''}>Search</NavLink></button>}
    </div>
  )
}

export default Search;