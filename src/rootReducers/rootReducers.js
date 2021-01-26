import { combineReducers } from 'redux';
import { selectedSong, songsReducer } from '../redux/reducers/SongReducer';


const rootReducers = combineReducers({
    songs: songsReducer,
    selectedSong: selectedSong
});

export default rootReducers;