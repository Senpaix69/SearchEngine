import React from 'react';
import './Links.css';
import { NavLink } from 'react-router-dom';

const links = [
    { url: '/search', text: '✔ All' },
    { url: '/news', text: '📰 News' },
    { url: '/image', text: '📷 Images' },
    { url: '/videos', text: '🎥 Videos' },
]

const Links = ({ darkTheme }) => {
    return (
        <div className={`Links ${darkTheme ? "" : "Links-d"}`}>
            {links.map(({ url, text }, index) => (
                <NavLink to={url} key={index} className='Links-List'>
                    {text}
                </NavLink>
            ))}
        </div>
    )
}

export default Links;