function DataSet(props) {
    let data = [
        {
            runway: "RunwayOne",
            status: "CLEAR",
        },
        {
            runway: "RunwayTwo",
            status: "BUSY",
        },
        {
            runway: "RunwayThree",
            status: "EMERGENCY",
        },
    ];
    props.passUp(data);
}

export default DataSet;