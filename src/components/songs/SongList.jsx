import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongDetails from './SongDetails';

const mapStateToProps = (state) => ({
    songs: state.songs.songs
});


class SongList extends Component {
   
    render() { 
        const { songs } = this.props;
        return ( 
            <div>
                {songs && songs.map(song => (
                    <SongDetails key={song.title} song={song} />
                ))}
            </div>
         );
    }
}
 
export default connect(mapStateToProps)(SongList);