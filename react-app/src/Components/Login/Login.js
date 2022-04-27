import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  return (
    <div className="container">
      <h1
        style={{ color: "blue" }}
        className="shadow-sm mt-5 p-3 text-nowrap text-center rounded bg-light border "
      >
        Login
      </h1>
      <Row className="mt-5">
        <Col lg={6} className="p-5 m-auto shadow-sm rounded-lg">
          <form>
            <div className="mb-3 mt-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
