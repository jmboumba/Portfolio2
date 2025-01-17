import React from "react";

const Home = () =>{

    const stages = [
        {
            title: "MTS GROUP AFRICA",
            link:"https://mtsgroup.ma/",
            image:`${process.env.PUBLIC_URL}/images/mts.png`
        },
        {
            title: "Holding AL OMRANE",
            link: "https://www.alomrane.gov.ma/Le-groupe/A-propos",
            image: `${process.env.PUBLIC_URL}/images/alomrane.png`
        },
        {
            title: "ESTEM MAROC",
            link: "https://estem.ma/",
            image: `${process.env.PUBLIC_URL}/images/estem.png`
        }
    ]

    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{padding:"8% 0 0 0"}}>
            <div style={{padding:"0 5% 0 5%"}}>
                <p class="responsive-paragraph" style={{color:'gray', fontSize:"20px"}}>Salut, je m'appelle Junior MBOUMBA</p>
                <p class="responsive-paragraph" style={{fontWeight:"bold", fontSize:"25px", fontFamily:"Oswald", textAlign: "justify"}}>
                    Je suis développeur fullstack, maîtrisant les technologies pour créer des 
                    applications performantes, à l'aide des frameworks comme React et Node.js ...
                </p>

                
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
            <div className="text-white p-4" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                <img style={{height:"300px", width:"250px"}} src={`${process.env.PUBLIC_URL}/images/Photo identite.jpg`} alt="Profile"/>
            </div>

            
            
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop:"100px", backgroundColor:"ButtonFace"}}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "16px", // Espacement entre les éléments
                    padding: "16px",
                    flexWrap: "wrap", // Pour gérer les petits écrans
                }}
            >
                {stages.map((stage, index) => (
                    <div
                        key={index}
                        style={{
                            width: "200px",
                            height: "150px",
                            border: "1px solid transparent",
                            borderRadius: "8px",
                            transition: "all 0.2s ease-in-out",
                            textAlign: "center",
                            padding: "16px",
                        }}
                        className="hover:border-gray-300 hover:shadow-md"
                    >
                        <p style={{ fontWeight: "bold" }}>{stage.title}</p>
                        <a href={stage.link}>
                            <img
                                src={stage.image}
                                alt={stage.title}
                                style={{
                                    width: "100%",
                                    height: "80px",
                                    objectFit: "contain",
                                }}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>

        

                
        </>
    )
}

export default Home;