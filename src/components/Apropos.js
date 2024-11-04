import React from "react";

function Apropos(){
    return(
        <div style={{width:"100%"}}>
                    <center><p style={{fontWeight:"bold", fontSize:"20px", marginBottom:"50px"}}>A PROPOS</p></center>
                    <p className="p-about">
                        I am a freelance full-stack developer. I have a strong background as a software 
                        architect and have successfully led teams as a fractional CTO. I have worked with 
                        clients from diverse industries worldwide. I have successfully delivered over 20 
                        projects for a range of clients, including solo founders, early stage startups, 
                        growing startups, digital agencies, and notable companies like Apple and Binance. 
                        I create fast, clean, and maintainable web applications, ready to scale from few 
                        users to thousands. I can help you deliver a seamless and engaging experience to 
                        your users. Background in computer science and ability as a full-stack developer 
                        (front-end and back-end) allow me to create everything from small business 
                        websites to custom web applications.
                    </p>
                    <p className="p-about">
                        I have over 10 years of experience in delivering web applications and I like making 
                        life better through technology. My work currently consists of freelance clients and 
                        side projects. My freelance full stack development roots are in React, Next.js, 
                        Node.js and others.
                    </p>
                    <p className="p-about">
                        I offer my services as a full stack developer for hire to work with businesses of all 
                        sizes. Feel free to get in touch. I’m available during the week to discuss and advise 
                        on your project or development needs.</p>

                    <p className="p-about">
                        <span><i class="bi bi-send"></i></span>
                        <span>
                            <a href="mailto:mboumbamelcki@gmail.com">
                                mboumbamelcki@gmail.com
                            </a>
                        </span>
                    </p>
                    <div className="p-about">
                    <video width="640" height="360" controls>
                        <source src={`${process.env.PUBLIC_URL}/images/video.mp4`} type="video/mp4" />
                        <source src="video.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                    </div>

            </div>
    )
}

export default Apropos