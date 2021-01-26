const initialState = {
    songs: [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: 'I want it that way', duration: '1:45'}
    ]
}
export const songsReducer = (state = initialState, action) => {
    return state;
}







// const SongState = {
//     selectedSong: null
// }
export const selectedSong = (state = null, action) => {
    switch(action.type) {
        case 'SELECTED_SONG':
            return action.payload;

        default:
            return state;
    }
}