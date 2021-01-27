import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import queryString from "query-string";
import axios from "axios";

const Verify = ({ location }) => {
  const [num, setNum] = useState();
  const [otp, setOtp] = useState();

  useEffect(() => {
    const { number } = queryString.parse(location.search);
    setNum(number);
  });
  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(num);
    console.log(otp);
    let promise = axios({
      method: "GET",
      url: "http://localhost:4000/api/otp/verify",
      headers: {
        phonenumber: num,
        code: otp,
      },
    });
    console.log(promise);
    const printPromise = async () => {
      const a = await promise;
      console.log(a.data);
      if ((a.data = "OTP NOT VALID")) {
        window.alert("OTP NOT VALID");
      } else {
        window.location.href = "/";
      }
    };
    printPromise();
  };
  return (
    <>
      <h1>Enter Your OTP Code here</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>OTP Code</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter OTP"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Verify;
