import { Link, } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";


export default function LandingPage() {

    return (
        <div className="landingPageContainer">

            <Navbar />

    <div className="landingMainContainer">
    <div className="landingText">
    <h1>
    <span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones
    </h1>
    <p>Cover a distance by Apna Video Call</p>
    <div role="button" className="ctaBtn">
    <Link to="/auth">Get Started</Link>
    </div>
    </div>

        <div className="landingImage">
            <img src="/mobile.png" alt="Mobile" />
        </div>
    </div>

    </div>
    )
}