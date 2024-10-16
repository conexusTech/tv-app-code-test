// src/pages/LiveTV.js

import React, { useState, useEffect } from 'react';
import ChannelList from '../components/ChannelList';
import VideoPlayer from '../components/VideoPlayer';

// LiveTV page displaying live channels and a video player
function LiveTV() {
  const [channels, setChannels] = useState([]);
  const [currentChannel, setCurrentChannel] = useState(null);

  useEffect(() => {
    // Fetch channel data from the local JSON file
    fetch('/api/channels.json')
      .then((response) => response.json())
      .then((data) => setChannels(data))
      .catch((error) => console.error('Error fetching channels:', error));
  }, []);

  const handleSelectChannel = (channel) => {
    setCurrentChannel(channel);
  };

  return (
    <div className="LiveTV">
      <ChannelList channels={channels} onSelectChannel={handleSelectChannel} />
      <VideoPlayer currentChannel={currentChannel} />
    </div>
  );
}

export default LiveTV;
