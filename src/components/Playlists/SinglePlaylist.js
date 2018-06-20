import React, { Component } from 'react';
import MusicRoomHttpClient from '../../api/musicroom'
import SinglePlaylist from './SinglePlaylist'


class Playlists extends Component {

    render() {
        const playlist = this.props.playlist
        const selectPlaylist = this.props.selectPlaylist
        return (
            <div class="playlist-single card" style={{width: "18rem"}} onClick={() => selectPlaylist(playlist)} >
                <img class="card-img-top" src={playlist.thumbnail} alt="Playlist Image" />
                <div class="card-body">
                    <p class="card-text">{playlist.name}</p>
                </div>
            </div>
        )
    }
}

export default Playlists;
