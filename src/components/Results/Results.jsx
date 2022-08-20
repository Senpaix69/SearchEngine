import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Results.css';
import ReactPlayer from 'react-player';
import { useResultContext } from '../../contexts/ResultContextsProvider';
import SearchCard from '../Cards/SearchCard/SearchCard';
import ImageCard from '../Cards/ImageCard/ImageCard';
import Loading from '../Loading/Loading';
import NewsCard from '../Cards/SearchCard/NewsCard';

const Result = ({ darkTheme }) => {
  let { isLoading, result, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos+from+youtube$num=20`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname])

  if (isLoading) return <Loading />

  console.log("pathname", location.pathname);
  console.log(result);

  switch (location.pathname) {
    case '/search':
      return (
        <div className='Result'>
          {result?.map(({ link, title, description }, index) => (
            <SearchCard key={index} link={link} title={title} desc={description} darkTheme={darkTheme} />
          ))}
        </div>
      )
    case '/image':
      return (
        <div className='Image'>
          {result?.map(({ image, link: { href, title } }, index) => (
            <ImageCard key={index} image={image} title={title} href={href} darkTheme={darkTheme} />
          ))}
        </div>
      )
    case '/news':
      return (
        <div className='Result'>
          {result?.map(({ links, id, source, title }, index) => (
            <NewsCard key={id ? id : index} links={links} source={source} title={title} darkTheme={darkTheme} />
          ))}
        </div>
      )
    case '/videos':
      return (
        <div className='Videos'>
          {result?.map((video, index) => (
            <div className='Video-Box' key={index}>
              {video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0].href} controls width='355px' height='200px' />}
            </div>
          ))}
        </div>
      )
    default:
      return 'EROR 404';
  }
}

export default Result
