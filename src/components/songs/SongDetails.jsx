import React from 'react';
import { connect } from 'react-redux';
import { selectedSongAction } from '../../redux/actions/selectedSongAction';

const mapDispatchToProps = {
    selectedSongAction
}


class SongDetails extends React.Component {
    handleSelectedSong = () => {
        this.props.selectedSongAction(this.props.song);
    };

    render() {
        const { song } = this.props;
        return ( 
            <div style={{marginTop: '30px'}}>
                <div className="ui segment">
                    <div className="ui relaxed divided list">
                        <div className="item">
                            <i className="large music middle aligned icon"></i>
                            <div className="content">
                                <h4 className="header">{song.title}</h4>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.handleSelectedSong} className="ui right mini primary button">
                        Select Song
                    </button>
                </div>
            </div>
         );
    }
}
export default connect(null, mapDispatchToProps)(SongDetails);