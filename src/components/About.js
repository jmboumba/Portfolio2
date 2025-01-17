import React from "react";
import Slide from "./Slide";
import Apropos from "./Apropos";

function About(){
    const steps = [
        {
          title: "Diplome d'Ingénieur d'Etat, en Sciences de données et développement informatique",
          description: "ESTEM, Casablanca Maroc",
          date:"2021-2024",
          completed: false,
        },
        {
          title: "Classes préparatoires intégrées",
          description: "ESTEM, Casablanca Maroc",
          date:"2019-2021",
          current: false,
        },
        {
          title: "Baccalauréaut, en Sciences Mathématiques Physiques ( Série C )",
          description: "Lycée National Léon MBA, Libreville Gabon",
          date:"2018-2019"
        },
        {
          title: "Brevet d'étude du premier cycle",
          description: "Lycée National Léon MBA, Libreville Gabon",
          date:"2015-2016"
        }
      ];

    return(
        <div style={{padding:"10% 0 0 10%"}}>
            <h1 style={{fontFamily:"roboto", fontSize:"22px", fontWeight:"bold", padding:"0 0 5% 0", textAlign:"center"}}>FORMATIONS ACADEMIQUES</h1>
            <div className="relative flex flex-col space-y-8" style={{padding:"0 0 0 0%"}}>
                {steps.map((step, index) => (
                    <div key={index} className="relative flex items-start space-x-4">
                    {/* Vertical Line */}
                    <div className="flex flex-col items-center">
                        {/* Circle */}
                        <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            step.completed
                            ? "bg-blue-600 text-white"
                            : step.current
                            ? "border-2 border-blue-600 text-blue-600"
                            : "border-2 border-gray-300"
                        }`}
                        >
                        
                        </div>
                        {/* Line extending to the next step */}
                        {index < steps.length - 1 && (
                        <div
                            className={`h-full w-px ${
                            steps[index + 1].completed || steps[index + 1].current
                                ? "bg-blue-600"
                                : "bg-gray-300"
                            }`}
                            style={{ minHeight: "3rem" }}
                        ></div>
                        )}
                    </div>

                    {/* Step Content */}
                    <div>
                        <h4
                        className={`text-lg font-medium`}
                        style={{fontWeight:"bold"}}
                        >
                        {step.title}
                        </h4>
                        <p className="text-sm text-gray-900">{step.description}</p>
                        <p className="text-sm text-gray-500">{step.date}</p>
                    </div>
                    </div>
                ))}
            </div>

            <div style={{padding:"10% 0 5% 0%"}}>
                <h1 style={{fontFamily:"roboto", fontSize:"20px", fontWeight:"bold", padding:"10% 0 5% 0", textAlign:"center"}}>CERTIFICATIONS</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{padding:"0% 0 0% 10%"}}>
                    <div style={{width:"300px"}} class="border border-transparent hover:border-red-500 hover:rounded-md transition-all duration-200 p-4">
                        <span>SCRUM FPROFESSIONAL FOUNDATION CERTIFICATION</span>
                        <a href="#"><img width={300} src={`${process.env.PUBLIC_URL}/images/certif.png`}/></a>
                    </div>
                    <div style={{width:"350px"}} class="border border-transparent hover:border-red-500 hover:rounded-md transition-all duration-200 p-4">
                        <span>Hello</span>
                        <a href="#"><img width={300} src={`${process.env.PUBLIC_URL}/images/certif.png`}/></a>
                    </div>
                </div>
            </div>

            <div >
                <h1 style={{fontFamily:"roboto", fontSize:"20px", fontWeight:"bold", padding:"10% 0 5% 0", textAlign:"center"}}>EXPERIENCE PROFESSIONNELLE</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{padding:"0% 0 0% 15%"}}>
                    <div style={{width:"300px",}} class="border border-transparent hover:border-red-500 hover:rounded-md transition-all duration-200 p-4">
                        <p style={{fontWeight:"bold"}}>Holding AL OMRANE</p>
                        <a href="https://www.alomrane.gov.ma/Le-groupe/A-propos"><img width={250} style={{height:"150px", padding:"5% 0 0 3%"}} src={`${process.env.PUBLIC_URL}/images/alomrane.png`}/></a>
                    </div>
                    <div style={{width:"300px"}} class="border border-transparent hover:border-red-500 hover:rounded-md transition-all duration-200 p-4">
                        <p style={{fontWeight:"bold"}}>MTS GROUP AFRICA</p>
                        <a href="https://mtsgroup.ma/"><img width={250} style={{height:"150px", padding:"5% 0 0 3%"}} src={`${process.env.PUBLIC_URL}/images/mts.png`}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;