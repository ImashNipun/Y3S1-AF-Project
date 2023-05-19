import "./style.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";

const NotAcceptDonations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/donations")
      .then((res) => {
        // console.log(res.data);
        setDonations(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAccept = async (value) => {
    await axios
      .patch("http://localhost:8000/api/donations/" + value._id, {
       status : "Accepted"
      })
      .then((res) => {
        console.log(res.data);
        // return setDonations([res.data]);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <br></br>
          <h2>Not accepted donations</h2>
          <br></br>
          <Table responsive="md" className="tbl-alldonors">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Donor name</th>
                <th>Dry food</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Expire date</th>
                <th>Accept</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donations, index) => {
                index++;
                if (donations.status == "Not accepted") {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{donations.currentdate}</td>
                      <td>{donations.donorname}</td>
                      <td>{donations.food}</td>
                      <td>{donations.quantity}</td>
                      <td>{donations.unit}</td>
                      <td>{donations.expiredate}</td>
                      <td>
                        <Button onClick={() => handleAccept(donations)}>
                          Accept
                        </Button>
                      </td>
                      <td>
                        <Button>Delete</Button>
                      </td>
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
export default NotAcceptDonations;
