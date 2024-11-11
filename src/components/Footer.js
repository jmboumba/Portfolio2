import React from "react";

function Footer(){

    return(
        <div>
            <footer>
                <div className="inline" style={{marginTop:"10%"}}>
                    <p>PORTFOLIO</p>
                    <p>Junior Melcki </p>
                    <p>MBOUMBA MOUSSAVOU</p>
                    <p>IT ENGINEER </p>
                    <p>FULL-STACK DEVELOPER</p>
                </div>
                <div className="inline" style={{marginLeft:"10%"}}>
                    <p>LIENS</p>
                    <ul>
                        <a href=""><li>Accueil</li></a>
                        <a href=""><li>A propos</li></a>
                        <a href=""><li>Services</li></a>
                        <a href=""><li>Expérience</li></a>
                        <a href=""><li>Projets</li></a>
                        <a href=""><li>Contacts</li></a>
                    </ul>
                </div>
                <div className="links">
                    <a href="" className="links-a"><img height={90} src={`${process.env.PUBLIC_URL}/images/github.jpg`} alt="github" /></a>
                    <a href="" className="links-a"><img height={90} src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="linkedin" /></a>
                    <a href="" className="links-a"><img height={90} src={`${process.env.PUBLIC_URL}/images/mail.png`} alt="profile" /></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;