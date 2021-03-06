import { React, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import LoginModal from "../Modal/LoginModal";
import RegisterModal from "../Modal/RegisterModal";

const Guest = (props) => {
  const [show, setShow] = useState(false);
  const [showRegis, setShowRegis] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowRegis = () => setShowRegis(true);
  const handleCloseRegis = () => setShowRegis(false);

  return (
    <div>
      <Nav>
        <Button
          onClick={handleShow}
          variant="outline-warning"
          className="btn outline-warning  px-4 ms-2 mb-2"
        >
          Login
        </Button>
        <Button
          onClick={handleShowRegis}
          variant="warning"
          className="btn btn-warning text-white px-4 ms-2 mb-2"
          style={{ fontWeight: "bold" }}
        >
          Register
        </Button>

        <LoginModal
          show={show}
          handleClose={handleClose}
          regis={handleShowRegis}
          setData={props.setData}
        />
        <RegisterModal
          show={showRegis}
          handleClose={handleCloseRegis}
          login={handleShow}
        />
      </Nav>
    </div>
  );
};

export default Guest;
