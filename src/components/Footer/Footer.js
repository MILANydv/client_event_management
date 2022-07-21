import MKBox from '../../components/MKBox';
import DefaultFooter from "../../examples/Footers/DefaultFooter";
import footerRoutes from '../../footer.routes';

function Footer() {
  return (
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
  )
}

export default Footer