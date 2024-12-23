
import './App.css';
import {useState, useEffect} from "react";


function App() {

    const [getColor, setColor] = useState("yellow");
    const coordinates = [[30, 53], [33, 50], [34, 47], [35, 44], [47, 59], [50, 56], [50, 53], [50, 50], [53, 47], [55, 44], [57, 41], [64, 56], [63, 59], [67, 53], [70, 50], [73, 47], [75, 44], [77, 41], [78, 38], [76, 35], [83, 59], [84, 56], [87, 53], [90, 50], [92, 47], [93, 43], [93, 40], [92, 37], [91, 34],]
    const [getDivs, setDivs] = useState([]);

    const [getTempor, setTempor] = useState(null);
    const [getCords, setCords] = useState([]);

    function add(item) {

        if (getTempor !== null) {
            let parameters =
                {
                    x: getCords[1],
                    y: getCords[0],
                    icon: item,
                }

            setDivs([...getDivs, parameters]);
            setTempor(null)
            setCords([])
        }
    }
    useEffect(() => {
    }, [getDivs])

    function getCoordinates(event) {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const tempDiv =
            <div className="place" style={{top: y,left: x, border: "1px solid red"}}/>

        setTempor(tempDiv);
        setCords([y, x]);
    }
function removeImg(index){
        let copy = getDivs;
        copy.splice(index, 1);
    console.log(getTempor);
        setDivs(copy);
}

    return (
        <div className="App">
            <div className="flex j-center a-center gap20">
                <div className="container forest">
                    <div onClick={getCoordinates} className="tree">
                        {coordinates.map((item, index) =>
                            <div key={index} className="light" style={{
                                backgroundColor: getColor,
                                boxShadow: "0 0px 8px 3px" + getColor,
                                top: item[0] + "%",
                                left: item[1] + "%"
                            }}></div>)}
                        {getTempor}
                        {getDivs.map((data, index) =>
                            <div key={index} className="place" onDoubleClick={()=>removeImg(index)} style={{top: data.y, left: data.x}}>{data.icon}</div>
                        )}

                    </div>
                </div>

                <div className="decor flex d-column">
                    <div onClick={() => add("🍭")} className="box">🍭</div>
                    <div onClick={() => add("🎀")} className="box">🎀</div>
                    <div onClick={() => add("🎁")} className="box">🎁</div>
                    <div onClick={() => add("❤️")} className="box">❤️</div>
                    <div onClick={() => add("🫎")} className="box">🫎</div>
                    <div onClick={() => add("🟣")} className="box">🟣</div>
                    <div onClick={() => add("⭐️")} className="box">⭐️</div>
                    <div onClick={() => add("🍬")} className="box">🍬</div>
                </div>
                <div className="light-color flex d-column">
                    <div className="box-light" onClick={() => setColor("#fffa0c")}
                         style={{backgroundColor: "#fffa0c", boxShadow: "0 0 8px 3px #fffa0c"}}></div>
                    <div className="box-light" onClick={() => setColor("#ffb3fb")}
                         style={{backgroundColor: "#ffb3fb", boxShadow: "0 0 8px 3px #ffb3fb"}}></div>
                    <div className="box-light" onClick={() => setColor("#02bbff")}
                         style={{backgroundColor: "#02bbff", boxShadow: "0 0 8px 3px #02bbff"}}></div>
                    <div className="box-light" onClick={() => setColor("#03e541")}
                         style={{backgroundColor: "#03e541", boxShadow: "0 0 8px 3px #03e541"}}></div>
                    <div className="box-light" onClick={() => setColor("#fd261c")}
                         style={{backgroundColor: "#fd261c", boxShadow: "0 0 8px 3px #fd261c"}}></div>
                    <div className="box-light" onClick={() => setColor("#d8fdfe")}
                         style={{backgroundColor: "#d8fdfe", boxShadow: "0 0 8px 3px #d8fdfe"}}></div>
                    <div className="box-light" onClick={() => setColor("#c16cfd")}
                         style={{backgroundColor: "#c16cfd", boxShadow: "0 0 8px 3px #c16cfd"}}></div>
                    <div className="box-light" onClick={() => setColor("#1df8b3")}
                         style={{backgroundColor: "#1df8b3", boxShadow: "0 0 8px 3px #1df8b3"}}></div>
                </div>
            </div>
        </div>
    );
}

export default App;
