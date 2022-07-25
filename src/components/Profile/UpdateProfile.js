
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function UpdateProfile() {
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
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridticketPrice">
          <Form.Label>Ticket Price</Form.Label>
          <Form.Control
            type="ticketPrice"
            placeholder="Enter Ticket Price"
            onChange={(e) => setTicketPrice(e.target.value)}
          />
        </Form.Group>
      </Row>
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
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridSpecialAppereance">
          <Form.Label>Special Appereance</Form.Label>
          <Form.Control
            placeholder="Enter Special Guest"
            onChange={(e) => setSpecialAppereance(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select
            defaultValue="Choose..."
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Choose...</option>
            <option>62b5f6d60cfddb3fccc5685f</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>Event Date</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setEventDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridImage">
          <Form.Label>Event Image</Form.Label>

          <Form.Control
            type="file"
            accept="image/*"
            name="filename"
            onChange={fileChangeHandler}
          />
        </Form.Group>
      </Row>
      <Button type="submit" onClick={AddEvents}>
        Update Profile
      </Button>
    </Form>
  );
}

export default UpdateProfile;
