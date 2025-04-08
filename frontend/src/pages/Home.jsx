import React from 'react'
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Anupsoni from '../assets/Images/hero-banner/anup_soni.webp'
import Extensive from '../assets/Images/hero-banner/extensive.png'
import Getconsult from '../assets/Images/hero-banner/get-consultacy.png'
import Inperson from '../assets/Images/hero-banner/in-person.png'
import { Form, Card } from "react-bootstrap";
import { Container, Row, Col, Stack } from 'react-bootstrap';
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
  { number: '2M+', label: 'Happy Patients', icon: '/icons/happy.svg' },
  { number: '150+', label: 'Clinics', icon: '/icons/clinic.svg' },
  { number: '45+', label: 'Cities', icon: '/icons/cities.svg' },
  { number: '150K+', label: 'Surgeries', icon: '/icons/surgery.svg' },
  { number: '400+', label: 'Doctors', icon: '/icons/doctors.svg' },
  { number: '800+', label: 'Hospitals', icon: '/icons/hospitals.svg' },
];

const reasons = [
  {
    number: '01.',
    title: 'Pristyn Care is COVID-19 safe',
    description: 'Your safety is taken care of by thermal screening, social distancing, sanitized clinics and hospital rooms, sterilized surgical equipment and mandatory PPE kits during surgery.',
  },
  {
    number: '02.',
    title: 'Assisted Surgery Experience',
    description: 'A dedicated Care Coordinator assists you throughout the surgery journey from insurance paperwork, to free commute from home to hospital & back and admission-discharge process at the hospital.',
  },
  {
    number: '03.',
    title: 'Medical Expertise With Technology',
    description: 'Our surgeons spend a lot of time with you to diagnose your condition. You are assisted in all pre-surgery medical diagnostics. We offer advanced laser and laparoscopic surgical treatment. Our procedures are USFDA approved.',
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

const Home = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleIcons = showAll ? icons : icons.slice(0, 6);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


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
                <h7>DOCTORS</h7>
              </div>

              <div className='common-div-doctor-dis-citi-div border-div space-div'>
                <h2>50 +</h2>
                <h7>DISEASES</h7>
              </div>

              <div className='common-div-doctor-dis-citi-div space-div'>
                <h2>45 +</h2>
                <h7>CITIES</h7>
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

                    className='m-1.5 consult-inperson-extensive-images'
                  />
                  <p>Get consultation for 50+ diseases across India</p>
                </div>
                <div className='d-flex'>
                  <Image
                    src={Inperson}

                    className='m-1.5 consult-inperson-extensive-images'
                  />
                  <p>In-person and online consultation with experienced doctors</p>
                </div>
                <div className='d-flex'>
                  <Image
                    src={Extensive}

                    className='m-1.5 consult-inperson-extensive-images'
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

          <div className="d-flex justify-content-center align-items-center  form-div" >
            <Card
              className='d-flex justify-content-center pb-5 px-4 form-card'>
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
                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="Mobile Number"
                  />
                  <label htmlFor="floatingPasswordCustom">Mobile Number</label>
                </Form.Floating>
                {/* <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Patient Name" />
                </Form.Group> */}

                {/* <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Mobile Number" />
                </Form.Group> */}

                <Form.Group className="mb-3">
                  <Form.Select>
                    <option>Select City</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Select>
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
          <Row className='mt-3'>
            {visibleIcons.map((item, idx) => (
              <Col key={idx} xs={6} sm={6} md={2} className="mb-4">
                <div className="icon-card ">
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

          <Container>
            <h3 className="text-center fw-bold mb-4">Our Specialities</h3>

            <div className="our-specialities-grid">
              {specialties.map((spec, idx) => (

                <Card key={idx} className="border-0 shadow-sm h-100">
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
          <iframe className='video-iframe' width="560" height="315" src="https://www.youtube.com/embed/yjFGWANEU7I?si=N_YjvycAOt4YmCRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      <div>
        <div className='our-patient-love-us'>
          <div>
            <h2>Our Patient Love Us</h2>
            <p>Based on 7699 Recommendation | Rated 5 Out of 5</p>
          </div>

          <div className='full-width-carousel-wrapper parent-carousel px-32'>
            <Carousel variant="dark" controls={false} interval={null} className="testimonial-carousel-wrapper bg-light py-5 slider">
              {testimonialChunks.map((chunk, index) => (
                <Carousel.Item key={index} className='carousel-item'>
                  <Row className="justify-content-center">
                    {chunk.map((testimonial, idx) => (
                      <Col key={idx} xs={12} md={6} lg={4} className="d-flex justify-content-center p-3">
                        <Card className="testimonial-card shadow-sm rounded-3 border-0" style={{ maxWidth: '500px', width: '100%' }}>
                          <Card.Body style={{ padding: '1.25rem' }}>
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
                            <Card.Text className="text-muted small mb-0">
                              City: {testimonial.city}
                            </Card.Text>
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
        <div>
          <Container className="stats-section">
            <h4 className="section-title">Pristyn Care in Numbers</h4>
            <Row className="stats-row">
              {stats.map((stat, index) => (
                <Col key={index} xs={12} sm={6} md={4}>
                  <Card className="stat-card">
                    <div className="stat-content">
                      <div>
                        <h4 className="stat-number">{stat.number}</h4>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                      <img src={stat.icon} alt={stat.label} className="stat-icon" />
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <div>
          <Container fluid className="why-section">
            <Row>
              {/* Left Side */}
              <Col md={4} className="why-left d-flex flex-column justify-content-center align-items-center text-center">
                <h4 className="why-title">Why Pristyn Care?</h4>
                <p className="why-subtitle">Delivering Seamless Surgical Experience in India</p>
                <Button variant="warning" className="why-btn">Book Free Appointment</Button>
              </Col>

              {/* Right Side */}
              <Col md={8} className="why-right">
                <Row>
                  {reasons.map((item, index) => (
                    <Col md={6} key={index} className="mb-4">
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
            <Container fluid className="abha-container">
              <Row className="align-items-center">
                {/* Left Image - Hand Holding Phone */}
                <Col md={3} className="text-center mb-4 mb-md-0">
                  <Image src={Abhaphone} alt="ABHA Phone" className="abha-image" fluid />
                </Col>

                {/* Center Text */}
                <Col md={6} className="text-center abha-text">
                  <h2>Create Your ABHA ( Health ID )</h2>
                  <p className="sub-text">Manage your health records digitally !</p>
                  <p className="approved">Approved By</p>
                  <Image src={NHA} alt="National Health Authority" className="nha-logo" />

                  <div className="store-buttons mt-3">
                    <Image src={Playstore} alt="Google Play" className="store-img" />
                    <Image src={Appstore} alt="App Store" className="store-img ms-3" />
                  </div>
                </Col>


                <Col md={3} className="text-center mt-4 mt-md-0">
                  <Image src={anupsoni} alt="Doctor" className="abha-image" fluid />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div>
          <section className="faq-wrapper">
            <Container className="py-5">
              <h3 className="text-center mb-4 faq-title">Frequently Asked Questions</h3>
              <Accordion defaultActiveKey="" flush>
                {faqs.map((question, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                    <Accordion.Header>
                      <span>{question}</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo et sapien blandit porta.
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Container>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home