import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ChangePassword() {
  // useEffect(() => {
  //   axios.get("http://localhost:5000/categories/api/categories").then((res) => {
  //     let programCategory = res.data.categories;
  //     setCategories(programCategory);
  //   });
  // }, []);
  // // form submit
  // categories.map((category) => {
  //   console.log(category.name);
  // });

  const [title, setTitle] = useState();
  const [category, setCategory] = useState([]);
  const [content, setContent] = useState();
  const [location, setLocation] = useState();
  const [specialAppereance, setSpecialAppereance] = useState();
  const [ticketPrice, setTicketPrice] = useState();
  const [eventDate, setEventDate] = useState();

  const fileChangeHandler = (e) => {
    setEventImage(e.target.files[0]);
  };
  const [eventImage, setEventImage] = useState();

  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  const AddEvents = async (e) => {
    try {
      e.preventDefault();
      // stop the form from reloading the page
      const data = {
        title: title,
        content: content,
        location: location,
        specialAppereance: specialAppereance,
        ticketPrice: ticketPrice,
        eventDate: eventDate,
        category: category,
        eventImage: eventImage,
      };
      console.log(data);
      await axios
        .post("http://localhost:5000/events/api/create-event", data, config)
        .then((res) => {
          if (res.data.success === true) {
            window.location.replace("/user");
          }
        });
    } catch (err) {
      console.log(err);
      alert(Response.data.message);
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGridContent">
        <Form.Label>Description</Form.Label>
        <Form.Control
          placeholder=""
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridContent">
        <Form.Label>Description</Form.Label>
        <Form.Control
          placeholder="Describe the Event"
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control
          placeholder="Softwarica College(Block E), DilliBazar, Kathmandu"
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>

      <Button type="submit" onClick={AddEvents}>
        Update Profile
      </Button>
    </Form>
  );
}

export default ChangePassword;
