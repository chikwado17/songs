import React from 'react';
import SongList from './songs/SongList';
import ViewSelectedSong from './songs/ViewSelectedSong';

function App() {
  return (
    <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
              <SongList />
          </div>
          <div className="twelve wide column">
            <ViewSelectedSong />
          </div>
        </div>
    </div>
  );
}

export default App;
