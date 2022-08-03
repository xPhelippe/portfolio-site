import "./index.css";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Chip } from "@mui/material";
import Container from "@mui/material/Container";

function AppCard(props) {
  return (
    <>
      <Container component="div" className="AppCards">
        <h1>{props.data.title}</h1>

        <div className="app-splitter">
          <div className="photo">
            <img src={props.data.img} alt={props.data.title}></img>
          </div>
          <div className="vl"></div>
          <div className="content">
            <p>{props.data.description}</p>
            <div className="buttons">
              {props.data.hasDemoLink && (
                <>
                  <a href={props.data.demoLink} target="_blank">
                    <Button color="secondary" variant="contained">
                      Demo
                    </Button>
                  </a>
                </>
              )}

              {props.data.hasSourceLink && (
                <>
                  <a href={props.data.sourceLink} target="_blank">
                    <Button color="secondary" variant="contained">
                      Source Code
                    </Button>
                  </a>
                </>
              )}
            </div>
            <div className="skills">
              <h3>Skills: </h3>
              {props.data.skills &&
                props.data.skills.map((skill) => {
                  return <Chip label={skill} />;
                })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AppCard;
