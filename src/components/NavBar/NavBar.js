import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import routes from "../../routes";


function NavBar() {
  return <DefaultNavbar routes={routes} sticky />;
}

export default NavBar;
