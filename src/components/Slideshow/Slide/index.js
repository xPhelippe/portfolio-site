import Container from "@mui/system/Container";
import { Button } from "@mui/material";
import "./index.css";

function Slide(props) {
    return (
        <>
            <Container className="slideContainer">
                <div className="slideFlex">
                    <h2>{props.data.title}</h2>
                    <img src={props.data.img} alt={props.data.title}></img>
                    <div className="buttons">
                        {props.data.hasDemoLink && (
                            <>
                                <a
                                    href={props.data.demoLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                    >
                                        Demo
                                    </Button>
                                </a>
                            </>
                        )}
                        {props.data.hasSourceLink && (
                            <>
                                <a
                                    href={props.data.sourceLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                    >
                                        Source Code
                                    </Button>
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Slide;
