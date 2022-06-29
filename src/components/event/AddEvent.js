import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import React from "react";


function AddEvent() {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [sepcialAppreance, setSpecialAppreance] = useState("");

  return (
    <>
      <p>{event}</p>
      <p>{date}</p>
      <p>{location}</p>
      <p>{description}</p>
      <p>{image}</p>
      <p>{price}</p>
      <p>{category}</p>
      <p>{sepcialAppreance}</p>


      <div className="container">
        <h1 className="text-center">Add Event</h1>
        <div className="from-group">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            placeholder="Event Name"
            onChange={(e) => setEvent(e.target.value)}
          />

          <label htmlFor="eventDate">Event Date</label>
          <input
            type="date"
            className="form-control"
            id="eventDate"
            placeholder="Event Date"
            onChange={(e) => setDate(e.target.value)}
          />

          <label htmlFor="eventLocation">Event Location</label>
          <input
            type="text"
            className="form-control"
            id="eventLocation"
            placeholder="Event Location"
            onChange={(e) => setLocation(e.target.value)}
          />

          <label htmlFor="eventDescription">Event Description</label>
          <textarea
            className="form-control"
            id="eventDescription"
            rows="3"
            placeholder="Event Description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="eventImage">Event Image</label>
          <input
            type="text"
            className="form-control"
            id="eventImage"
            placeholder="Event Image"
            onChange={(e) => setImage(e.target.value)}
          />

          <label htmlFor="eventPrice">Event Price</label>
          <input
            type="text"
            className="form-control"
            id="eventPrice"
            placeholder="Event Price"
            onChange={(e) => setPrice(e.target.value)}
          />

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              onChange={(e) => setCategory(e.target.value)}
            </Dropdown.Menu>
          </Dropdown>

          <label htmlFor="sepcialAppreance">Special Appreance</label>
          <input
            type="text"
            className="form-control"
            id="sepcialAppreance"
            placeholder="Special Appreance"
            onChange={(e) => setSpecialAppreance(e.target.value)}
          />
          <input type="submit" className="btn btn-primary mt-3" />
        </div>
      </div>
    </>
  );
}

export default AddEvent;
