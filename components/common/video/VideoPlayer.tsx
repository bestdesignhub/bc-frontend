import React from 'react';
import ReactPlayer from 'react-player';

// VideoPlayer Component
const VideoPlayer = ({ url, controls = true, loop = false, muted = true }: { url: string; controls?: boolean; loop?: boolean; muted?: boolean; }) => {
    return (
        <ReactPlayer
            url={url} // URL of the video to play
            controls={controls} // Show playback controls (play, pause, volume, etc.)
            loop={loop} // Loop the video
            muted={muted} // Mute the video
            width="100%" // Responsive width
            height="auto" // Auto-adjust height
            playing
            config={{
                file: {
                    attributes: {
                        controlsList: 'nodownload', // Disable download option
                    },
                },
            }}
        />
    );
};

export default VideoPlayer;