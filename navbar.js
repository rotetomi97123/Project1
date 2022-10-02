import React from 'react';
import img1 from './images/img1.png'


export default function Navbar (props){
    return(
        <div 
        className='navbar'
        style={props.styles}
        
        >
            <div className='nav_first'>
                <img className="nav_img" src={img1} alt="React Facts"/>
                    <ul className='nav_ul1'>
                        <li>ReactFacts</li>
                     </ul>
            </div>
            <div className='navRight'>
                <ul className='nav_ul2'>
                    <li>React Course</li>
                </ul>
                <p>Light</p>
                <label class="switch">
                <input 
                className='check'
                type="checkbox"
                checked={props.on}
                onClick={props.mode}
                ></input>
                <span class="slider round"></span>
                </label>
                <p>Dark</p>
            </div>
                
        </div>
    )
}
