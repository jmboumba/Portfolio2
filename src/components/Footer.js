import React from "react";

function Footer(){

    return(
        <div style={{width:"100%"}}>
            <footer>
                <portfolio-container>
                    <div style={{}}>
                        <p style={{color:'white', padding:"0 0 50px 0", fontSize:"25px"}}>PORTFOLIO</p>
                        <p style={{color:'white', padding:"0 0 5px 0", fontSize:"18px"}}>Junior Melcki</p>
                        <p style={{color:'white', padding:"0 0 20px 0"}}>MBOUMBA MOUSSAVOU</p>

                        <p style={{color:" #f82716 "}}>IT ENGINEER </p>
                        <p style={{color:" #f82716 "}}>FULL-STACK DEVELOPER</p>
                    </div>
                </portfolio-container>
                <footer-links-container>
                    <div>
                        <a href="https://www.linkedin.com/in/junior-melcki-mboumba-moussavou-b21433218/"><img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" /></a>
                    </div>
                    <div>
                        <a href="https://github.com/jmboumba"><img height={10} src={`${process.env.PUBLIC_URL}/images/github.jpg`} alt="Github" /></a>
                    </div>
                    <div>
                        <a href="mailto:mboumbamelcki@gmail.com"><img src={`${process.env.PUBLIC_URL}/images/mail.png`} alt="Mail" /></a>
                    </div>
                    <div style={{marginLeft:"100px"}}>
                        <ul style={{color:"white"}}>
                            <li><a href="">About</a></li>
                            <li><a href="">Work</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Expérience</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </footer-links-container>

            </footer>
        </div>
    )
}

export default Footer;