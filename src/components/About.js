import React from "react";
import Slide from "./Slide";
import Apropos from "./Apropos";

function About(){
    return(
        <div>
            <Slide />
            
            <div style={{backgroundColor:'gray', height:"130px", alignItems:"center", marginBottom:"150px"}}>
                <div style={{margin: "0 0 0 30%"}}>
                    <img style={{height:"100px", margin:"10px 0 0 60px"}} src={`${process.env.PUBLIC_URL}/images/mts.png`} alt="mts" />
                    <img style={{height:"100px", margin:"10px 0 0 60px"}} src={`${process.env.PUBLIC_URL}/images/alomrane.png`} alt="mts" />
                    <img style={{height:"100px", margin:"10px 0 0 60px"}} src={`${process.env.PUBLIC_URL}/images/freelancer.png`} alt="mts" />

                </div> 
            </div>
            <Apropos />
        </div>
    )
}

export default About;