import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import axios from "axios";

const DonorDonations = () => {
  const id = "6465bcdaf92f0b983050cb4e";

  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/donations/byadonor/" + id)
      .then((res) => {
        // console.log(res.data);
        return setDonations(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col md="9">
              <h2>My donations</h2>
              <br></br>
            </Col>
            <Col className="add-col">
              <Button variant="primary">
                <a
                  className="addDonations-btn"
                  href={`/create/donations/${id}`}
                >
                  +Add a Donation
                </a>
              </Button>
            </Col>
          </Row>

          <Row>
            <div className="active-pink-3 active-pink-4 mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table responsive="md" className="tbl-donordonations">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Donated dry food</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Expire date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donations, index) => {
                index++;
                if (donations.status != "Not accepted") {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{donations.currentdate}</td>
                      <td>{donations.food}</td>
                      <td>{donations.quantity}</td>
                      <td>{donations.unit}</td>
                      <td>{donations.expiredate}</td>
                      <td>{donations.status}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default DonorDonations;
