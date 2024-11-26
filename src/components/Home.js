import React from "react";

const Home = () =>{
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{padding:"8% 0 0 0"}}>
            <div style={{padding:"0 3% 0 5%"}}>
                <p style={{fontSize:"30px", fontWeight:"bold"}}>Salut,</p>
                <p style={{fontSize:"30px", fontWeight:"bold", padding:"1% 0 0 3%"}}>Je m'appelle  <span style={{color:"#0677ca"}}>MBOUMBA</span></p>
                <p style={{fontSize:"30px", fontWeight:"bold", padding:"3% 0 0 3%"}}>Développeur Full-stack</p>
                
                <div style={{padding:"3% 0 0 3%"}}>
                    <button onClick={{}} className="bg-blue-600 hover:bg-red-500 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300 ease-in-out">
                        Me Contacter
                    </button>
                </div>

                <div className="mt-4 flex space-x-4" style={{ padding:"3% 0 0 3%" }}>
                    {/* Social Media Icons */}
                    <a href="#" className="text-gray-400 hover:text-white">
                    <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                    <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                    <i className="bi bi-github"></i>
                    </a>
                </div>

            </div>
            <div className="text-white p-4" style={{padding:"0 0 0 0%", display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                <img style={{height:"300px"}} src={`${process.env.PUBLIC_URL}/images/junior.webp`} alt="Profile"/>
            </div>
            
        </div>
                
        </>
    )
}

export default Home;