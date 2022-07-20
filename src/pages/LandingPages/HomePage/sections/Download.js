// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "../../../../components/MKBox";
import MKButton from "../../../../components/MKButton";
import MKTypography from "../../../../components/MKTypography";

// Images
import bgImage from "../../../../assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              Do you love this awesome
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
              Platfrom For your &amp; Events?
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              Organize and Attend Different events on our Platform,Completely Designed and Developed
              in Nepal. We believe in the power of technology to make the world a better place.
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="/"
              sx={{ mb: 2 }}
            >
              Start Now
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              Completed Using these technologies
            </MKTypography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} lg={2}>
                <Tooltip title="Bootstrap 5 - Most popular front-end component library">
                  <MKBox component="a" href="https://getbootstrap.com/" target="_blank">
                    <MKBox
                      component="img"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/bootstrap5.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://www.joykal.com/wp-content/uploads/2019/09/mongodb.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ofbHq4R6SfxkX7vvLqWlbmc4gMATxvovxe3fR1xp0CAFYY5mv058VQrG3l8rSjS5IS0&usqp=CAU"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZxVauwvK9ORMtJaQf1oRvmaZhAHhx3feXyaleyiYd3Q3BnFrtqAvkN9K2F069mfwEFQ&usqp=CAU"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Download;
