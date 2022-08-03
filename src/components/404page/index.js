import SmallHeader from "../small-header";
import "./index.css";
import lost from "./lost.jpeg";
import forest from "./forest.jpeg";

function NoPageFound(props) {
    return (
        <>
            <SmallHeader img={forest} />
            <div className="lostPage">
                <h1>404 Page not found</h1>
                <h3>Looks like you lost your way</h3>
                <img src={lost} alt="lost trail"></img>
            </div>
        </>
    );
}

export default NoPageFound;
