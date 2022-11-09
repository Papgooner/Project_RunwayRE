import "./HomePage.css";
import DataSet from "../components/dataSet";
import { useState } from "react";

function HomePage() {
    const [runwayOne, setRunwayOne] = useState("No Data");
    const [runwayTwo, setRunwayTwo] = useState("No Data");
    const [runwayThree, setRunwayThree] = useState("No Data");
    const [runwayFour, setRunwayFour] = useState("No Data");

    function getData(received) {
        console.log(received);
        setRunwayOne(received[0].status);
        setRunwayTwo(received[1].status);
        setRunwayThree(received[2].status);
    };
    return (
            <div id="homePageDiv">
                <div id="titleDiv">
        <h1 id="title">Project RunwayRE</h1>
        </div>
        <div id="runwayDiv">
        <div id="runwayTop">
        <div id="runwayOne" className="runwayIndividual">
            <p>Runway one</p>
            <p>Length: 1000m</p>
            <p>Status: {runwayOne} </p>
        </div>
        <div id="runwayTwo" className="runwayIndividual">
            <p>Runway two</p>
            <p>Length: 2000m</p>
            <p>Status: {runwayTwo} </p>
        </div>
        </div>

        <div id="runwayBottom">
        <div id="runwayThree" className="runwayIndividual">
            <p>Runway three</p>
            <p>Length: 1500m</p>
            <p>Status: {runwayThree} </p>
        </div>
        <div id="runwayFour" className="runwayIndividual">
            <p>Runway four</p>
            <p>Length: 1750m</p>
            <p>Status: {runwayFour} </p>
        </div>
        </div>
        </div>
        <DataSet passUp={getData} />
        </div>
    )
}

export default HomePage;