import React from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import './App.css';
import './reactplayer.css';


const VideoPlayer = ({ movies }) => {

    let { id } = useParams();

    console.log(movies);



    return (
        <div className='video-player-container'>

            <div className='video-container'>
                <div><h1>Video Content</h1></div>
                <div>
                    {id &&
                        <ReactPlayer url={movies[id].sources} playing
                            className='react-player'
                            width='100%'
                            height='100%'
                            controls="true"
                            loop="false" />}
                </div>
            </div>


            <div className='thumb-container'>
                {movies.map((movie, index) => {
                    return (!id &&

                        <div className="flexy-thumbs">
                            <Link to={`/videoplayer/${index}`}>
                                <img src={movie.thumb} className="small-thumbs" />
                                { }
                                <h6>{movie.title}</h6>
                                <p>{movie.subtitle}</p>
                            </Link>
                        </div>)
                })
                }
            </div>
        </div>
    );
}

export default VideoPlayer;