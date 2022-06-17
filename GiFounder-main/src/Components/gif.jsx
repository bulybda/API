import React from 'react';
import './gif.module.css';
function Gif(props) {

    return (
        <div>
            <iframe src={props.url} width="480" height="270" frameBorder="0"
                    className="giphy-embed" allowFullScreen></iframe>
        </div>
    );
}

export default Gif;