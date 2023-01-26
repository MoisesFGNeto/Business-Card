import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests"
import Footer from "./components/Footer"

function Page() {
    return (
        <body>
            <div className="wrapper">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
            </div>
        </body>
        
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page/>);

