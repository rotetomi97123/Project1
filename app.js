import React from 'react';
import Navbar from './components/navbar';
import MainContent from './components/MainContent'
import "./style.css"


export default function App (){
    
    const [mode, setMode] = React.useState(true)
    const stylesNav ={
        backgroundColor:mode === true ? "#202020" : "whitesmoke",
        color:mode === true ? "whitesmoke" : "black",
        borderBottom:mode === true ? "" : "1px solid whitesmoke"
    }
    const stylesMain ={
        backgroundColor:mode === true ? "#24272e" : "white",
        color:mode === true ? "whitesmoke" : "black"
    }

    function handleClick(){
        setMode(prevstate => !prevstate)
    }
    return(
        <div className='container'>
            <Navbar 
            on = {mode}
            mode = {handleClick}
            styles = {stylesNav}
            />
            <MainContent 
            on = {mode}
            mode = {handleClick}
            styles = {stylesMain}
            />
        </div>
    )
}