import React from 'react';

import { Rings } from 'react-loader-spinner';

import notFound from '../images/not-found.svg'

const ShowList = ({ shows, onSelectShow }) => {

  const imgToShow = (show) => {
    if (show.image?.medium) {
      return (
        <img className="w-full" src={show.image?.medium} alt={show.name} />
      )
    }

    return (
      <img className="w-full h-5/6" src={notFound} alt={show.name} />
    )
  }

  if (!shows) {
    return
  }

  return (
    <>
      {shows.length < 1 && 
        <div className='flex justify-center'>
          <Rings
          visible={true}
          height="120"
          width="120"
          color="#F59E0B"/>
        </div>
      }
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-50">
        {shows.map(show => (
          <div key={show.id} className="cursor-pointer rounded overflow-hidden shadow-md border-black" onClick={() => onSelectShow(show)}>
            {imgToShow(show)}
            <div className="px-6 py-4 bg-gray-700 h-full">
              <h2 className="text-xl font-bold">{show.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowList;
