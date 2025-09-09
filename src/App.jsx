import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { asyncPreloadProccess } from "./Action/isPreload/action";
import { asyncUnsetAuthUser } from "./Action/Authentic/action";

import Layout from "./Section/Layout";
import Home from "./Section/Home";
import Billboard from "./Section/Billboard";
import NewPage from "./Section/NewPage";
import Detail from "./Section/Detail";
import Login from "./Section/Login";
import Register from "./Section/Register";
import PropTypes from "prop-types";
import LoadingIndicator from "./Component/LoadingIndicator";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(asyncPreloadProccess());
  }

  handleSignOut = (e) => {
    e.preventDefault();
    this.props.dispatch(asyncUnsetAuthUser());
  };

  render() {
    const { authUser = null, isPreload = false } = this.props;

    if (isPreload) return <LoadingIndicator />;

    return (
      <>
        <LoadingIndicator />
        <div className="container-fluid">
          <Routes>
            {authUser === null && (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </>
            )}
            <Route
              path="/*"
              element={<Layout onSignOut={this.handleSignOut} />}
            >
              <Route index element={<Home />} />
              <Route path="create" element={<NewPage />} />
              <Route path="threads/:id" element={<Detail />} />
              <Route path="leaderboards" element={<Billboard />} />
            </Route>
          </Routes>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser,
  isPreload: state.isPreload,
});

App.propTypes = {
  authUser: PropTypes.object,
  isPreload: PropTypes.bool.isRequired,
  dispatch: PropTypes.func,
  login: PropTypes.func,
  register: PropTypes.func,
  loginSuccess: PropTypes.func,
  props: PropTypes,
};
export default connect(mapStateToProps)(App);
