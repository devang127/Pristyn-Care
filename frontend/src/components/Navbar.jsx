
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Modal,
  Image,
  InputGroup
} from 'react-bootstrap';



function NavScrollExample() {
  const [showCityModal, setShowCityModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showDropdownPatients, setShowDropdownPatients] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedCity, setSelectedCity] = useState('Delhi');
  const handleShowCityModal = () => setShowCityModal(true);
  const handleCloseCityModal = () => setShowCityModal(false);

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    handleCloseCityModal();
    console.log("Selected city:", city);
  };

  const handleShowSearchModal = () => setShowSearchModal(true);
  const handleCloseSearchModal = () => setShowSearchModal(false);

  const handleSearchClick = (e) => {
    e.preventDefault();
    handleShowSearchModal();
  }

  const specialties = [
    {
      name: 'Proctology',
      items: [
        { name: 'Piles Treatment', href: '#proctology/piles' },
        { name: 'Fissure Surgery', href: '#proctology/fissure' },
        { name: 'Fistula Treatment', href: '#proctology/fistula' },
      ],
    },
    {
      name: 'Laparoscopy',
      items: [
        { name: 'Gallstone Surgery', href: '#laparoscopy/gallstone' },
        { name: 'Hernia Repair', href: '#laparoscopy/hernia' },
      ],
    },
    {
      name: 'Gynaecology',
      items: [
        { name: 'Hysterectomy', href: '#gynaecology/hysterectomy' },
        { name: 'Abortion/MTP', href: '#gynaecology/mtp' },
        { name: 'Vaginal Tightening', href: '#gynaecology/tightening' },
      ],
    },
    {
      name: 'ENT',
      items: [
        { name: 'Sinusitis Treatment', href: '#ent/sinusitis' },
        { name: 'Tonsillectomy', href: '#ent/tonsillectomy' },
      ],
    },
    {
      name: 'Urology',
      items: [
        { name: 'Kidney Stones', href: '#urology/kidney-stones' },
        { name: 'Circumcision', href: '#urology/circumcision' },
      ],
    },
    {
      name: 'Vascular',
      items: [
        { name: 'Varicose Veins', href: '#vascular/varicose' },
        { name: 'Spider Veins', href: '#vascular/spider' },
      ],
    },
    {
      name: 'Aesthetics',
      items: [
        { name: 'Liposuction', href: '#aesthetics/liposuction' },
        { name: 'Hair Transplant', href: '#aesthetics/hair' },
      ],
    },
    { name: 'Orthopedics', items: [{ name: 'Knee Replacement', href: '#ortho/knee' }] },
    { name: 'Ophthalmology', items: [{ name: 'LASIK', href: '#ophtha/lasik' }] },
    { name: 'Weight Loss', items: [{ name: 'Bariatric Surgery', href: '#weightloss/bariatric' }] },
    { name: 'Dermatology', items: [{ name: 'Acne Treatment', href: '#derma/acne' }] },
    { name: 'Wellness', items: [{ name: 'Health Checkup', href: '#wellness/checkup' }] },
  ];


  return (
    <>

      <div className="bg-[#00263e] text-white sticky top-0 z-50 xl:px-32">
        <Navbar expand="xl" variant="dark" className="py-2 ">
          <Container fluid className='px-3'>
            <div className="flex flex-col w-full xl:hidden py-2 ">
              <div className='flex flex-row justify-between items-center'>
                <div>
                  <Image
                    src="https://img.pristyncare.com/new_brand%2Felements%2Flogo.svg"
                    alt="Pristyn Care logo"
                    width="125"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant=""
                    className="text-white text-sm flex items-center gap-1 p-0 whitespace-nowrap hover:text-gray-300"
                  >
                    <div className='flex items-center'>
                      <img
                        width={18}
                        src="https://img.pristyncare.com/website-search-icon%2Flocation-icon.svg"
                        alt="Location"
                        className='me-2'
                      />
                      <div className='text-white'>
                        <span
                          variant=""
                          onClick={handleShow}
                          className='text-white p-0 shadow-none text-decoration-none d-flex align-items-center text-sm font-medium hover:text-gray-300 focus:outline-none'
                        >
                          Select City
                        </span>

                        <Offcanvas show={show} onHide={handleClose} placement='end' className="max-w-[500px] w-full">
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Select Your City</Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                          </Offcanvas.Body>
                        </Offcanvas>
                      </div>
                    </div>
                  </Button>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                </div>
              </div>
              <div className='w-full'>
                <InputGroup size='sm' className='d-none xl:flex'>
                  <Button
                    variant="light"
                    onClick={handleShowCityModal}
                    className="d-flex align-items-center px-2 py-1 rounded-none rounded-start border-0"
                  >
                    <div className="flex items-center justify-between text-black text-[13px] font-medium">
                      <span className="flex items-center me-2">
                        <img
                          width={12}
                          src="https://img.pristyncare.com/website-search-icon%2Flocation-icon.svg"
                          className="me-1"
                          alt=""
                        />
                        {selectedCity}
                      </span>
                      <img
                        width={15}
                        src="https://img.pristyncare.com/website-search-icon%2Fget-my-location.svg"
                        alt="Detect Location"
                      />
                    </div>
                  </Button>
                  <Form.Control
                    placeholder="Search disease, doctors, treatment"
                    aria-label="Search"
                    onClick={handleSearchClick}
                    readOnly
                    className="text-black text-sm focus:outline-none focus:ring-0 border-0"
                  />
                  <Button variant="light" className="rounded-end border-0" onClick={handleSearchClick}>
                    <img
                      src="https://img.pristyncare.com/website-search-icon%2Fsearch-icon.svg"
                      alt="Search"
                      width={16}
                    />
                  </Button>
                </InputGroup>
              </div>
            </div>

            {/* Desktop View */}
            <Navbar.Collapse id="navbarScroll">
              <div className="hidden xl:flex flex-row justify-between items-center w-full gap-4">
                <Navbar.Brand href="#home" className="me-4">
                  <Image
                    src="https://img.pristyncare.com/new_brand%2Felements%2Flogo.svg"
                    alt="Pristyn Care logo"
                    width="160"
                  />
                </Navbar.Brand>


                <Nav className="flex items-center gap-3 ">
                  <div className="  mx-4 max-w-xl">
                    <InputGroup size='sm' className=''>
                      <Button
                        variant="light"
                        onClick={handleShowCityModal}
                        className="d-flex align-items-center px-3  rounded-none rounded-start border-0"
                      >
                        <div className="flex items-center justify-between text-black text-sm font-medium">
                          <span className="flex items-center me-3">
                            <img
                              width={12}
                              src="https://img.pristyncare.com/website-search-icon%2Flocation-icon.svg"
                              className="me-1"
                              alt=""
                            />
                            {selectedCity}
                          </span>
                          <img
                            width={15}
                            src="https://img.pristyncare.com/website-search-icon%2Fget-my-location.svg"
                            alt="Detect Location"
                          />
                        </div>
                      </Button>
                      <Form.Control
                        placeholder="Search disease, doctors, treatment"
                        aria-label="Search"
                        onClick={handleSearchClick}
                        readOnly
                        className="text-black text-sm focus:outline-none focus:ring-0 border-0"
                      />
                      <Button variant="light" className="rounded-end border-0 px-3" onClick={handleSearchClick}>
                        <img
                          src="https://img.pristyncare.com/website-search-icon%2Fsearch-icon.svg"
                          alt="Search"
                          width={16}
                        />
                      </Button>
                    </InputGroup>
                  </div>


                  <Dropdown
                    onMouseEnter={() => setShowDropdownPatients(true)}
                    onMouseLeave={() => setShowDropdownPatients(false)}
                    show={showDropdownPatients}
                    className="d-inline-flex align-items-center">
                    <Dropdown.Toggle
                      variant="link"
                      id="dropdown-language"

                      className="text-white p-0 shadow-none text-decoration-none d-flex align-items-center text-sm font-medium hover:text-gray-300 focus:outline-none"
                    >
                      For Patients
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Video</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Cowin</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>


                  <Dropdown
                    onMouseEnter={() => setShowCompanyDropdown(true)}
                    onMouseLeave={() => setShowCompanyDropdown(false)}
                    show={showCompanyDropdown}
                    className="text-white p-0 text-sm fw-medium hover: focus-ring-0"
                  >
                    <Dropdown.Toggle
                      variant="link"
                      id="dropdown-language"

                      className="text-white p-0 shadow-none text-decoration-none d-flex align-items-center text-sm font-medium hover:text-gray-300 focus:outline-none"
                    >
                      Our Company
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/about">About Us</Dropdown.Item>
                      <Dropdown.Item href="#/careers">Careers</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>


                  <Button
                    variant="outline-light"
                    className="py-1 px-3 text-xs font-bold whitespace-nowrap"
                  >
                    Book Free Appointment
                  </Button>


                  <Dropdown className="d-inline-flex align-items-center no-outline">
                    <Dropdown.Toggle
                      variant=""
                      id="dropdown-language"
                      className="text-white p-0 shadow-none text-decoration-none d-flex align-items-center text-sm font-medium hover:text-gray-300 focus:outline-none"
                    >
                      <FontAwesomeIcon icon={faGlobe} className="me-1" />
                      English
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/en">English</Dropdown.Item>
                      <Dropdown.Item href="#/hi">Hindi</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Button
                    variant=""
                    className="text-white text-sm flex items-center gap-1 p-0 whitespace-nowrap hover:text-gray-300"

                  >
                    <div className='flex'>
                      <img
                        width={15}
                        src="https://img.pristyncare.com/New%20Homepage%20Images%2Fselect_city.svg"
                        alt="Select City"
                        className='me-1'
                      />
                      <div className='text-white'>
                        <span
                          variant=""
                          onClick={handleShow}
                          className='text-white p-0 shadow-none text-decoration-none d-flex align-items-center text-sm font-medium hover:text-gray-300 focus:outline-none'
                        >
                          Select City
                        </span>

                        <Offcanvas show={show} onHide={handleClose} placement='end'>
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Select Your City</Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                          </Offcanvas.Body>
                        </Offcanvas>
                      </div>
                    </div>
                  </Button>
                </Nav>
              </div>

            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* navbar end */}

        {/* City Selection Modal */}
        <Modal show={showCityModal} onHide={handleCloseCityModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Select City</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-grid gap-2">
              {['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune'].map((city, idx) => (
                <Button
                  key={idx}
                  variant="light"
                  onClick={() => handleSelectCity(city)}
                  className={selectedCity === city ? 'active' : ''}
                >
                  {city}
                </Button>
              ))}
            </div>
          </Modal.Body>
        </Modal>

        {/* Search Modal */}
        <Modal
          show={showSearchModal}
          onHide={handleCloseSearchModal}
          centered
          size="lg"
        >
          <Modal.Header closeButton>
            <InputGroup>
              <Button
                variant="light"
                onClick={() => { handleCloseSearchModal(); handleShowCityModal(); }}
                className="d-flex align-items-center px-2 py-1 rounded-none rounded-start border-0"
              >
                <span className="flex items-center me-2 text-black text-[13px] font-medium">
                  <img width={12} src="https://img.pristyncare.com/website-search-icon%2Flocation-icon.svg" className="me-1" alt="" />
                  {selectedCity}
                </span>
                <img width={15} src="https://img.pristyncare.com/website-search-icon%2Fget-my-location.svg" alt="Detect Location" />
              </Button>
              <Form.Control
                type="search"
                placeholder="Search disease, doctors, treatment"
                className="text-black text-sm focus:outline-none focus:ring-0 border-0"
                autoFocus
              />
              <Button variant="light" className="rounded-end border-0">
                <img src="https://img.pristyncare.com/website-search-icon%2Fsearch-icon.svg" alt="Search" width={16} />
              </Button>
            </InputGroup>
          </Modal.Header>
          <Modal.Body>
            <h6>In the Spotlight</h6>
            <div className="d-flex flex-wrap gap-2">
              {[
                'Circumcision', 'Cataract', 'Abortion', 'Lipoma',
                'Gallstone', 'Piles', 'Fissure', 'Gynecomastia',
                'Kidney Stone', 'Hernia'
              ].map((item, idx) => (
                <Button
                  key={idx}
                  variant="outline-secondary"
                  className="px-3 rounded-pill text-sm py-1"
                >
                  {item}
                </Button>
              ))}
            </div>
          </Modal.Body>
        </Modal>
      </div>
      {/* multiple dropdown section */}
      <div className='px-32 hidden xl:flex flex-row justify-between items-center w-full gap-4'>
        <Navbar variant="light" bg="white" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                {specialties.map((specialty, index) => (
                  <Nav.Item key={index} className="mx-lg-1 my-1 my-lg-0">
                    <Dropdown>
                      <Dropdown.Toggle

                        variant="link"
                        id={`dropdown-${specialty.name.toLowerCase()}`}

                        className="text-secondary text-decoration-none p-0 fw-normal"
                        style={{ fontSize: '0.85rem' }}
                      >
                        {specialty.name}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {specialty.items.map((item, itemIndex) => (
                          <Dropdown.Item
                            key={itemIndex}
                            href={item.href}

                          >
                            {item.name}
                          </Dropdown.Item>
                        ))}

                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav.Item>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* multiple dropdown section end */}
    </>
  );
}

export default NavScrollExample;
