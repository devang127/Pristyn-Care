import React from 'react'
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const   Home = () => {
  return (
    <div style={{ backgroundColor: '#E7F3F7' }}>
        <div className='d-flex justify-content-around'>
            {/* left div */}
            <div>
              <div>
                <h1>Surgery Matlab</h1>
                <h1>Pristyn Care</h1>
              </div>

              <div className='d-flex '>
                <div className='me-3'>
                  <h2>400 +</h2>
                  <h7>DOCTORS</h7>
                </div>

                <div className='me-3'>
                  <h2>50 +</h2>
                  <h7>DISEASES</h7>
                </div>

                <div>
                  <h2>45 +</h2>
                  <h7>CITIES</h7>
                </div>
              </div>

              <div>
                <Button variant="primary" className='border-0 shadow-none fw-bold' style={{ backgroundColor: '#ff8300', color: 'white' }}>
                  Call Us : 8527-488-190
                </Button>
              </div>

              <div>
                <div>
                  <span className='fw-semibold'>Book Appointments With Our Expert Doctors Near You</span>
                </div>
                <div>
                  <div className='d-flex'>
                    <Image
                      src='https://img.pristyncare.com/HomePage%2FComponent%2017%20–%201%403x.png'
                      width={31} 
                      height={18}
                      className='me-3'
                      />
                    <p>Get consultation for 50+ diseases across India</p>
                  </div>
                  <div className='d-flex'>
                    <Image
                      src='https://img.pristyncare.com/HomePage%2Fdoctor%20(6)%403x.png'
                      width={31} 
                      height={18}
                      className='me-3'
                      />
                    <p>Get consultation for 50+ diseases across India</p>
                  </div>
                  <div className='d-flex'>
                    <Image
                      src='https://img.pristyncare.com/HomePage%2FComponent%2016%20%E2%80%93%201%403x.png'
                      width={31} 
                      height={18}
                      className='me-3'
                      />
                    <p>Get consultation for 50+ diseases across India</p>
                  </div>
                </div>
              </div>
            </div>
            {/* middle div */}
            <div>
              <Image 
                src="https://img.pristyncare.com/anup_soni.webp" 
                alt="Example" 
                fluid rounded 
                width={484} 
                height={450}
              />
            </div>
            {/* right div */}
            <div>
            right
            </div>
        </div>
    </div>
  )
}

export default Home