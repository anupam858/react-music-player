import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';
import { activeSong } from './util';


const Player = ({ audioRef, songs, setSongs, songInfo, setSongInfo, currentSong, setCurrentSong, isPlaying, setIsPlaying }) => {

    const songChanged = (index) => {


        setSongs(activeSong(songs, songs[index]));
        if (isPlaying) audioRef.current.play();
    };

    const playSongHandler = () => {

        if (isPlaying) {

            audioRef.current.pause();
        }
        else {

            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);

    };

    const timeFormatter = (time) => {

        return (
            isNaN(time) ? "00:00" : Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        );
    };

    const dragHandler = (e) => {

        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    };

    const skiptrackHandler = async (direction) => {
        const currentIndex = songs.findIndex((song) => song.id === currentSong.id);

        if (direction === 'skip-forward' && songs.length !== currentIndex + 1) {
            await setCurrentSong(songs[currentIndex + 1]);
            songChanged(currentIndex + 1);
        }
        else if (direction === 'skip-back' && currentIndex - 1 >= 0) {
            await setCurrentSong(songs[currentIndex - 1]);
            songChanged(currentIndex - 1);
        }
    };
    const animationPercentage = (songInfo.currentTime / songInfo.duration) * 100;

    return (
        <div className="player-container">
            <div className="time-control">
                <p>{timeFormatter(songInfo.currentTime)}</p>
                <div className="track" style={{
                    background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
                }}>
                    <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" onChange={dragHandler} />
                    <div style={{ transform: `translateX(${animationPercentage}%)` }} className="animate-track"></div>
                </div>

                <p>{timeFormatter(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" onClick={() => skiptrackHandler('skip-back')} />
                <FontAwesomeIcon className="play" icon={isPlaying ? faPause : faPlay} size="2x" onClick={playSongHandler} />
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x" onClick={() => skiptrackHandler('skip-forward')} />
            </div>

        </div>
    );
};

export default Player;