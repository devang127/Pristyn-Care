
import React from 'react';
import { Container, Row, Col, Image, Nav, Stack } from 'react-bootstrap';

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'react-bootstrap-icons';
import '../styles/Footer.css'


function Footer() {

  const companyLinks = [
    { name: "Lybrate", href: "#lybrate" },
    { name: "BeatXP", href: "#beatxp" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
    { name: "Careers", href: "#careers" },
    { name: "English Blog", href: "#blog-en" },
    { name: "Hindi Blog", href: "#blog-hi" },
    { name: "Doctor Onboarding", href: "#onboarding" },
  ];

  const surgeryLinks = [
    { name: "Laser Surgery", href: "#laser" },
    { name: "Laparoscopy Surgery", href: "#laparoscopy" },
    { name: "Cosmetic Surgery", href: "#cosmetic" },
    { name: "Ear Surgery", href: "#ear" },
    { name: "Eye Surgery", href: "#eye" },
    { name: "Plastic Surgery", href: "#plastic" },
    { name: "Orthopedics Surgery", href: "#orthopedics" },
    { name: "Veins Surgery", href: "#veins" },
  ];

  const patientLinks = [
    { name: "FAQs", href: "#faq" },
    { name: "Patient Help", href: "#patient-help" },
    { name: "No Cost EMI", href: "#emi" },
    { name: "Find a Clinic", href: "#clinic" },
    { name: "Doctors Section", href: "#doctors" },
    { name: "Videos", href: "#videos" },
    { name: "Pristyn Care Dhaka", href: "#dhaka" },
  ];

  const otherLinks = [
    { name: "BMI Calculator", href: "#bmi" },
    { name: "Period Tracker", href: "#period" },
    { name: "Pregnancy Due Calculator", href: "#pregnancy" },
    { name: "Cost Index", href: "#cost" },
    { name: "All Treatments", href: "#treatments" },
  ];


  return (
    <footer  className="pt-4 pb-3 pt-md-5 footer-parent-div">
      <Container >
        <div className=''>
          <Row className="gy-4 mb-4 flex  justify-between">
            {/*Our Company */}
            <Col xs={6} sm={4} lg={2}>
              <h5 className="mb-3">Our Company</h5>
              <Nav className=" flex-column ">
                {companyLinks.map(link => (
                  <Nav.Link key={link.name} href={link.href} className="text-white-50 py-1 px-0 ">{link.name}</Nav.Link>
                ))}
              </Nav>
            </Col>

            {/*Surgery */}
            <Col xs={6} sm={4} lg={2}>
              <h5 className="mb-3">Surgery</h5>
              <Nav className="flex-column">
                {surgeryLinks.map(link => (
                  <Nav.Link key={link.name} href={link.href} className="text-white-50 py-1 px-0">{link.name}</Nav.Link>
                ))}
              </Nav>
            </Col>

            {/*For Patients */}
            <Col xs={6} sm={4} lg={2}>
              <h5 className="mb-3">For Patients</h5>
              <Nav className="flex-column">
                {patientLinks.map(link => (
                  <Nav.Link key={link.name} href={link.href} className="text-white-50 py-1 px-0">{link.name}</Nav.Link>
                ))}
              </Nav>
            </Col>

            {/*Other Links & Social */}
            <Col xs={6} sm={12} md={6} lg={3}>
              <h5 className="mb-3">Other Links</h5>
              <Nav className="flex-column">
                {otherLinks.map(link => (
                  <Nav.Link key={link.name} href={link.href} className="text-white-50 py-1 px-0">{link.name}</Nav.Link>
                ))}
              </Nav>
              <h5 className="mt-4 mb-3">Social Media</h5>
              <Nav className="flex-row gap-3">
                <Nav.Link href="#facebook" className="text-white fs-5 px-0"><Facebook /></Nav.Link>
                <Nav.Link href="#instagram" className="text-white fs-5 px-0"><Instagram /></Nav.Link>
                <Nav.Link href="#linkedin" className="text-white fs-5 px-0"><Linkedin /></Nav.Link>
                <Nav.Link href="#twitter" className="text-white fs-5 px-0"><Twitter /></Nav.Link>
                <Nav.Link href="#youtube" className="text-white fs-5 px-0"><Youtube /></Nav.Link>
              </Nav>
            </Col>
          </Row>


          <hr className="text-white-50 my-4" />


          <Row className="align-items-center">

            <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
              <p className="small mb-0 text-white-50">&copy; Copyright Pristyncare {new Date().getFullYear()}. All Right Reserved.</p>
            </Col>

            <Col md={6}>
              <Nav className="justify-content-center justify-content-md-end">
                <div className='me-4'>
                  <Nav.Item>
                    <Nav.Link href="#terms" className="text-white-50 small px-0">
                      Terms & Conditions
                    </Nav.Link>
                  </Nav.Item>
                </div>

                <div className='me-4'>
                  <Nav.Item>
                    <Nav.Link href="#privacy" className="text-white-50 small px-0">
                      Privacy Policy
                    </Nav.Link>
                  </Nav.Item>
                </div>

                <div className='me-4'>
                  <Nav.Item>
                    <Nav.Link href="#refund" className="text-white-50 small px-0">
                      Refund Policy
                    </Nav.Link>
                  </Nav.Item>
                </div>
              </Nav>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;