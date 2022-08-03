import "./index.css";
import SmallHeader from "../small-header";
import hwy from "./highway.jpeg";
import { Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Contact(props) {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("success");

  const handleClose = () => {
    setAlert(false);

    // set timeout to wait until after snackbar fadeout animation
  };

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);

    const params = {
      user_name: name,
      user_email: email,
      subject: subject,
      message: msg,
    };

    const isnameEmpty = name.length <= 0;
    const isemailEmpty = email.length <= 0;
    const issubjectEmpty = subject.length <= 0;
    const ismsgEmpty = msg.length <= 0;

    if (isnameEmpty || isemailEmpty || issubjectEmpty || ismsgEmpty) {
      setAlertType("error");
      setAlertMsg("Please fill all fields");
      setAlert(true);

      return;
    }

    emailjs
      .send("service_hxl2y0q", "contact_form", params, "l2NSSm2BouDs-Jl_-")
      .then(
        function () {
          //reset components
          setName("");
          setEmail("");
          setSubject("");
          setMsg("");

          //set alert
          setAlertType("success");
          setAlertMsg("Thanks for the reaching out :)");
          setAlert(true);
        },
        function (error) {
          setAlertType("error");
          setAlertMsg("an error occured while sending your email");
          setAlert(true);
        }
      );
  };

  return (
    <>
      <SmallHeader img={hwy} />
      <div className="contact-me-info">
        <h1>Contact Me</h1>
        <p>Interested in collaborating? Send me an email to get in touch.</p>
      </div>

      <Container maxWidth="sm">
        <form ref={form} onSubmit={sendEmail}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                color="secondary"
                fullWidth
                label="Name"
                variant="outlined"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                type="email"
                color="secondary"
                fullWidth
                label="Email"
                variant="outlined"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                color="secondary"
                fullWidth
                label="Subject"
                variant="outlined"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                color="secondary"
                multiline
                minRows={7}
                maxRows={15}
                fullWidth
                label="Message"
                variant="outlined"
                name="message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
            </Grid>
            <Grid item xs={0} sm={9}></Grid>
            <Grid item xs={12} sm={3}>
              <Button
                type="submit"
                color="secondary"
                fullWidth
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>

      <Snackbar open={alert} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertType} variant="filled">
          {alertMsg}
        </Alert>
      </Snackbar>
      <br />
    </>
  );
}

export default Contact;
