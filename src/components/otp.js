import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const OTP = () => {
  const [number, setNumber] = useState();
  const [num, setNum] = useState();
  const axo = () => {};
  //   useEffect(
  //     (
  //     [])
  //   );
  const handleChange = (e) => {
    setNum(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(num);
    try {
      // if (window.confirm("Your OTP has been send")) {
      //   window.location.href = `/verify/?number=${num}`;

      axios({
        method: "GET",
        url: `http://localhost:4000/api/otp/login?phonenumber=${num}&channel=sms`,
        // headers: {
        //   phonenumber: "+9779860405567",
        //   channel: "sms",
        // },
      });
      {
        window.location.href = `/verify/?number=${num}`;
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container p-4" onSubmit={handleSubmit}>
      <h1>Two Factor Authentication</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Phonenumber</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter phone"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default OTP;
