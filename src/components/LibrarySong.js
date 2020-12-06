import { activeSong } from "./util";


const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {

    const songSelectHandler = async () => {

        await setCurrentSong(song);
        setSongs(activeSong(songs, song));

        if (isPlaying) audioRef.current.play();

    };

    return (
        <div className={`library-song ${song.active ? "selected" : ""}`} onClick={songSelectHandler}>
            <img src={song.cover} alt={`${song.name} cover art`}></img>
            <div className="song-description">
                <h4>{song.name}</h4>
                <p>{song.artist}</p>
            </div>
        </div>
    );
};

export default LibrarySong;