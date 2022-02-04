import React from 'react';
import "./audio.css"


export default function Audio(props) {

    return <div className='audio'>
        <div className='left'>
            <div className="covermini"></div>
            <div className='track'>
                <div className='artiste'>aze</div>
                <div className="trackName">aze</div>
            </div>
        </div>
        <audio  src={props.url} autoPlay controls>
        </audio>
    </div>;
}
