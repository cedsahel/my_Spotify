import React from 'react';

export default function Tr(props) {

    return <tr onClick={()=> props.changeTrack(props.track.url)}>
        <td  className='borderLeft'>1</td>
        <td >{props.track.tName}<br />{props.track.arName}</td>
        {/* <td className='borderRight'><button >click me</button></td> */}
        <td className='borderRight'>{(props.track.duration / 60).toFixed(2).replace('.', ':')}</td>
    </tr>;
}
