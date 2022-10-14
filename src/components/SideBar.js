import image from "../assets/images/logo-DH.png";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/*<!-- Sidebar - Brand -->*/}
      <NavLink
        exact
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon">
          <img className="w-100" src={image} alt="Digital House" />
        </div>
      </NavLink>

      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider my-0" />

      {/*<!-- Nav Item - Dashboard -->*/}
      <li className="nav-item active">
        <NavLink className="nav-link" to="/" exact>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - DH movies</span>
        </NavLink>
      </li>

      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider" />

      {/*<!-- Heading -->*/}
      <div className="sidebar-heading">Actions</div>

      {/*<!-- Nav Item - Content Movies -->*/}
      <li className="nav-item">
        <NavLink className="nav-link collapsed" to="/content-movies">
          <i className="fas fa-fw fa-folder"></i>
          <span>Content Movies</span>
        </NavLink>
      </li>

      {/*<!-- Nav Item - Last Movie In Db -->*/}
      <li className="nav-item">
        <NavLink className="nav-link" to="/last-movie-in-db">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Last Movie In Db</span>
        </NavLink>
      </li>

      {/*<!-- Nav Item - Genres In Db -->*/}
      <li className="nav-item">
        <NavLink className="nav-link" to="/genres-in-db">
          <i className="fas fa-fw fa-film"></i>
          <span>Genres In Db</span>
        </NavLink>
      </li>

      {/*<!-- Nav Item - Movies Chart -->*/}
      <li className="nav-item">
        <NavLink className="nav-link" to="/movies-chart">
          <i className="fas fa-fw fa-table"></i>
          <span>Movies Chart</span>
        </NavLink>
      </li>

      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;
