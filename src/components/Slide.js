import React from "react";

function Slide(){

    return(
        <div style={{backgroundColor:" white ", height:"550px"}}>
                <div className="about-pro" style={{display:"inline-block"}}>
                    <p style={{fontFamily:"sans-serif", fontSize:"20px"}}>Salut, je m'appelle Mboumba Moussavou Junior Melcki</p><br></br>
                    <marquee behavior="slide" direction="right" scrollamount="20" >
                        <div style={{fontWeight:"bold", fontSize:"25px", marginBottom:"30px", fontFamily:"-moz-initial"}}>
                            <p>Je suis ingénieur en informatique, et    spécialisé dans le</p>
                            <p>développement d'applications web et mobiles à l'aide </p>
                            <p> de Framework tel que React, Laravel et bien d'autres</p>
                            <p>  encore.</p>
                        </div>
                        <a href="" style={{textDecoration:"none"}}>
                            <div className="box" style={{border: "1px solid black", width:"150px", height:"50px"}}>
                                <p style={{margin: "10px", color:"black"}}>EN SAVOIR PLUS</p>
                            </div>
                        </a>
                    </marquee>

                </div>
                <div className="about-pro" style={{display:"inline-block", marginLeft:"100px"}}>
                    <img style={{width:"300px", height:"400px"}} src={`${process.env.PUBLIC_URL}/images/junior.webp`} alt="profile" />
                </div>
            </div>
    )
}

export default Slide;