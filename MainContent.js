import React from 'react';
import backIMG from './images/back_img2.png'
import backIMG2 from './images/back_white.png'
 

export default function MainContent (props){
    return(
        <div 
        className='MainContent'
        style={props.styles}
        >
            <div className='box1'>
                <h1 className='main_h1'>Fun facts about React</h1>
                <ul>
                    <li>Was first reased in 2013</li>
                    <li>Was organally created by Jordan Walke</li>
                    <li>Has well over 100k stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps,including mobile apps</li>
                </ul>
            </div>
            <div className='box2'>
                <img className='react-img' alt=""src={props.on ? backIMG : backIMG2}></img>
            </div>
        </div>
    )
}
