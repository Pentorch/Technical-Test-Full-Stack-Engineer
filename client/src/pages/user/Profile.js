import { useEffect, useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

import Avatar from "react-avatar";
import { API } from "../../config/server";

import { useHistory } from "react-router-dom";

function Profile() {
  const router = useHistory();
  const [profile, setProfile] = useState({});

  const [wait, setWait] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const getProfile = await API.get("/profile");

        setProfile(getProfile.data.data.users);
        // console.log("profile",profile)
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, [wait]);

  const editProfile = () => {
    router.push("/editprofile");
  };

  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  const path = "http://localhost:5000/uploads/";

  return (
    <Container>
      <Row>
        <Col md={4} className="justify-content-center mt-3">
          <h5 className="header3">
            <strong className="text-black">My Profile</strong>
          </h5>
          <Row className="mt-4">
            <Col md={5}>
              {profile.image ? (
                <img
                  src={path + profile.image}
                  alt="profile"
                  className="box-image img-fluid"
                  height={"160px"}
                />
              ) : (
                <Avatar
                  name={profile.username}
                  alt="profile"
                  className="box-image img-fluid"
                  height={"160px"}
                />
              )}
            </Col>
            <Col md={7}>
              <strong>Full Name</strong>
              <p>{profile.username}</p>
              <strong>Email</strong>
              <p>{profile.email}</p>
              <Button
                variant="warning"
                className="btn btn-warning text-white"
                style={{ width: "100%" }}
                onClick={editProfile}
              >
                Edit Profile
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
