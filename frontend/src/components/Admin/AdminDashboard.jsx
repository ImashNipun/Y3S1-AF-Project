import React from "react";
import { Outlet } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap";
import "./adminDashboardStyle.css";
import Sidebar from "./Sidebar";
import AdminNavBar from "./AdminNavBar";

export default function AdminDashboard() {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col className="content-sec">
          <AdminNavBar />
          <Row>
            <Col className="mt-4 ms-4 me-4 admin-content">
              <Outlet/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
