import React, { useEffect, useState } from 'react';
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { TbGhost2 } from "react-icons/tb";

import axios from 'axios';

import SearchBar from './components/SearchBar';
import ShowList from './components/ShowList';
import RandomEpisode from './components/RandomEpisode';
import NavBar from './components/NavBar';

const App = () => {
  const [shows, setShows] = useState(null);
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState([]);
  const [image, setImage] = useState('');
  const [selectedShow, setSelectedShow] = useState(null);
  const [randomEpisode, setRandomEpisode] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    
    const history = JSON.parse(window.localStorage.getItem("tvHistory"))
    
    if (history) {
      setHistory(history)
    }
  }, [])

  const searchShows = async (query) => {
    if (query.trim() !== "") {
      setShows([])
      setNotFound(false)
      
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
      setSelectedShow(null)
      setRandomEpisode(null)
      setShows(response.data.map(result => result.show));
  
      if (response.data.length < 1) {
        setNotFound(true)
        setShows(null)
      } else {
        setNotFound(false)
      }
    }
  };

  const getRandomEpisode = async (showId) => {
    const response = await axios.get(`https://api.tvmaze.com/shows/${showId}/episodes`);
    const episodes = response.data;
    const randomEp = episodes[Math.floor(Math.random() * episodes.length)];
    setRandomEpisode(randomEp);
  };

  const goBack = () => {
    setRandomEpisode(null)
  }

  const goHome = () => {
    setShows(null)
    setImage('')
    setQuery('')
    setNotFound(false)
    setSelectedShow(null)
    setRandomEpisode(null)
  }

  const toSelectShow = (show) => {
    setSelectedShow(show)
    getRandomEpisode(show.id) 
    setImage(show.image?.medium)

    const historySaved = JSON.parse(window.localStorage.getItem("tvHistory"))

    if (historySaved) {
      let repeatedShow

      historySaved.find((obj) => {
        if (obj.id === show.id) {
          repeatedShow = obj
        }
      })

      console.log(repeatedShow)

      let newFilter
      
      if (historySaved.length < 3) {      
        
        // ALT .include() - do not change order
        if (repeatedShow) {
          
          newFilter = historySaved.filter((h) => h.id !== repeatedShow.id)
          newFilter.push(repeatedShow)
          setHistory(newFilter)
          window.localStorage.setItem("tvHistory", JSON.stringify(newFilter))

        } else {
          historySaved.push(show)
          setHistory(historySaved)
          window.localStorage.setItem("tvHistory", JSON.stringify(historySaved))
        }

      } else {
        if (repeatedShow) {
          newFilter = historySaved.filter((h) => h.id !== repeatedShow.id)
          newFilter.push(repeatedShow)
          setHistory(newFilter)
          window.localStorage.setItem("tvHistory", JSON.stringify(newFilter))
          
        } else {
          historySaved.shift()
          historySaved.push(show)
          setHistory(historySaved)
          window.localStorage.setItem("tvHistory", JSON.stringify(historySaved))
        }
      }

    } else {

      setHistory([show])
      window.localStorage.setItem("tvHistory", JSON.stringify([show]))

    }
  }

  const getHistory = () => {
    if (history.length >= 1) {
      return (
        <div className="container mx-auto p-4 max-w-2xl">
          <div className="flex items-center justify-between h-16">
            <h2 className="text-gray-300 text-md text-center mb-0 font-bold mr-2">History</h2>
            <button 
              className="p-3"
              onClick={deleteHistory}  
            >🗑️</button>
          </div>
          <ShowList 
            shows={history}
            onSelectShow={(show) => {
              toSelectShow(show)
            }}
          />
        </div>
      )
    }
  }

  const deleteHistory = () => {
    window.localStorage.clear()
    setHistory([])
  }

  return (
    <>
      <NavBar goHome={goHome}/>
      <div className="container mx-auto p-4 max-w-2xl mt-12">
        <div className="flex flex-col justify-center items-center mb-4">
          <h1 className="text-9xl text-center mb-2">
            <PiTelevisionSimpleDuotone className="text-amber-500 text-9xl" />
          </h1>
          <h3 className="text-gray-300 text-sm text-center mb-4 font-bold">Look for your favorite tv show and get a <span className="bg-gradient-to-br from-yellow-500 to-red-500 text-transparent bg-clip-text">random episode</span> so you can enjoy it!</h3>
        </div>
        <SearchBar 
          onSearch={searchShows} 
          handleQuery={({target}) => setQuery(target.value)} 
          query={query} />
        {randomEpisode ? 
          <RandomEpisode episode={randomEpisode} image={image} goBack={goBack} changeEpisode={() => getRandomEpisode(selectedShow.id) } /> :
          <ShowList 
            shows={shows} 
            onSelectShow={(show) => { 
              toSelectShow(show)
            }} />
        }
        {notFound && 
        <div className="flex flex-col items-center">
          <TbGhost2 className="text-amber-500 text-9xl"/>
          <h1 className="text-white text-center">Boo, no show found...</h1>
        </div>}
      </div>
      {getHistory()}
    </>
  );
};

export default App;
