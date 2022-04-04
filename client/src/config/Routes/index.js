import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useEffect, useContext } from "react";
import Header from "../../components/Navbar/Header";

import PrivateRoute from "../../components/Route/PrivateRoute";
import { API, setAuthToken } from "../server";
import { AppContext } from "../../context/AppContext";

import Profile from "../../pages/user/Profile";

import Loading from "../../components/Loading";
import RollDice from "../../pages/user/RollDice";
import Home from "../../pages/Home";
import EditProfile from "../../pages/user/EditProfile";

import NotFound from "../../pages/NotFound";

// init token on axios every time the app is refreshed
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Routes = () => {
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, [state]);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await API.get("/check-auth");
        if (response.status === 404) {
          return dispatch({
            type: "AUTH_ERROR",
          });
        }
        let payload = response.data.data.user;
        payload.token = localStorage.token;

        dispatch({
          type: "USER_SUCCESS",
          payload,
        });
      } catch (error) {
        console.log(error);
      }
    };
    checkUser();
  }, []);

  return state.isLoading ? (
    <Loading />
  ) : (
    <div className="mt-5">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />

          <PrivateRoute exact path="/rolldice" component={RollDice} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/editprofile" component={EditProfile} />

          <Route>
            <Redirect to="/notfound" />
            <NotFound />
          </Route>
        </Switch>
        {/* <Footer style={{ marginTop: "100px" }} /> */}
      </Router>
    </div>
  );
};

export default Routes;
