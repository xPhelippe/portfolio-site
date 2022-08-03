import { useEffect, useState, useRef } from "react";
import "./index.css";
import Slide from "./Slide";
import data from "../../utils/app-data/data";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];

function SlideShow(props) {
    const apps = data.slice(0, 3);
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 2500;

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        // clear previous timer before starting a new one
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) =>
                prevIndex === apps.length - 1 ? 0 : prevIndex + 1
            );
        }, delay);

        // for cleanup
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%,0,0)` }}
            >
                {apps.map((app, idx) => (
                    <div key={idx} className="slide">
                        <Slide data={app} />
                    </div>
                ))}
            </div>
            <div className="slideshowDots">
                {apps.map((_, idx) => {
                    const classes =
                        "slideshowDot" + (idx === index ? " active" : "");
                    return (
                        <div
                            key={idx}
                            className={classes}
                            onClick={(e) => setIndex(idx)}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}

export default SlideShow;
