import React from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro/Intro";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <Intro />
            <About/>
            <Footer/>
        </>
    )
}


