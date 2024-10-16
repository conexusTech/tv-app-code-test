// src/components/ChannelList.js

import React from 'react';

// ChannelList component displays a list of TV channels
function ChannelList({ channels, onSelectChannel }) {
  return (
    <div className="ChannelList">
      {channels.map((channel) => (
        <div
          key={channel.id}
          className="ChannelItem"
          onClick={() => onSelectChannel(channel)}
        >
          <img src={channel.thumbnail} alt={channel.name} />
          <div className="ChannelInfo">
            <h4>{channel.name}</h4>
            <p>{channel.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChannelList;
