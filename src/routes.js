
import AboutUs from "./pages/LandingPages/AboutUs";
import ContactUs from "./pages/LandingPages/ContactUs";
import SignIn from "./pages/LandingPages/SignIn";
import SignUp from "./pages/LandingPages/Signup";


// Sections

const routes = [
  {
    name: "about us",
    route: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "contact us",
    route: "/contact-us",
    component: <ContactUs />,
  },
  {
    name: "sign in",
    route: "/sign-in",
    color: "primary",
    component: <SignIn />,
  },
  {
    name: "sign up",
    route: "/sign-up",
    color: "primary",
    component: <SignUp />,
  },
];

export default routes;
