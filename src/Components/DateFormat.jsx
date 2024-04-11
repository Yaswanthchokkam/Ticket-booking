import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function DateFormat() {
  const [currentDate, setCurrentDate] = useState(new Date());

  function handleNextClick() {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  }

  function handlePrevClick() {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  }

  function isFutureDate(date) {
    const today = new Date();
    return date >= today;
  }

  return (
    <Container fluid className="calender-container d-flex  mt-2 border p-4 gap-4">
      <Button variant="outline-success" className="calender-button" style={{fontSize:"30px"}} onClick={handlePrevClick}>
        &lt;
      </Button>
      <div variant="outline-success" className="dates-container  p-3 rounded">
        {
        isFutureDate(currentDate) ?(
          <Button variant="outline-success" ><Link className="link" to={`/seatings/${currentDate}`}>{currentDate.toDateString()}</Link></Button>
          
        ): <h4>Please select future dates only</h4>
       
        }
      </div>
      <Button variant="outline-success" className="calender-button" style={{fontSize:"30px"}} onClick={handleNextClick}>
        &gt;
      </Button>
    </Container>
  );
}
