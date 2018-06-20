import React, { Component } from 'react';
import SingleTrack from './SingleTrack';

class Tracks extends Component {

    render() {
        const tracks = this.props.tracks;
        return (
            <div className="tracks-container"> 
                {tracks.map(track => <SingleTrack track={track}/>)}
            </div>
        );
    }
}

export default Tracks;
