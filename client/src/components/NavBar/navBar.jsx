import React from "react"
import s from "./navBar.module.css"

export default function NavBar() {
    
    return (
        <div className={s.nav}>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Portafolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="#">Sobre Mi</a>
                        <a class="nav-link" href="#">Experiencia</a>
                        <a class="nav-link disabled">Skils</a>
                    </div>
                    </div>
                </div>
                </nav>
        </div>
    )

};
