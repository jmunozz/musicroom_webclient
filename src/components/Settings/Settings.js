import React, { Component } from 'react';

import Tracks from './Tracks/Tracks'
import MusicRoomHttpClient from '../../api/musicroom'

class Settings extends Component {

    render() {
        const playlist = this.props.playlist
        if (!playlist) return <div></div>
        return (
            <div className="playlist-single-full"> 
                <Tracks tracks={playlist.tracks} />
            </div>
        );
    }
}

export default Settings;
