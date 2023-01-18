import React from "react";
import './Navbar.css'
import logo from '../../images/care_home-removebg-preview.png'

export default function Navbar() {
    return (
        <>
            <>
                <>
                    {/* Navigation */}
                    <nav className="navbar navbar-expand-lg    text-white static-top">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                                <img
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
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" aria-current="page" href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" href="#">
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" href="#">
                                            Signup
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" href="#">
                                            Login
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" href="#">
                                        <i class="fa-brands fa-whatsapp"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" href="#">
                                        <i class="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" href="#">
                                        <i class="fa-brands fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" href="#">
                                        <i class="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    {/* <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dropdown
                                        </a>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="navbarDropdown"
                                        >
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </>

            </>

        </>
    )
}