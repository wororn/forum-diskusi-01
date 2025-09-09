
import { React,Route, Routes } from "react-router-dom";
import Navigation from "./Component/Navigation.js";
import Home from "./Section/Home";
import Billboard from "./Section/Billboard.js";
import NewPage from "./Section/NewPage";
import Detail from "./Section/Detail";
import LoginPage from "./Section/Login";
import RegisterPage from "./Section/Register";
import {  putAccessToken,fetchWithAuth } from "../src/Utils/api.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const { data } = await fetchWithAuth();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } =  await fetchWithAuth();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });

    putAccessToken("");
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <div className="forum-app">
          <header className="forum-app__header">
            <h1>Aplikasi Forum Diskusi</h1>
          </header>
          <main>
            <Routes>
              <Route
                path="/*"
                element={<LoginPage loginSuccess={this.onLoginSuccess} />}
              />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      );
    }

    return (
      <div className="forum-app">
        <header className="forum-app__header">
          <h1>Aplikasi Forum Diskusi</h1>
          <Navigation
            logout={this.onLogout}
            name={this.state.authedUser.name}
          />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboards" element={<Billboard />} />
            <Route path="/create" element={<NewPage />} />
            <Route path="/threads/:id" element={<Detail />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
