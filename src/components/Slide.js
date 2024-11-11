import React from "react";

function Slide(){

    return(
        <>
            <div className="slide">
                <p>Salut, je suis Mboumba Moussavou Junior Melcki</p>
                <p><b>Ingénieur en Informatique</b>, je conçois et développe des applications web et mobiles.
                </p>
                <center>
                <img className="profile" src={`${process.env.PUBLIC_URL}/images/junior.webp`} alt="profile"></img>
                </center>
            </div>
        </>
    )
}

export default Slide;