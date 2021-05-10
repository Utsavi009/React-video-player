import React from 'react';
import { Link } from 'react-router-dom';
import './reactplayer.css';

const Movie = (props) => {
    console.log(props.index)
    
    return(
        <div>
        <div className="flexy-thumbs">
        <Link to={`/videoplayer/${props.index}`}>
            <img src={props.thumb} className="small-thumbs" />
        </Link>
    </div>
    </div>
    )
}

export default Movie;