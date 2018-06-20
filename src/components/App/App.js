import React, { Component } from 'react';
import Playlists from '../Playlists/Playlists';
import MusicRoomHttpClient from '../../api/musicroom';
import Settings from '../Settings/Settings';
import Auth from '../Auth/Auth.js';
import socket from '../../socket';
import Config from '../../config';


import logo from './logo.svg';
import './App.css';

const INVITATION_RECEIVED = 'INVITATION_RECEIVED';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlaylist: null,
      user: null,
      socket: null,
    };
  }

  componentDidUpdate() {
    if (this.state.user && !this.state.socket) {
      this.setSockets();
    }
  }

  setSockets() {
    const { token } = this.state.user;
    this.state.socket = { generalChannel: socket.channel('general:lobby', { token }) };
    this.state.socket.generalChannel.join();
    this.state.socket.generalChannel.on(INVITATION_RECEIVED, () => {
      alert('INVITATION RECEIVED');
    });
  }

  setUser(user) {
    this.setState({ user });
  }

  selectPlaylist(playlist) {
    const apiClient = new MusicRoomHttpClient();
    const endpoint = `/api/playlists/${playlist.id}`;
    apiClient.get(endpoint)
      .then((fullPlaylist) => {
        this.setState({ currentPlaylist: fullPlaylist });
      });
  }


  render() {
    if (!this.state.user) { return <Auth setUser={this.setUser.bind(this)} />; }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col app-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Playlists selectPlaylist={this.selectPlaylist.bind(this)} />
          </div>
          <div className="col-6">
            <Settings playlist={this.state.currentPlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
