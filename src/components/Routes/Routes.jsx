import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Results from '../Results/Results';

const Rootes = ({ darkTheme, stat }) => {
  return (
    <div className='Routess' style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Routes>
        <Route exact path='/search' element={!stat && <Results darkTheme={darkTheme} />}>
        </Route>
        <Route exact path='/news' element={!stat && <Results darkTheme={darkTheme} />}>
        </Route>
        <Route exact path='/videos' element={!stat && <Results darkTheme={darkTheme} />}>
        </Route>
        <Route exact path='/image' element={!stat && <Results darkTheme={darkTheme} />}>
        </Route>
      </Routes>
    </div>
  )
}

export default Rootes;
