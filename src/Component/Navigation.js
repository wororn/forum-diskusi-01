import { Link } from "react-router-dom";
import { PiWechatLogoBold } from "react-icons/pi";
import { MdOutlineLeaderboard, MdOutlinePostAdd } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

const Navigation = ({ authUser = {}, logout }) => {
  const { name = "User", avatar = "" } = authUser;

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
            title={name}
            className="rounded-circle"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          <span className="text-dark ms-3 fw-semibold">Welcome, {name}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <PiWechatLogoBold /> Threads
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leaderboards">
                <MdOutlineLeaderboard /> Billboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                <MdOutlinePostAdd /> Create
              </Link>
            </li>
          </ul>
          <button
            onClick={logout}
            title="Logout"
            className="btn btn-danger rounded ms-lg-3"
            aria-label="Logout"
          >
            <AiOutlineLogout className="fs-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
