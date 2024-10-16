// src/components/VideoPlayer.js

import React from 'react';

// VideoPlayer component simulates video playback of the selected channel
function VideoPlayer({ currentChannel }) {
  return (
    <div className="VideoPlayer">
      {currentChannel ? (
        <>
          <h3>Now Playing: {currentChannel.name}</h3>
          <div className="VideoPlaceholder">
            {/* Placeholder content representing video playback */}
            <p>Video content for {currentChannel.name}</p>
          </div>
        </>
      ) : (
        <p>Please select a channel to start watching.</p>
      )}
    </div>
  );
}

export default VideoPlayer;
