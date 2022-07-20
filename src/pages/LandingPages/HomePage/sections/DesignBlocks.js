// react-router-dom components
import axios from "axios";
import React, { useEffect, useState } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBadge from "../../../../components/MKBadge";
import MKBox from "../../../../components/MKBox";
import MKTypography from "../../../../components/MKTypography";

// Presentation page components
import { CircularProgress, Link } from "@mui/material";
import ExampleCard from "../components/ExampleCard";

// Data
// import data from "./data/designBlocksData";
//  ----------------------- Edit For Event Section in  HomePage ------------------------
const DesignBlocks = () => {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  useEffect(() => {
    axios.get("http://localhost:5000/events/api/get-event", config).then((res) => {
      let program = res.data.events;
      setEvents(program);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/categories/api/categories").then((res) => {
      let programCategory = res.data.categories;
      setCategories(programCategory);
      console.log(programCategory);
    });
  }, []);

  let renderData = categories.map((category) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={category.id}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {category.name}
          </MKTypography>
          {/* <Grid item xs={2} lg={2}>
            <img src={category.image} alt="" srcset="" />
          </Grid> */}
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {events.map((event) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={event.id}>
              <Link to={event.id}>
                <ExampleCard
                  image={event.eventImage}
                  name={event.title}
                  count={`Rs.${event.ticketPrice}`}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  if (events.length === 0) {
    return (
      <Grid container justifyContent="center" alignItems="center">
        <CircularProgress />
      </Grid>
    );
  }
  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Infinite combinations"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Huge collection of sections
          </MKTypography>
          <MKTypography variant="body1" color="text">
            We have created multiple options for you to put together and customise into pixel
            perfect pages.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
};

export default DesignBlocks;
