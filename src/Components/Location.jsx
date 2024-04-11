import { Button, Modal, Form, FormControl } from "react-bootstrap";
import { useState } from "react";

export default function Location() {
    const [showModal, setShowModal] = useState(false);
    const[location,setLocation]=useState(null);
    const [locations, setLocations] = useState([
        { cityName: "Mumbai", cityImg: "https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png" },
        { cityName: "Delhi", cityImg: "https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png" },
        { cityName: "Bengaluru", cityImg: "https://in.bmscdn.com/m6/images/common-modules/regions/bang.png" },
        { cityName: "Hyderabad", cityImg: "https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png" },
    ]);

    function handleClose() {
        setShowModal(false);
    }

    function handleShow(id) {
        setLocations(location)
        setShowModal(true);
    }

    return (
        <div>
            <Modal.Body className="p-2  border">
                <Form className="d-flex flex-grow-1 justify-content-center ">
                    <FormControl
                        type="search"
                        placeholder="Search your Movies"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
                <h3 className="text-center pt-2">Popular Cities</h3>
                <p onClick={handleShow}>search</p>
                <div className="d-flex p-2 mt-3 justify-content-between border">
                
                {
                    
                    locations.map((locate, index) => (
                        <>
                        <div >
                        <h4 key={index}>{locate.cityName}</h4>
                        <img src={locate.cityImg} alt="" />
                        </div>
                        </>
                    ))
                }
                </div>
            </Modal.Body>
        </div>
    );
}
