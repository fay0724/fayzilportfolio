import React from "react"
import { BrowserRouter } from "react-router-dom"

import {
    About,
    Contact,
    Experience,
    CV,
    Hero,
    Navbar,
    Skills,
    Education,
    Interests,
    StarsCanvas,
    Footer,
    Award,
} from "./components"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className="relative z-0 bg-primary">
                    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                        <Navbar />
                        <Hero />
                    </div>

                    <About />
                    <Experience />
                    <Education />
                    <Skills />
                    <Interests />
                    <Award />
                    <CV />

                    <div className="relative z-0">
                        <Contact />
                        <StarsCanvas />
                    </div>

                    <Footer />
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
