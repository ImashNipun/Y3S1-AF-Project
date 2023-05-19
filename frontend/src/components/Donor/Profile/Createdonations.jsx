import "./style.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateDonations = () => {
  const id = "6465bcdaf92f0b983050cb4e";
  const [donations, setDonation] = useState({
    donorid: "6465bcdaf92f0b983050cb4e",
    donorname: "Shamal Aravinda",
    food: "",
    quantity: "",
    unit: "",
    expiredate: "",
    currentdate: format(new Date(), "yyyy-MM-dd"),
    status: "Not accepted",
    description: "",
  });

  const currDate = new Date(donations.currentdate);
  const dueDate = currDate.getDate() + 7;
  const dueMonth = currDate.getMonth();
  const dueyr = currDate.getFullYear();

  const expDate = new Date(donations.expiredate);
  const correctDate = expDate.getDate();
  const correctMonth = expDate.getMonth();
  const correctYr = expDate.getFullYear();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      correctDate >= dueDate ||
      correctMonth > dueMonth ||
      correctYr > dueyr
    ) {
      axios
        .post("http://localhost:8000/api/donations", donations)
        .then((res) => {
          console.log(res);
          navigate(`/donor/profile/${id}`);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Can not donate");
      navigate("/donationError");
    }
  };

  return (
    <Container fluid>
      <Row className="ps-5 pe-5 pt-3">
        <Col className="service-sec p-5">
          <Row className="m-5 bg-white">
            {/* Form column */}
            <Col md="6" className="colA-createdonations">
              <Form className="donation-frm" onSubmit={handleSubmit}>
                <h2>Create a Donation</h2>

                {/* form lables */}

                {/* food*/}
                <Form.Label>Donate dry food</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicFood">
                  <Form.Control
                    type="text"
                    placeholder="Enter dry food"
                    onChange={(e) =>
                      setDonation({ ...donations, food: e.target.value })
                    }
                    required
                  />
                </Form.Group>

                <Row>
                  {/*quatity*/}
                  <Col>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                      <Form.Control
                        type="number"
                        min="1"
                        placeholder="Enter Quantity"
                        onChange={(e) =>
                          setDonation({
                            ...donations,
                            quantity: e.target.value,
                          })
                        }
                        required
                      />
                    </Form.Group>
                  </Col>

                  {/*unit*/}
                  <Col>
                    <Form.Label>Unit</Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicUnit">
                      <Form.Select
                        onChange={(e) =>
                          setDonation({ ...donations, unit: e.target.value })
                        }
                        aria-label="Default select example"
                      >
                        <option value="Select value">Select unit type</option>
                        <option value="Kg">Kg</option>
                        <option value="Leters">Leters</option>
                        <option value="Packets">Packets</option>
                        <option value="Botteles">Botteles</option>
                        <option value="Items">Items</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                {/*expire date*/}
                <Form.Label>Expire date</Form.Label>
                <Form.Group
                  className="mb-3"
                  as={Col}
                  onChange={(e) =>
                    setDonation({ ...donations, expiredate: e.target.value })
                  }
                  controlId="formBasicExpdate"
                >
                  <Form.Control
                    type="date"
                    placeholder="Expire date"
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Description"
                    required
                    onChange={(e) =>
                      setDonation({ ...donations, description: e.target.value })
                    }
                  />
                </Form.Group>

                {/* button */}
                <div className="donation-submit-btn">
                  <Button type="submit" id="donatinSubmitBtn">
                    Create
                  </Button>
                </div>
                <br></br>
              </Form>
            </Col>
            {/* Form column */}

            {/* Donation list column column */}
            <Col className="colB-createdonations" md="6"></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateDonations;
