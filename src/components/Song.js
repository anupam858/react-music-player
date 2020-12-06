
const Song = ({ currentSong, isPlaying }) => {

    return (
        <div className="song-container">
            <img src={currentSong.cover} alt={`${currentSong.name} cover art`} className={`${isPlaying ? "active-rotate" : ""}`} ></img>
            <h3>{currentSong.name}</h3>
            <h4>{currentSong.artist}</h4>
        </div>
    );
};

export default Song;