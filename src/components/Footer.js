import React from "react";

export default function Footer() {
    const copyrightText = "Shrey Trivedi © 2023"

    return (
        <>
            <div id="footerContainer" className="flex justify-content-between flex-wrap pt-5">
                <p id="footerContent" style={{'font-size': '1.5rem'}}>{copyrightText}</p>
                <div id="iconContainer" className="flex align-items-center flex-wrap gap-8">
                    <a href="https://linkedin.com/in/shreytrivedi577" target="_blank" rel="noopener noreferrer"> <i class="pi pi-linkedin" style={{'font-size': '2rem', 'color': '#0077B5'}}></i> </a>
                    <a href="https://github.com/ShhRey" target="_blank" rel="noopener noreferrer"> <i class="pi pi-github" style={{'font-size': '2rem', 'color': 'white'}}></i> </a>
                    <a href="" target="_blank" rel="noopener noreferrer"> <i class="pi pi-discord" style={{'font-size': '2rem', 'color': '#5865F2'}}></i> </a>
                </div>
            </div>
        </>
    )
}