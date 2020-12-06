import './App.css';
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import Nav from './components/Nav';
import './styles/app.scss';
import data from './data';
import { useState, useRef } from 'react';
import { activeSong } from './components/util';

function App() {
  let audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryState, setLibraryState] = useState(false);

  const [songInfo, setSongInfo] = useState(
    {
      currentTime: 0,
      duration: 0
    }
  );
  const timeUpdateHandler = (e) => {

    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  const onEndHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (songs.length !== currentIndex + 1) {
      await setCurrentSong(songs[currentIndex + 1]);
      setSongs(activeSong(songs, songs[currentIndex + 1]));
    }
    if (isPlaying) audioRef.current.play();

  }

  return (
    <div className="App">
      <Nav libraryState={libraryState} setLibraryState={setLibraryState} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player audioRef={audioRef} songs={songs} setSongs={setSongs} songInfo={songInfo} setSongInfo={setSongInfo} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setSongs={setSongs} libraryState={libraryState} />
      <audio src={currentSong.audio} ref={audioRef} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} onEnded={onEndHandler} />
    </div>
  );
}

export default App;
