
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CitySelector from './CitySelector';
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
import '../styles/Navbar.css'
import Logo from '../assets/Images/logo/logo.svg'
import Location from '../assets/Images/access/location-icon.svg'
import Mylocation from '../assets/Images/access/get-my-location.svg'
import Searchicon from '../assets/Images/access/search-icon.svg'
import Selectcity from '../assets/Images/access/select_city.svg'
import banglore from '../assets/Images/city/Bengaluru.png'
import Chennai from '../assets/Images/city/Chennai.png'
import Delhi from '../assets/Images/city/gurgaon.png'
import Gurgaon from '../assets/Images/city/Hyderabad.png'
import Kolkata from '../assets/Images/city/kolkata.png'
import Hyderabad from '../assets/Images/city/lucknow.png'
import Lucknow from '../assets/Images/city/mumbai.png'
import Mumbai from '../assets/Images/city/new_delhi.png'
import Pune from '../assets/Images/city/pune.png'

const popularCities = [
  { name: 'Bangalore', icon: banglore },
  { name: 'Chennai', icon: Chennai },
  { name: 'Delhi', icon: Delhi },
  { name: 'Gurgaon', icon: Gurgaon },
  { name: 'Hyderabad', icon: Kolkata },
  { name: 'Kolkata', icon: Hyderabad },
  { name: 'Lucknow', icon: Lucknow },
  { name: 'Mumbai', icon: Mumbai },
  { name: 'Pune', icon: Pune },
];

const otherCities = [
  'Agra', 'Ahmedabad', 'Bangalore', 'Bhopal', 'Bhubaneswar',
  'Chandigarh', 'Chennai', 'Coimbatore', 'Dehradun'
];


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
    handleCloseCityOffcanvas();
    console.log("Selected city:", city);
  };



  const [showSpecialtiesOffcanvas, setShowSpecialtiesOffcanvas] = useState(false);
  const handleCloseSpecialtiesOffcanvas = () => setShowSpecialtiesOffcanvas(false);
  const handleShowSpecialtiesOffcanvas = () => setShowSpecialtiesOffcanvas(true);


  const handleShowSearchModal = () => setShowSearchModal(true);
  const handleCloseSearchModal = () => setShowSearchModal(false);

  const handleSearchClick = (e) => {
    e.preventDefault();
    handleShowSearchModal();
  }





  const [search, setSearch] = useState('');
  const filteredOtherCities = otherCities.filter(city =>
    city.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
      <div className='sticky top-0 z-50'>
        <div className="bg-[#00263e] text-white xl:px-32">
          <Navbar expand="xl" variant="dark" className="py-2 ">
            <Container fluid className='px-3'>
              <div className="flex flex-col w-full xl:hidden py-2 ">
                <div className='flex flex-row justify-between items-center mobile-screen-navbar'>
                  <div>
                    <Image
                      src={Logo}
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
                        <Image
                          width={18}
                          src={Location}
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

                          <CitySelector />
                        </div>
                      </div>
                    </Button>
                    <Navbar.Toggle
                      aria-controls="specialties-offcanvas" // Controls the new offcanvas
                      onClick={handleShowSpecialtiesOffcanvas} // Explicitly set onClick
                      className="border-0 focus:outline-none focus:ring-0" // Basic styling
                    />
                  </div>
                </div>
                <div className='w-full mobile-screen-inputbar'>
                  <InputGroup size='sm' className='input-group xl:flex'>
                    <Button
                      variant="light"
                      onClick={handleShowCityModal}
                      className="d-flex align-items-center px-2 py-1 rounded-none rounded-start border-0"
                    >
                      <div className="flex items-center justify-between text-black text-[13px] font-medium">
                        <span className="flex items-center me-2">
                          <Image
                            width={12}
                            src={Location}
                            className="me-1"
                            alt=""
                          />
                          {selectedCity}
                        </span>
                        <Image
                          width={15}
                          src={Mylocation}
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
                      <Image
                        src={Searchicon}
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
                      src={Logo}
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
                              <Image
                                width={12}
                                src={Location}
                                className="me-1"
                                alt=""
                              />
                              {selectedCity}
                            </span>
                            <Image
                              width={15}
                              src={Mylocation}
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
                          <Image
                            src={Searchicon}
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
                      <Dropdown.Menu className='z-100'>
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
                        <Image
                          width={15}
                          src={Selectcity}
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

                          <Offcanvas show={show} onHide={handleClose} placement="end" className="city-selector-offcanvas">
                            <Offcanvas.Header closeButton>
                              <Offcanvas.Title className="city-selector-header">Select Your City</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                              <Form.Control
                                type="text"
                                placeholder="Search by city"
                                className="city-search-input mb-4"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                              />

                              <h6 className="fw-semibold mb-3">Popular Cities</h6>
                              <div className="d-flex flex-wrap gap-3">
                                {popularCities.map((city, idx) => (
                                  <div key={idx} className="popular-city-card">
                                    <img src={city.icon} alt={city.name} className="popular-city-img" />
                                    <span className="popular-city-name">{city.name}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="other-cities-section">
                                <h6 className="fw-semibold mt-4 mb-3">Other Cities</h6>
                                {filteredOtherCities.map((city, idx) => (
                                  <div key={idx} className="other-city-item">{city}</div>
                                ))}
                              </div>
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
                    <Image width={12} src={Location} className="me-1" alt="" />
                    {selectedCity}
                  </span>
                  <Image width={15} src={Mylocation} alt="Detect Location" />
                </Button>
                <Form.Control
                  type="search"
                  placeholder="Search disease, doctors, treatment"
                  className="text-black text-sm focus:outline-none focus:ring-0 border-0"
                  autoFocus
                />
                <Button variant="light" className="rounded-end border-0">
                  <Image src={Searchicon} alt="Search" width={16} />
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
        <div className='multiple-dropdown-section'>
          <div className='px-32 hidden xl:flex flex-row justify-between items-center  gap-4 '>
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
          <Offcanvas
            show={showSpecialtiesOffcanvas}
            onHide={handleCloseSpecialtiesOffcanvas}
            placement="end" 
            className="w-100 xs:flex md:hidden lg:hidden" 
            id="specialties-offcanvas"
            responsive="xl" 
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Our Specialities</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                {specialties.map((specialty, index) => (
                  <Nav.Item key={index} className="mb-2 border-bottom"> 
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="link"
                        id={`dropdown-mobile-${specialty.name.toLowerCase()}`} 
                        className="text-dark text-decoration-none d-block w-100 text-start p-2" 
                      >
                        {specialty.name}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="w-100 border-0 shadow-none position-relative"> 
                        {specialty.items.map((item, itemIndex) => (
                          <Dropdown.Item
                            key={itemIndex}
                            href={item.href}
                            onClick={handleCloseSpecialtiesOffcanvas} 
                            className="ps-4" 
                          >
                            {item.name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav.Item>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        {/* multiple dropdown section end */}
      </div>
    </>
  );
}

export default NavScrollExample;
