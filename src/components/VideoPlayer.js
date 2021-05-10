import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import '../App.css';
import './reactplayer.css';
import Movie from './Movie';
import movies from '../data'


const VideoPlayer = () => {

    let { id } = useParams();


    return (
        <div className='video-player-container'>

            <div className='video-container'>
                <div><h1>Video Content</h1></div><hr></hr>
                <div className = 'react-player'>
                     {id &&
                        <ReactPlayer url={movies[id].sources} playing
                            width='100%'
                            height='100%'
                            controls="true"
                            loop="false" />}
                </div>
            </div>


            <div className='thumb-container'>
                {movies.map((movie, index) => <Movie key={index} {...movie} index={index}/>)}
                {/* {movies.map((movie, index) => {
                    return (!id &&
                        <div className="flexy-thumbs">
                        <Link to={`/videoplayer/${index}`}>
                            <img src={movie.thumb} className="small-thumbs" />
                        </Link>
                    </div>
                       )
                })
                } */}
            </div>
        </div>
    );
}

export default VideoPlayer;