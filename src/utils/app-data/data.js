import trackerjs from "./Trackerjs.png";
import CTCI from "./CTCI.png";
import xphelippe from "./xphelippe.png";
import chessinjava from "./chessinjava.JPG";
import flylikeaphoenix from "./flylikeaphoenix.png";

// image requirements
// 4:3

const data = [
  {
    title: "TrackerJS",
    description:
      "A fun application designed to help you track your progress towards a habit. See how you've progressed over the day, week, month, and year!",
    img: trackerjs,
    skills: ["React"],
    hasSourceLink: true,
    sourceLink: "https://github.com/xPhelippe/TrackerJS",
    hasDemoLink: true,
    demoLink: "https://trackerjs.xphelippe.com/",
  },
  {
    title: "xPhelippe.com",
    description:
      "Running on an AWS EC2 instance, nginx reroutes traffic between all hosted projects.",
    img: xphelippe,
    skills: ["React", "AWS EC2", "nginx"],
    hasSourceLink: true,
    sourceLink: "https://github.com/xPhelippe/TrackerJS",
    hasDemoLink: false,
  },
  {
    title: "Coding Interview Questions",
    description:
      "A repository holding my solutions to interview questions. Most questions come from Cracking the Coding Interview and are coded in Python.",
    img: CTCI,
    skills: ["Data Structures and Algorithms", "replit", "Python"],
    hasSourceLink: true,
    sourceLink: "https://github.com/xPhelippe/CodingInterviewQuestions",
    hasDemoLink: false,
    demoLink: "",
  },
  {
    title: "Chess in Java",
    description:
      "The title says it all. A passion project I had on my mind for a while. Watching Queens Gambit gave me the final burst of motivation to finish it.",
    img: chessinjava,
    skills: ["Java", "OOP"],
    hasSourceLink: true,
    sourceLink: "https://github.com/xPhelippe/ChessInJava",
    hasDemoLink: false,
    demoLink: "",
  },
  {
    title: "Fly Like a Phoenix",
    description:
      "My first project working with graphs. This was a assignment from my Data Structures and Algorithms class and gave me an affinity for graphs and their many wonders. The premise was to determine the most efficient flight paths based on 3 metrics (cost, distance, and time). Take a look if you'd like to review your graph theory.",
    img: flylikeaphoenix,
    skills: ["C++", "Data Structures and algorithms"],
    hasSourceLink: true,
    sourceLink: "https://github.com/xPhelippe/GraphAssignment",
    hasDemoLink: false,
    demoLink: "",
  },
];

export default data;
