import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Video from './components/Video'; // Import your Video component

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:8081/v2/posts");
        setVideos(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({ _id, url, channel, description, song, likes, shares, messages }) => (
          <Video
            key={_id} // Make sure to set a unique key for each component in the array
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
