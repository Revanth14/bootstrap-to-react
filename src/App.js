import React from "react"
import About from "./About";
import Master from "./Master";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Copyright from "./Copyright";
import Footer from "./Footer";

const App = () => {
    return (
        <div>
            <Navigation />
            <Master />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
            <Copyright />
        </div>
    )
}
export default App;