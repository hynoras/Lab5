import React, { useState } from 'react';
import './VideoSidebar.css';
import { Heart, HeartFill, Chat, ArrowUpRight } from 'react-bootstrap-icons';

const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <HeartFill
            size={24}
            onClick={(e) => setLiked(false)}
            className="text-danger"
          />
        ) : (
          <Heart size={24} onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <Chat size={24} />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ArrowUpRight size={24} />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
