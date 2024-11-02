import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState("gray");

  // Function to toggle background color
  const handleClick = () => {
    setBgColor(prevColor => (prevColor === "gray" ? "#fd5d5d" : "#fd5d5d"));
  };
  return (
    <>
      <div style={{display:"inline", float:"left"}}>
        <div>
          <img class="img-profile" src={`${process.env.PUBLIC_URL}/p2.webp`} alt="Profile" />
        </div>
      </div>
      <div style={{display:"inline", float:"left", marginLeft:100}}>
        <div>
          <h1 class="h1"> 
            <span>-- I'M JUNIOR MBOUMBA MOUSSAVOU</span><br></br>
            <span>IT ENGINEER</span>
          </h1>
        </div>
      </div>
      <div style={{display:"inline"}}>
          <div className="vertical-menu">
          
          <div className="menu-item" onClick={handleClick}>
            <span style={{color:"white", marginLeft:"50px"}}>HOME</span>
            <div class="item-icon" style={{backgroundColor:bgColor}}>
              <center>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                </svg>
              </center>
            </div>
          </div>

          <div className="menu-item">
            <span style={{color:"white", marginLeft:"50px"}}>ABOUT</span>
            <div class="item-icon">
              <center>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
              </center>
            </div>  
          </div>

          <div className="menu-item">
          <span style={{color:"white", marginLeft:"20px"}}>PORTFOLIO</span>
            <div class="item-icon">
              <center>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
                </svg>
              </center>
            </div> 
          </div>

          <div className="menu-item">
          <span style={{color:"white", marginLeft:"30px"}}>CONTACT</span>
            <div class="item-icon">
              <center>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-open" viewBox="0 0 16 16">
                  <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z"/>
                </svg>
              </center>
            </div>
          </div>
          
          <div className="menu-item">
            <span style={{color:"white", marginLeft:"50px"}}>BLOG</span>
            <div class="item-icon">
                <center>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chat-fill" viewBox="0 0 16 16">
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15"/>
                  </svg>
                </center>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
