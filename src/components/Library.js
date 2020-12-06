import LibrarySong from './LibrarySong';
const Library = ({ audioRef, songs, setCurrentSong, isPlaying, setSongs, libraryState }) => {


    return (
        <div className={`library ${libraryState ? "library-open" : ""}`}>
            <h3>Library</h3>
            <div className="library-songs">
                {
                    songs.map(song => (
                        <LibrarySong song={song} songs={songs} setCurrentSong={setCurrentSong} key={song.id} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} />
                    ))
                }

            </div>
        </div>
    );
}

export default Library;