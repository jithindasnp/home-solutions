import React from "react";
import './Navbar.css'
import logo from '../../images/care_home LOGO.png'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg   static-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img
                            id="logo"
                            src={logo}
                            alt="..."
                            height={60}
                            width={60}
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        id="navExpansionBtn"
                    >
                        <span className="navbar-toggler-icon">
                            <i className="fas fa-bars" style={{ color: "#fff", fontSize: 28 }} />
                        </span>

                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active  navbarText  fw-bold"  aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active  navbarText  fw-bold"  href="#about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active  navbarText  fw-bold"  href="/services">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active  navbarText  fw-bold"  href="/signup">
                                    Signup
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active  navbarText  fw-bold"  href="/login">
                                    Login
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active navbarText  fw-bold"  href="https://www.whatsapp.com/">
                                    <i class="fa-brands navIcons fa-whatsapp"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active navbarText  fw-bold"  href="https://www.instagram.com/">
                                    <i class="fa-brands navIcons fa-instagram"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active navbarText  fw-bold"  href="https://www.facebook.com/">
                                    <i class="fa-brands navIcons fa-facebook"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active navbarText  fw-bold"  href="https://www.twitter.com/">
                                    <i class="fa-brands navIcons fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}