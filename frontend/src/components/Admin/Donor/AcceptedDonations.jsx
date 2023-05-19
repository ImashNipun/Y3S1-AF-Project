import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";

export const AcceptedDonations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/donations")
      .then((res) => setDonations(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <br></br>
          <h2>Donations</h2>
          <br></br>
          <Table responsive="md" className="tbl-alldonors">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Donor name</th>
                <th>Dry food</th>
                <th>quantity</th>
                <th>Unit</th>
                <th>Status</th>
                <th>Expire date</th>
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
                      <td>{donations.donorname}</td>
                      <td>{donations.food}</td>
                      <td>{donations.quantity}</td>
                      <td>{donations.unit}</td>
                      <td>{donations.status}</td>
                      <td>{donations.expiredate}</td>
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
