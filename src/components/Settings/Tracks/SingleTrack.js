import React, { Component } from 'react';

class SingleTrack extends Component {

    render() {
        const track = this.props.track;
        return (
            <div class="card track-single" style={{width: "18rem"}}>
                <img class="card-img-top" src={track.album.cover_big} alt="Album Image" />
                <div class="card-body">
                    <h5 class="card-title">{track.title}</h5>
                    <p class="card-text">{track.artist.name}</p>
                    <p class="card-text">{track.album.title}</p>
                    <p class="card-text">upvotes: {track.upvotes.length}</p>
                    <button class="btn btn-primary">Upvote!</button>
                </div>
            </div>
        );
    }
}

export default SingleTrack;
