import React from 'react'


const SongDetails = ({song}) => {
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
                <button class="ui right mini primary button">
                    Select Song
                </button>
            </div>
        </div>
     );
}
 
export default SongDetails;