import React from "react";
import MainHero from "./home-com/MainHero";
import CurrentTech from "./home-com/CurrentTech"
import ProjectCards from "./home-com/ProjectCards"
import HomeAbout from "./home-com/HomeAbout"
import Edu from "./home-com/Edu"
import Connect from "./home-com/Connect"

function Home() {
    return (
        <div>
            <MainHero/>
            <CurrentTech/>
            <ProjectCards />
            <Edu />
            <HomeAbout />
            <Connect />
        </div>
    );
    }

export default Home;