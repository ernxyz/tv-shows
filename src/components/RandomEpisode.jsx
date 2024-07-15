import React from 'react';

import notFound from '../images/not-found.svg'

const RandomEpisode = ({ episode, image, goBack, changeEpisode }) => {

  const imgToShow = (image) => {
    if (image) {
      return (
        <img className="" src={image} />
      )
    }

    return (
      <img className="max-w-xs" src={notFound} />
    )
  }

  return (
    <div className="bg-gray-700 mt-4 max-w-2xl rounded overflow-hidden shadow-md border border-black text-gray-50">
      <div className="p-4">
        <button onClick={goBack}>⬅️ Go back</button> <br />
        <button onClick={changeEpisode}>🎲 Random</button>
      </div>
      <div className="flex justify-center my-2">
        {imgToShow(image)}
      </div>
      <div className='w-full p-4'>
        <h2 className="text-2xl font-bold">{episode.name}</h2>
        <p>Season {episode.season}, Episode {episode.number}</p>
        <p>{episode.summary && episode.summary.replace(/<[^>]+>/g, '')}</p>
      </div>
    </div>
  );
};

export default RandomEpisode;
