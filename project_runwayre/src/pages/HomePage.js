import "./HomePage.css";

function HomePage() {
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
            <p>Status: </p>
        </div>
        <div id="runwayTwo" className="runwayIndividual">
            <p>Runway two</p>
            <p>Length: 2000m</p>
            <p>Status: </p>
        </div>
        </div>

        <div id="runwayBottom">
        <div id="runwayThree" className="runwayIndividual">
            <p>Runway three</p>
            <p>Length: 1500m</p>
            <p>Status: </p>
        </div>
        <div id="runwayFour" className="runwayIndividual">
            <p>Runway four</p>
            <p>Length: 1750m</p>
            <p>Status: </p>
        </div>
        </div>
        </div>
        </div>
    )
}

export default HomePage;