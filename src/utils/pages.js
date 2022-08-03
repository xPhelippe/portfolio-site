import HomePage from "../components/homePage";
import Apps from "../components/Apps";
import Contact from "../components/Contact";
import NoPageFound from "../components/404page";

const pages = [
    {
        title: "Home",
        link: "/home",
        component: HomePage,
    },
    {
        title: "Apps",
        link: "/apps",
        component: Apps,
    },
    // {
    //     title: 'HW Hacks',
    //     link: '/hwhacks',
    //     component: HomePage
    // },
    {
        title: "Contact",
        link: "/contact",
        component: Contact,
    },
];

export default pages;
