import React from 'react'
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
  });

  return (
    <Container fluid>
      <Row>
        <Col>
          <br></br>
          <h2>Accepted Donations</h2>
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
                <th>Expire date</th>
                {/* <th>Accept</th>
                <th>Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {donations.map((donations, index) => {
                index++;
                if (donations.donation.status == "Accepted") {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{donations.donation.currentdate}</td>
                      <td>{donations.donation.donorname}</td>
                      <td>{donations.donation.food}</td>
                      <td>{donations.donation.quantity}</td>
                      <td>{donations.donation.unit}</td>
                      <td>{donations.donation.expiredate}</td>
                      {/* <td>
                        <Button>Accept</Button>
                      </td>
                      <td>
                        <Button>Delete</Button>
                      </td> */}
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
}
