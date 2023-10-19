import "./index.css";
import React from "react";
import Header from "../header";
import { Container } from "@mui/system";
import SlideShow from "../Slideshow";

function HomePage(props) {
    return (
        <>
            <Header />
            <Container maxWidth="sm" className="homePage">
                <div className="bio">
                    <p>
                        an avid developer who loves using STEM to make art and
                        help other people. HI David!
                    </p>
                    <br />
                    <p>
                        I always love watching chanels like Mark Rober and Stuff
                        Made Here, and hope to one day be as creative and
                        inspirational as they are. Please feel free to explore
                        my site and see a few of my creations.
                    </p>
                    <br />
                    <p>
                        I'm learning something new every day, so stop by again
                        sometime to see what's new.
                    </p>
                </div>
                <SlideShow />
            </Container>
        </>
    );
}

export default HomePage;
