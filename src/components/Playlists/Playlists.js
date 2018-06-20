import React, { Component } from 'react';
import MusicRoomHttpClient from '../../api/musicroom'
import SinglePlaylist from './SinglePlaylist'


import './Playlists.css';


class Playlists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: []
        }
    }

    componentWillMount() {
        const apiClient = new MusicRoomHttpClient();
        apiClient.get('/api/playlists')
            .then(playlists => {
                this.setState({
                    playlists
                })
            })
    }

    render() {
        const selectPlaylist = this.props.selectPlaylist;
        return (
            <div className="playlists-container">
                {this.state.playlists.map(playlist => <SinglePlaylist playlist={playlist} selectPlaylist={selectPlaylist} />)}
            </div>
        );
    }
}

export default Playlists;
