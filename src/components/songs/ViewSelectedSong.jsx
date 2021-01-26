import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    selectedSong: state.selectedSong
});

const ViewSelectedSong = ({selectedSong}) => {
    return ( 
        <div style={{marginTop: '220px'}}>
            {selectedSong &&
            <div className="ui segment">
                <div className="ui relaxed divided list">
                    <div className="item">
                        <i className="large music middle aligned icon"></i>
                        <div className="content">
                            <h4 className="header">Song Details</h4>
                            <h1>{selectedSong && selectedSong.title}</h1>
                            <cite>{selectedSong && selectedSong.duration}</cite>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
     );
}
 
export default connect(mapStateToProps)(ViewSelectedSong);