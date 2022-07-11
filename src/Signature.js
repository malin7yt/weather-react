import React from "react";

import "./Signature.css"

export default function Signature() {
    return (
        <div className="signature">
                <p>
            <a 
            href="https://github.com/malin7yt/weather-react" 
            className="signature-link" 
            target="_blank" 
            rel="noopener noreferrer">
                Open source Code
            </a> by Malin Jensen, hosted on {" "}  
            <a 
            href="https://keen-boba-597d50.netlify.app/" 
            className="signature-link" 
            target="_blank" 
            rel="noopener noreferrer">
                 Netlify
            </a>
            </p>
        </div>
    );
}