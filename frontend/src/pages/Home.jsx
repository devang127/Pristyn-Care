import React from 'react'
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Anupsoni from '../assets/Images/hero-banner/anup_soni.webp'
import Extensive from '../assets/Images/hero-banner/extensive.png'
import Getconsult from '../assets/Images/hero-banner/get-consultacy.png'
import Inperson from '../assets/Images/hero-banner/in-person.png'
import { Form, Card, Collapse, Container, Row, Col, Stack, Badge } from "react-bootstrap";
import { BsGeoAltFill, BsTelephoneFill } from 'react-icons/bs';
import Location from '../assets/Images/access/location-icon.svg'
import Logo from '../assets/Images/logo/logo.svg'
import WhitePlaystore from '../assets/Images/access/white-playstore.png'
import WhiteAppstore from '../assets/Images/access/white-appstore.png'
import '../styles/Home.css'
import '../styles/IconGrid.css'
import right_arrow from '../assets/Images/access/specialityArrow.svg'
import piles from '../assets/Images/diseases-images/piles.svg'
import proc from '../assets/Images/our specialities/Proctology.png'
import lapa from '../assets/Images/our specialities/Laparoscopy_20.png'
import gyna from '../assets/Images/our specialities/Gynaecology_20.png'
import ent from '../assets/Images/our specialities/ENT.jpg'
import urol from '../assets/Images/our specialities/Urology_20.png'
import vasc from '../assets/Images/our specialities/Vascular_20.png'
import aest from '../assets/Images/our specialities/Aesthetic-Category.jpg'
import ortho from '../assets/Images/our specialities/Orthopedics.jpg'
import opth from '../assets/Images/our specialities/Ophtha.jpg'
import weight from '../assets/Images/our specialities/weight-loss_GMB.jpg'
import Carousel from 'react-bootstrap/Carousel';
import NHA from '../assets/Images/access/ABHA.png'
import anupsoni from '../assets/Images/hero-banner/anup_soni.webp'
import Abhaphone from '../assets/Images/access/abhaphone.png'
import Playstore from '../assets/Images/access/playstore.png'
import Appstore from '../assets/Images/access/appstore.png'
import wheelchair from '../assets/Images/access/wheelchair.svg'
import Clinics from '../assets/Images/access/buldings.svg'
import Cities from '../assets/Images/access/map.svg'
import Surgeries from '../assets/Images/access/surgeries.svg'
import Doctors from '../assets/Images/access/doctors.svg'
import Hospitals from '../assets/Images/access/hospitals.svg'
import Hospital_image from '../assets/Images/our-hospital/hospital-image-card.jpg'
import star from '../assets/Images/access/star.svg'
import NABH from '../assets/Images/access/NABH.svg'
import beds from '../assets/Images/access/bed.svg'
import clock from '../assets/Images/access/clock.svg'
import Direction from '../assets/Images/access/direction.png'
import Call from '../assets/Images/access/phone.svg'
import '../styles/Schedule.css'
import '../styles/Faq.css'
import $ from 'jquery';
import Select from 'react-select2-wrapper';
import 'select2/dist/css/select2.min.css';

import '../styles/Hospital_image.css'
import { Accordion } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import { BsStarFill, BsHandThumbsUpFill } from 'react-icons/bs';

const icons = [
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
  { icon: piles, label: 'Piles' },
];

const specialties = [
  {
    title: 'Proctology',
    description: 'Specialised & advanced treatment for Anorectal Diseases ...',
    image: proc,
  },
  {
    title: 'Laparoscopy',
    description: 'Keyhole surgery for abdominal and pelvic disorders ...',
    image: lapa,
  },
  {
    title: 'Gynaecology',
    description: 'Treatment of diseases related to female reproductive organs ...',
    image: gyna,
  },
  {
    title: 'ENT (Ear, Nose, Throat)',
    description: 'Minimal access surgery (MIS) for ear, nose and throat (ENT) issues ...',
    image: ent,
  },
  {
    title: 'Urology',
    description: 'Surgical treatment for urogenital issues in men and women ...',
    image: urol,
  },
  {
    title: 'Vascular',
    description: 'Surgical subspecialty that focuses on the vascular system ...',
    image: vasc,
  },
  {
    title: 'Aesthetics',
    description: 'Reconstruction or improvement of physical appearance ...',
    image: aest,
  },
  {
    title: 'Orthopedics (Bone and Joint)',
    description: 'Focuses on injuries and diseases of musculoskeletal system ...',
    image: ortho,
  },
  {
    title: 'Ophthalmology',
    description: 'Deals with the diagnosis and treatment of conditions related to the eyes ...',
    image: opth,
  },
  {
    title: 'Weight Loss',
    description: 'Advanced & scientifically proven bariatric surgery & gastric balloon treatment ...',
    image: weight,
  },
];

const testimonialsData = [
  { name: 'Anil Kumar', rating: 5, recommendation: true, review: 'He is an excellent doctor, 100% care taker', city: 'HYDERABAD' },
  { name: 'Sunita Patel', rating: 4, recommendation: false, review: 'A very knowledgeable and friendly professional. Helped me a lot.', city: 'MUMBAI' },
  { name: 'Rajesh Sharma', rating: 5, recommendation: true, review: 'Excellent service and very caring staff.', city: 'DELHI' },
  { name: 'Priya Verma', rating: 5, recommendation: true, review: 'Highly recommended! The doctor was very thorough.', city: 'BANGALORE' },
  { name: 'Amit Singh', rating: 4, recommendation: true, review: 'Good experience overall.', city: 'CHENNAI' },
  { name: 'Sneha Gupta', rating: 5, recommendation: true, review: 'The treatment was effective and the doctor was very supportive.', city: 'KOLKATA' },
  { name: 'Kiran Yadav', rating: 5, recommendation: true, review: 'Best medical care I have received.', city: 'PUNE' },
  { name: 'Divya Joshi', rating: 4, recommendation: false, review: 'Satisfied with the consultation.', city: 'AHMEDABAD' },
  { name: 'Divya Joshi', rating: 4, recommendation: false, review: 'Satisfied with the consultation.', city: 'AHMEDABAD' },
];

const stats = [
  { number: '2M+', label: 'Happy Patients', icon: wheelchair },
  { number: '150+', label: 'Clinics', icon: Clinics },
  { number: '45+', label: 'Cities', icon: Cities },
  { number: '150K+', label: 'Surgeries', icon: Surgeries },
  { number: '400+', label: 'Doctors', icon: Doctors },
  { number: '800+', label: 'Hospitals', icon: Hospitals },
];

const reasons = [
  {
    number: '01.',
    title: 'Consultation For 50+ Diseases Across India',
    description: 'Pristyn Care provides consultation for 50+ diseases and treatments such as Piles, Hernia, Kidney Stones, Cataract, Gynecomastia, Abortion, etc. across 45+ major cities in India.',
  },
  {
    number: '02.',
    title: 'Medical Expertise With Technology',
    description: 'Our surgeons spend a lot of time with you to diagnose your condition. You are assisted in all pre-surgery medical diagnostics. We offer advanced laser and laparoscopic surgical treatment. Our procedures are USFDA approved.',
  },
  {
    number: '03.',
    title: 'Assisted Surgery Experience',
    description: 'A dedicated Care Coordinator assists you throughout the surgery journey from insurance paperwork, to free commute from home to hospital & back and admission-discharge process at the hospital.',
  },
  {
    number: '04.',
    title: 'Post Surgery Care',
    description: 'We offer free follow-up consultations and instructions including dietary tips as well as exercises to every patient to ensure they have a smooth recovery to their daily routines.',
  },
];

const faqs = [
  "How does a care coordinator help a patient at Pristyn Care?",
  "Does Pristyn Care provide any emergency surgical treatment?",
  "Does Pristyn Care have its own hospitals?",
  "Can I consult with a doctor online?",
  "Does Pristyn Care have insurance coverage for all surgeries?",
  "Does Pristyn Care provide a second opinion for any disease?",
];

const options = [
  { id: 1, text: 'Delhi' },
  { id: 2, text: 'Mumbai' },
  { id: 3, text: 'Bangalore' },
];

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleIcons = showAll ? icons : icons.slice(0, 6);
  const [open, setOpen] = useState(false);


  const testimonialChunks = [];
  for (let i = 0; i < testimonialsData.length; i += 3) {
    testimonialChunks.push(testimonialsData.slice(i, i + 3));
  }



  return (
    <>
      <div className='herobanner'>
        <div className=' herobanner-div'>
          {/* left div */}
          <div className='parent-left-div'>
            <div className='left-div'>
              <h1>Surgery Matlab</h1>
              <h1>Pristyn Care</h1>
            </div>

            <div className='d-flex doctor-dis-citi-div'>
              <div className='common-div-doctor-dis-citi-div border-div'>
                <h2>400 +</h2>
                <p>DOCTORS</p>
              </div>

              <div className='common-div-doctor-dis-citi-div border-div space-div'>
                <h2>50 +</h2>
                <p>DISEASES</p>
              </div>

              <div className='common-div-doctor-dis-citi-div space-div'>
                <h2>45 +</h2>
                <p>CITIES</p>
              </div>
            </div>

            <div className='call-us-button-div'>
              <Button className='call-us-button ' >
                Call Us : 8527-488-190
              </Button>
            </div>

            <div className='book-appointment-div'>
              <div className='m-1.5'>
                <span className='fw-semibold'>Book Appointments With Our Expert Doctors Near You</span>
              </div>
              <div className='consult-inperson-extensive-div'>
                <div className='d-flex'>
                  <Image
                    src={Getconsult}

                    className='m-1.5 consult-inperson-extensive-images me-2'
                  />
                  <p>Get consultation for 50+ diseases across India</p>
                </div>
                <div className='d-flex'>
                  <Image
                    src={Inperson}

                    className='m-1.5 consult-inperson-extensive-images me-2'
                  />
                  <p>In-person and online consultation with experienced doctors</p>
                </div>
                <div className='d-flex'>
                  <Image
                    src={Extensive}

                    className='m-1.5 consult-inperson-extensive-images me-2'
                  />
                  <p>Extensive medical assistance throughout your treatment</p>
                </div>
              </div>
            </div>
          </div>
          {/* middle div */}
          <div className='middle-div-image'>
            <Image
              src={Anupsoni}
              alt="Example"
              width={500}
              height={468}
              className='anup-soni-image'
            />
          </div>
          {/* right div */}
          <div className="d-flex justify-content-center align-items-center form-div" >
            <Card
              className='d-flex justify-content-center pb-4 px-4 form-card'>
              <div className='d-flex book-free-consultation-form-div'>
                <h5 className="text-center fw-bold mb-4 mt-4 ">Book Free Consultation</h5>
                <Image
                  src={Anupsoni}
                  className='m-1.5 anup-soni-hidden-image'
                />
              </div>
              <Form>
                <Form.Floating className="mb-3 floating-input">
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Patient Name"
                  />
                  <label htmlFor="floatingInputCustom">Patient Name</label>
                </Form.Floating>
                <Form.Floating className="mb-2">
                  <Form.Control
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="Mobile Number"
                  />
                  <label htmlFor="floatingPasswordCustom">Mobile Number</label>
                </Form.Floating>

                <Form.Group className="mb-2" controlId="citySelectGroup">
                  <Form.Select className='p-3'>
                    <option>Select Disease</option>
                    <option>Cardiology</option>
                    <option>Orthopedics</option>
                    <option>Dermatology</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Select className='p-3'>
                    <option>Select Disease</option>
                    <option>Cardiology</option>
                    <option>Orthopedics</option>
                    <option>Dermatology</option>
                  </Form.Select>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 fw-bold book-now-button"

                >
                  Book Now
                </Button>
              </Form>
            </Card>
          </div>
          <div className='call-us-button-div2 '>
            <Button variant="primary" className='call-us-button2'>
              Call Us : 8527-488-190
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Container className="icon-grid-container text-center ">
          <Row className='mt-2 mb-2 '>
            {visibleIcons.map((item, idx) => (
              <Col key={idx} xs={4} sm={6} md={2} className="mb-4 text ">
                <div className="icon-card icon-grid-row">
                  <Image variant="" src={item.icon} className="icon-img " />
                  <Card.Body>
                    <Card.Text className="icon-label">{item.label}</Card.Text>
                  </Card.Body>
                </div>
              </Col>
            ))}
          </Row>
          <div className="toggle-btn-wrapper mb-7">
            <Button
              variant="white"
              className="toggle-btn  view-more-button"
              onClick={() => setShowAll(!showAll)}
            >
              <div className='d-flex up-down-arrow'>
                {showAll ? 'View Less ' : 'View More '}
                {showAll ?
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" viewBox="0 3 20 16">
                    <path fillRule="#FF8300" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" viewBox="0 3 20 16">
                    <path fillRule="#FF8300" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                }
              </div>
            </Button>
          </div>
        </Container>
      </div>

      <div className="parent-div-specialities w-full">
        <section className="bg-light py-5 section-specialities">
          <Container className='speciality-container'>
            <h3 className="text-center fw-bold our-speciality">Our Specialities</h3>
            <div className="our-specialities-grid ">
              {specialties.map((spec, idx) => (

                <Card key={idx} className="border-0 shadow-sm h-100 ">
                  <Card.Body className="d-flex align-items-center">
                    <img
                      src={spec.image}
                      alt={spec.title}

                      className="rounded me-3 our-specialities-image"
                    />
                    <div className="flex-grow-1">
                      <div className='d-flex justify-content-between'>
                        <Card.Title className="mb-1 fw-semibold fs-6">
                          {spec.title}
                        </Card.Title>
                        <Image
                          src={right_arrow}
                        />
                      </div>
                      <Card.Text className="text-muted small mb-0">
                        {spec.description}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      </div>

      <div>
        <div className='d-flex watch-our-video'>
          <h3 className='watch-our-ads-h2'>Watch Our Ads</h3>
          <iframe className='video-iframe' width="560" height="315" src="https://www.youtube.com/embed/yjFGWANEU7I?si=N_YjvycAOt4YmCRs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>

      <div>
        <div className='our-patient-love-us'>
          <div className='d-flex our-patient-love-us-div'>
            <h4>Our Patient Love Us</h4>
            <p>Based on 7699 Recommendation | Rated 5 Out of 5</p>
          </div>

          <div className='full-width-carousel-wrapper parent-carousel'>
            <Carousel variant="dark" controls={false} interval={null} className="testimonial-carousel-wrapper py-5 px-3 slider d-flex">
              {testimonialChunks.map((chunk, index) => (
                <Carousel.Item key={index} className='carousel-item'>
                  <Row className="justify-content-center">
                    {chunk.map((testimonial, idx) => (
                      <Col key={idx} xs={12} md={6} lg={4} className="d-flex justify-content-center p-3">
                        <Card className="testimonial-card shadow-sm  border-0" style={{ maxWidth: '500px', width: '100%' }}>
                          <Card.Body className='card-body'>
                            <div>
                              <Stack direction="horizontal" gap={3} className="mb-3 align-items-center">
                                <div
                                  className="avatar-placeholder bg-secondary-subtle text-secondary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                  style={{ width: '45px', height: '45px', fontWeight: 500, fontSize: '1.1em' }}
                                >
                                  {testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                                </div>
                                <Stack gap={0} className="flex-grow-1">
                                  <Card.Title as="h6" className="mb-1 fw-semibold">{testimonial.name}</Card.Title>
                                  <Stack
                                    direction="horizontal"
                                    gap={2}
                                    className="rating-recommends flex-wrap align-items-center"
                                    style={{ fontSize: '0.85em' }}
                                  >
                                    <div className="text-warning">
                                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <i key={i} className="bi bi-star-fill me-1"></i>
                                      ))}
                                      {testimonial.rating < 5 && Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                                        <i key={i} className="bi bi-star me-1"></i>
                                      ))}
                                      <span className="ms-1 text-dark fw-medium">{testimonial.rating}/5</span>
                                    </div>
                                    {testimonial.recommendation && (
                                      <div className="text-success d-flex align-items-center">
                                        <i className="bi bi-hand-thumbs-up-fill me-1"></i>
                                        <span className="fw-medium">Recommends</span>
                                      </div>
                                    )}
                                  </Stack>
                                </Stack>
                              </Stack>
                              <Card.Text className="mb-3">
                                {testimonial.review}
                              </Card.Text>
                              <hr className="my-2" />
                            </div>
                            <div className='text-muted-div'>
                              <Card.Text className="text-muted small  mb-0">
                                City: {testimonial.city}
                              </Card.Text>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                    {chunk.length === 1 && (
                      <>
                        <Col lg={4}></Col>
                        <Col lg={4}></Col>
                      </>
                    )}
                    {chunk.length === 2 && (
                      <>
                        <Col lg={4}></Col>
                      </>
                    )}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <Button variant="white" className="toggle-btn  view-review me-2">
              View All Reviews
            </Button>
            <Button variant="white" className="toggle-btn  view-review2">
              Write A Review
            </Button>
          </div>

        </div>

        <div className='stats-section px-32'>
          {/* <Container className="stats-section"> */}
          <h4 className="section-title">Pristyn Care in Numbers</h4>
          <Row className="stats-row">
            {stats.map((stat, index) => (
              <Col key={index} xs={12} sm={6} md={4}>
                <Card className="stat-card">
                  <div className="stat-content">
                    <div>
                      <h2 className="stat-number">{stat.number}</h2>
                      <h4 className="stat-label">{stat.label}</h4>
                    </div>
                    <img src={stat.icon} alt={stat.label} className="stat-icon" />
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          {/* </Container> */}
        </div>

        <div className='hospital-div px-32'>
          {/* <Container className=" container-fluid hospital-card-container "> */}
          <Row>
            <Col md={12}>
              <h2 className='our-hospital-h2'>Our Hospital</h2>
            </Col>
          </Row>
          <Row className=''>
            <Col md={12} lg={12} className="">
              <Card className="hospital-card  ">
                <div className="image-container d-none d-sm-none d-md-none d-lg-flex">
                  <Image
                    src={Hospital_image}
                    alt="Pristyn Care Elantis Super Speciality Hospital"
                    className="card-img-top "
                  />
                </div>
                <Card.Body className='card-body-our-hospital'>
                  <div className='smaller-screen-div-for-responsive'>
                    <div className="image-container-onsmall-screen lg:hidden xl:hidden xxl:hidden me-3">
                      <Image
                        src={Hospital_image}
                        alt="Pristyn Care Elantis Super Speciality Hospital"
                        className="card-img-side "
                      />
                    </div>
                    <div className='our-hospital-smaller-screen-div'>
                      <Card.Title className="hospital-name">
                        Pristyn Care Elantis
                      </Card.Title>
                      <Badge bg='none' className="just-launched-badge">
                        Just Launched
                      </Badge>
                      <div className="rating">
                        <div className='count d-flex'>
                          <Image src={star} className='star-image' />
                          4.6/5
                        </div>
                        <span className="review-count">Reviews(6)</span>
                      </div>
                      <Card.Text className="address">
                        <Image src={Location} className='location' />
                        <span className='address-field'>
                          Address: 29, Ring Road, Block L, Lajpat Nagar, Delhi - 110024
                        </span>
                      </Card.Text>
                    </div>
                  </div>


                  <div className="info-badges d-flex">
                    <span className='NABH d-flex'>
                      <Image src={NABH} className='mr-1' />NABH</span>

                    <span className='beds d-flex'><Image src={beds} width={21} className='mr-1' />30+ Beds</span>

                    <span className='clock d-flex'><Image src={clock} width={21} className='mr-1' />24/7 Open</span>

                    <span className='more d-flex'>+1 More</span>
                  </div>
                  <Card.Text className="description">
                    Pristyn Care Elantis is dedicated to revolutionizing surgical care. We combine the latest medical technology with highly skilled professionals and a patient-centric approach to transform the healthcare experience. <a href="#read-more">Read More</a>
                  </Card.Text>
                  <div className="top-specialities">
                    <h5>Top Specialities</h5>
                    <div className="speciality-buttons">
                      <Button size="sm" className="me-2 mb-2 specialities-button">
                        Proctology
                      </Button>
                      <Button variant="none" size="sm" className="me-2 mb-2 specialities-button">
                        Urology
                      </Button>
                      <Button variant="none" size="sm" className="me-2 mb-2 specialities-button">
                        Laparoscopy
                      </Button>
                      <span size="sm" className="mb-2 more2 ">
                        +7 More
                      </span>
                    </div>
                  </div>
                  <div className="action-buttons">
                    <Button variant="none" className="me-2 get-direction">
                      <Image src={Direction} width={21} className='mr-1' /> Get Directions
                    </Button>
                    <Button variant="none" className='callus-button'>
                      <Image src={Call} width={21} className='mr-1' />Call Us
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* </Container> */}
        </div>


        <div className='why-parent-section'>
          <Container fluid className="why-section">
            <Row className='why-section-row'>
              {/* Left Side */}
              <Col md={12} lg={12} xl={4} className="why-left text-center">
                <h4 className="why-title">Why Pristyn Care?</h4>
                <p className="why-subtitle">Delivering Seamless Surgical Experience in India</p>
                <Button variant="warning" className="why-btn">Book Free Appointment</Button>
              </Col>

              {/* Right Side */}
              <Col md={12} lg={12} xl={8} className="why-right">
                <Row>
                  {reasons.map((item, index) => (
                    <Col md={6} key={index} className="">
                      <div className="reason-box">
                        <h2 className="reason-number">{item.number}</h2>
                        <h6 className="reason-title">{item.title}</h6>
                        <p className="reason-desc">{item.description}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <div className="abha-wrapper">
            <Container fluid className="abha-container d-none d-lg-block">
              <Row className="align-items-center abha-row">

                <Col md={3} className="text-center mb-4 mb-md-0 abha-div-image d-flex justify-content-end">
                  <Image src={Abhaphone} alt="ABHA Phone" className="abha-image1" fluid />
                </Col>

                {/* Center Text */}
                <Col md={4} className="text-center abha-text">
                  <div>
                    <h1 className='fw-bold abha-text-h1'>Create Your ABHA ( Health ID )</h1>
                    <h3 className="sub-text">Manage your health records digitally !</h3>
                  </div>
                  <div className='d-flex justify-content-center gap-3'>
                    <p className="approved">Approved By</p>
                    <Image src={NHA} alt="National Health Authority" className="nha-logo" />
                  </div>

                  <div className="store-buttons mt-3">
                    <Image src={Playstore} alt="Google Play" className="store-img" />
                    <Image src={Appstore} alt="App Store" className="store-img ms-3" />
                  </div>
                </Col>
                <Col md={4} className="text-center mt-4 mt-md-0 abha-div-image Z-100">
                  <Image src={anupsoni} alt="Doctor" className="abha-image" fluid />
                </Col>
              </Row>
            </Container>

            {/* for smaller div */}
            <div className='d-block d-lg-none'>
              <Card className="bg-dark text-white rounded-3 p-4" style={{ backgroundColor: '#00263A' }}>
                <Card.Body className='card-body-div align-items-center'>
                  <div className="mb-3">
                    <Image src={Logo} alt="Pristyn Care" height={24} />
                  </div>

                  <Card.Title className="fw-bold fs-5">
                    Create Your ABHA ( Health ID )
                  </Card.Title>
                  <Card.Text className="mb-4 fs-6">
                    Manage your health records digitally !
                  </Card.Text>
                  <Row className="d-flex align-items-center ">
                    <Col xs={8} md="auto" className=" mb-md-0">
                      <Button
                        variant="warning"
                        className="fw-semibold text-white text-center w-100 download-button"
                        style={{ borderRadius: '12px' }}
                      >
                        Download App Now &nbsp;
                        <i className="bi bi-apple"></i> &nbsp;
                        <i className="bi bi-android2"></i>
                      </Button>
                    </Col>
                    <Col xs="" className="text-center text-md-end">
                      <Image
                        src={NHA}
                        alt="National Health Authority"
                        width={90}
                        fluid
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
            {/* for smaller div end */}
          </div>
        </div>
        <div>
          <section className="faq-wrapper">
            <Container className="py-5 ">
              <h3 className="text-center mb-4 faq-title">Frequently Asked Questions</h3>
              <Accordion defaultActiveKey="" flush>
                {faqs.map((question, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                    <Accordion.Header>
                      <span className='question'>{question}</span>
                    </Accordion.Header>
                    <Accordion.Body className='accordion-body-div'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo et sapien blandit porta.
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Container>
          </section>
        </div>

        <div className='about-div '>
          <div className=" my-4">
            <h5><strong>About Pristyn Care</strong></h5>
            <p>
              Pristyn Care is a pioneering healthcare brand dedicated to revolutionizing the way surgical care is delivered in India. Founded with a vision to make advanced surgical care accessible and affordable to all, Pristyn Care combines cutting-edge medical technology, highly skilled professionals, and a patient-centric approach to transform the healthcare landscape. The brand’s mission is to simplify the patient journey, ensuring a seamless experience from diagnosis to recovery.
            </p>
            <p>
              At present, Pristyn Care operates via 150+ clinics and 800 + partner hospitals with a panel of 400+ super specialist surgeons who work exclusively for the company.
            </p>
            <p>
              Pristyn Care’s network exists across several metro cities of India, viz Mumbai, Pune, Delhi, Bangalore, Hyderabad, Chennai, and Kolkata; and in several Tier-2 and Tier-3 towns including Lucknow, Kanpur, Chandigarh, Jaipur, Indore, Nagpur, Bhopal, Ludhiana, Patna, Bhubaneswar, Coimbatore, Ahmedabad, Kochi, Vizag, Surat, Noida, Gurgaon, Faridabad, Ghaziabad.
            </p>

            <Collapse in={open}>
              <div>
                <p>
                  Pristyn Care’s comprehensive healthcare model focuses on providing minimally invasive surgical treatments across various specialties, including proctology, urology, ENT, gynecology, vascular diseases, and general surgery. These advanced techniques are designed to minimize pain, reduce recovery times, and improve overall outcomes, offering patients a higher standard of care.
                </p>
                <p>
                  The brand’s commitment to excellence is reflected in its team of expert surgeons, who are among the best in their respective fields. These professionals are trained in the latest surgical techniques and utilize state-of-the-art equipment to deliver optimal results. Pristyn Care’s surgeons are dedicated to providing personalized care, ensuring that each patient receives treatment tailored to their specific needs.
                </p>
                <p>
                  Through its innovative healthcare model, Pristyn Care is setting new benchmarks in the field of surgical care, making high-quality medical treatments more accessible and affordable. The brand’s unwavering commitment to patient satisfaction, combined with its use of advanced technology and skilled professionals, positions Pristyn Care as a leader in the healthcare industry.
                </p>

                <h6 className="mt-4"><strong>Treatment Categories at Pristyn Care</strong></h6>
                <p><strong>Proctology –</strong> Specializes in piles, fissures, fistulas...</p>
                <p><strong>Laparoscopic –</strong> Involves small incisions and the use of a laparoscope...</p>
                <p><strong>ENT (Ear, Nose, and Throat) –</strong> Comprehensive ENT treatments including tonsillitis, sinusitis...</p>
                <p><strong>Vascular –</strong> Treats varicose veins and thrombosis...</p>
                <p><strong>Gynecology –</strong> Includes ovarian cysts, fibroids, endometriosis...</p>
                <p><strong>Urology –</strong> Kidney stones, erectile dysfunction, etc...</p>
                <p><strong>Aesthetics –</strong> Liposuction, gynecomastia surgery...</p>
                <p><strong>Orthopedics –</strong> Joint replacement, ACL repair...</p>
                <p><strong>Ophthalmology –</strong> Cataracts, glaucoma, and other eye conditions...</p>

                <h5>
                  Expert Surgeons at Pristyn Care
                </h5>

                <p>
                  At Pristyn Care, we take pride in our team of over 400 highly skilled doctors, each a leader in their respective fields. Our expert surgeons are renowned for their exceptional medical expertise and extensive experience, ensuring top-notch care across a wide range of specialties. Whether it’s general surgery, gynecology, or any other area, our doctors are equipped with the latest techniques and technology to provide the best possible outcomes.
                </p>

                <p>
                  Our commitment to excellence means that you receive care from some of the best surgeons in the country, dedicated to achieving the highest standards of patient care. With a focus on minimally invasive procedures, our experts ensure faster recovery times and minimal discomfort, offering you a personalized approach to your health needs.
                </p>

                <h5>
                  Pristyn Care Revolutionising Laser and Laparoscopic Surgery in India
                </h5>
                <p>
                  At Pristyn Care, we are at the forefront of transforming surgical care with our advanced laser and laparoscopic techniques. Our modern-age methods harness cutting-edge technology to perform precise, minimally invasive procedures that significantly reduce recovery times and discomfort. By adopting these state-of-the-art techniques, we are redefining the standards of surgical care and offering our patients a more effective and efficient treatment experience.
                </p>
                <p>
                  We are changing the perception of surgical interventions in India by demonstrating that minimally invasive options can lead to exceptional outcomes. Our commitment to innovation ensures that patients benefit from less pain, faster healing, and improved results, setting new benchmarks in the field of surgery. At Pristyn Care, we’re not just keeping up with medical advancements—we’re leading the way.
                </p>
              </div>
            </Collapse>

            <Button
              variant="link"
              onClick={() => setOpen(!open)}
              aria-controls="about-collapse-text"
              aria-expanded={open}
              className="readme-button"
            >
              {open ? 'Read Less' : 'Read More'}
            </Button>
          </div>
        </div>

        <div className='d-flex justify-content-evenly parent-schedule'>
          <Container className=" get-in-touch-container">
            <Row className='get-in-touch-row d-md-block'>
              {/* <div className="column-div"> */}
              <Col lg={12} xl={8} xxl={8} >
                <h3 className="fw-bold mb-3">Get in Touch</h3>
                <p className="text-muted">
                  Tell us about your problems and we'll figure out the best treatment option for you.
                </p>

                <p className="fw-semibold mt-4">
                  Pristyn Care services are accessible Pan India
                </p>

                <p className="text-muted">
                  Pristyn Care has taken the latest medical technologies to ensure consistent quality of advanced surgical care in 45+ cities of India including{' '}
                  <span className="text-primary">Ahmedabad</span>, <span className="text-primary">Bangalore</span>, <span className="text-primary">Bhubaneswar</span>,{' '}
                  <span className="text-primary">Chandigarh</span>, <span className="text-primary">Chennai</span>, <span className="text-primary">Coimbatore</span>,{' '}
                  <span className="text-primary">Dehradun</span>, <span className="text-primary">Delhi</span>, <span className="text-primary">Faridabad</span>,{' '}
                  <span className="text-primary">Ghaziabad</span>, <span className="text-primary">Gurgaon</span>, <span className="text-primary">Hyderabad</span>,{' '}
                  <span className="text-primary">Indore</span>, <span className="text-primary">Jaipur</span>, <span className="text-primary">Kochi</span>,{' '}
                  <span className="text-primary">Kolkata</span>, <span className="text-primary">Kozhikode</span>, <span className="text-primary">Lucknow</span>,{' '}
                  <span className="text-primary">Ludhiana</span>, <span className="text-primary">Madurai</span>, <span className="text-primary">Meerut</span>,{' '}
                  <span className="text-primary">Mumbai</span>, <span className="text-primary">Nagpur</span>, <span className="text-primary">Nashik</span>,{' '}
                  <span className="text-primary">Noida</span>, <span className="text-primary">Patna</span>, <span className="text-primary">Pune</span>,{' '}
                  <span className="text-primary">Raipur</span>, <span className="text-primary">Ranchi</span>, <span className="text-primary">Thiruvananthapuram</span>,{' '}
                  <span className="text-primary">Vijayawada</span> and <span className="text-primary">Visakhapatnam</span>.
                </p>
              </Col>
              {/* </div> */}
            </Row>
          </Container>

          <Card
            className='d-flex justify-content-center pb-5 px-4 schedule-surgery-form'>
            <div className='d-flex book-free-consultation-form-div'>
              <h5 className="text-center fw-bold mb-4 mt-4 ">Let's Schedule Your Surgery</h5>
            </div>
            <Form>
              <Form.Floating className="mb-3 floating-input">
                <Form.Control
                  id="floatingInputCustom1"
                  type="text"
                  placeholder="Patient Name"
                />
                <label htmlFor="floatingInputCustom1">Patient Name</label>
              </Form.Floating>
              <Form.Floating className="mb-2">
                <Form.Control
                  id="floatingPasswordCustom2"
                  type="text"
                  placeholder="Mobile Number"
                />
                <label htmlFor="floatingPasswordCustom2">Mobile Number</label>
              </Form.Floating>
              <Form.Group className="mb-2" controlId="citySelectGroup">
                <Form.Select className='p-3'>
                  <option>Select Disease</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                  <option>Dermatology</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Select className='p-3'>
                  <option>Select Disease</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                  <option>Dermatology</option>
                </Form.Select>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 fw-bold book-now-button"
              >
                Book Now
              </Button>
            </Form>
          </Card>
        </div>

        <div className='d-md-flex justify-content-between align-items-center logo-appstore-playstore-div'>
          <div className='logo-div-top-footer'>
            <Image
              src={Logo}
            />
          </div>
          <div className='d-sm-flex align-items-center text-center gap-3 '>
            <h4 className='check-out-h4'>Check out our app!</h4>
            <div className=' d-md-flex playapp-logos gap-2'>
              <Image
                src={WhitePlaystore}
              />
              <Image
                src={WhiteAppstore}
              />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home