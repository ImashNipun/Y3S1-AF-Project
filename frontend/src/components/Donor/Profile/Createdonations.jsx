import "./style.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { compareAsc, format } from "date-fns";
import axios from "axios";

const CreateDonations = () => {
  const [donations, setDonation] = useState({
    donorid: "447347505504",
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
  const dueDate = currDate.getDate()+7;

  const expDate = new Date(donations.expiredate);
  const correctDate = expDate.getDate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (correctDate >= dueDate) {
      axios
        .post("http://localhost:8000/api/donations", donations)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
    else{
      console.log("Can not donate");
    }
  };

  return (
    <Container fluid>
      <Row className="ps-5 pe-5 pt-3">
        <Col className="service-sec p-5">
          <Row className="m-5 bg-white">
            {/* Form column */}
            <Col md="6" className="colA-createdonations p-0">
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
            <Col className="colB-createdonations ps-5"></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateDonations;
