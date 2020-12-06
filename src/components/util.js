
//instead of this we are using async await
export const playAudio = (audioRef, isPlaying) => {
    if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                audioRef.current.play();
            }
            );
        }
    }
}

export function activeSong(songs, song) {

    return (
        songs.map((s) => {
            if (s.id === song.id) {
                return {
                    ...s, active: true,
                }
            } else {
                return {
                    ...s, active: false,
                }
            }
        })
    )
}