import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Contact from "./Contact";
import Mylist from "./MyList";
import Settings from "./Settings";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <ul>
            <li>
              <Link to="/myprofile/mylist">MyList</Link>
            </li>
            <li>
              <Link to="/myprofile/settings">Settings</Link>
            </li>
            <li>
              <Link to="/myprofile/contact">Contact</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/myprofile/mylist">
              <Mylist />
            </Route>
            <Route exact path="/myprofile/settings">
              <div>
                <Settings />
              </div>
            </Route>
            <Route exact path="/myprofile/contact">
              <div>
                <Contact />
              </div>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default MyProfile;
