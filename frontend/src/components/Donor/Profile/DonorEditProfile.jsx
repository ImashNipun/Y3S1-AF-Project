import "./style.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DonorEditProfile = () => {

  const id = "6465bcdaf92f0b983050cb4e";

  const [donor, setDonor] = useState({
    password: "",
    address: "",
    location: "",
    phonea: "",
    phoneb: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/donors/" + id)
      .then((res) => {
        return setDonor(res.data);
      })
      .catch((err) => console.log(err));
  },[]);

  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .patch("http://localhost:8000/api/donors/" + id, donor)
      .then((res) => {
        navigate(`/donor/profile/${id}`);
        console.log('updated');
        return setDonor(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container fluid>
      <Row className="donor-edit-prof-row">
        <Col>
          <Row>
            <h2>Edit profile</h2>
          </Row>

          <br></br>

          <Row>
            <Form onSubmit={handleUpdate}>
              {/* form lables */}

              <Row>
                {/* password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={donor.password}
                    onChange={(e) =>
                      setDonor({ ...donor, password: e.target.value })
                    }
                    required
                  />
                </Form.Group>
              </Row>

              {/* address */}
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  value={donor.address}
                  onChange={(e) =>
                    setDonor({ ...donor, address: e.target.value })
                  }
                  required
                />
              </Form.Group>

              {/* Location */}
              <Form.Group className="mb-3" controlId="formBasicLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Location"
                  value={donor.location}
                  onChange={(e) =>
                    setDonor({ ...donor, location: e.target.value })
                  }
                  required
                />
              </Form.Group>

              {/* phone 1 */}
              <Row>
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="6"
                  controlId="formBasicphoneA"
                >
                  <Form.Label>Phone number 1</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="94 77 111 2223"
                    value={donor.phonea}
                    pattern="94 [0-9]{2} [0-9]{3} [0-9]{4}"
                    onChange={(e) =>
                      setDonor({ ...donor, phonea: e.target.value })
                    }
                    required
                  />
                </Form.Group>

                {/* phone 2 */}
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="6"
                  controlId="formBasicphoneB"
                >
                  <Form.Label>Phone number 2</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="94 77 111 2223(Optional)"
                    value={donor.phoneb}
                    pattern="94 [0-9]{2} [0-9]{3} [0-9]{4}"
                    onChange={(e) =>
                      setDonor({ ...donor, phoneb: e.target.value })
                    }
                  />
                </Form.Group>
              </Row>

              {/* button */}
              <div className="edit-btn">
                <Button type="submit" id="formEditBtn">
                  Update
                </Button>
              </div>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DonorEditProfile;
