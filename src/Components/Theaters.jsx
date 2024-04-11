import { useState, } from "react";
import { Button, Row, Col,Modal } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import { Link } from "react-router-dom";
import DateFormat from "./DateFormat";


export default function Theaters() {
  const [showModal, setShowModal] = useState(false);
  const[selectedtheater,setSelectedtheater]=useState(null);
  function handleClose(){
    setShowModal(false)
  }
  function handleShow(theatre){
    setSelectedtheater(theatre)
    setShowModal(true);
  }
  const [theaters, setTheaters] = useState([
    {
      movieName: "Family Star",
      movieTypes: ["Drama", "Action"],
      theatersInfo: [
        {
          name: "CineHub",
          showTimes: ["11:00 AM", "2:00 PM", "6:00 PM", "9:00 PM"],
        },
        {
          name: "Araveti",
          showTimes: ["10:00 AM", "1:00 PM", "5:00 PM", "8:00 PM"],
        },
      ],
    },
    // Add more theaters as needed
  ]);
  console.log(selectedtheater);
 

  return (
    <>
      <NavbarComponent />
      <div className="container-fluid p-3 border border-1 theaters" style={{ paddingLeft: "30px" }}>
        <h1>{theaters[0].movieName} - Telugu</h1>
        <div className="container-fluid d-flex gap-3">
          {theaters[0].movieTypes.map((type, index) => (
            <Button key={index} variant="outline-success" className="btn ">
              {type}
            </Button>
          ))}
        </div>
      </div>
      <DateFormat />
      <div className="container-fluid mt-2 p-4">
        {theaters.map((theater, tIndex) => (
          <div key={tIndex}>
            {theater.theatersInfo.map((theaterInfo, tiIndex) => (
              <div key={tiIndex} className="container-fluid border border-2 p-4 mb-3">
                <Row className="align-items-center">
                  <Col xs={12} sm={6} md={4} className="text-start mb-3 mb-md-0">
                    <h3>{theaterInfo.name}</h3>
                  </Col>
                  <Col xs={6} sm={1} md={1} className="text-center ">
                    {/* <Button variant="outline-success" className="mt-2">Info</Button> */}
                    <Button variant="outline-success" onClick={()=>handleShow(theaterInfo.name)}>
                     Info
                  </Button>

      <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
      {selectedtheater && (
        <>
        <Modal.Header closeButton>
          <Modal.Title>{selectedtheater}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <iframe className="gap-2 container " style={{paddingLeft:"20px"}} width={"400"} height={"200"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124738.36909928419!2d76.55328659449354!3d12.310801132066537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0x2b89ece8c0f8396d!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1691384120764!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
        </>
      )}
      </Modal>
                  </Col>
                  <Col xs={6} sm={3} md={6} className="text-center">
                    {theaterInfo.showTimes.map((time, index) => (
                      <Button key={index} variant="outline-success" className="btn me-2 mb-2">
                        <Link className="link" to={`/seatings/${theaterInfo.showTimes}`}>{time}</Link>  
                      </Button>
                    ))}
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
