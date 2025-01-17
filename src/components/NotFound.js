import React from "react";

const NotFound = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "150px" }}>
            <h1 style={{ fontSize: "4rem", color: "#ff4f4f" }}>404</h1>
            <p style={{ fontSize: "1.5rem", textAlign:"center" }}>Oops! The page you’re looking for doesn’t exist.</p>
            <a href="/" style={{ fontSize: "1.2rem", color: "#007bff", textDecoration: "none" }}>
                Go back to the homepage
            </a>
        </div>
    );
};

export default NotFound;
