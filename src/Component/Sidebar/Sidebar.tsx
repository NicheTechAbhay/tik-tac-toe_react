/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
//ADDED BY SRISHTI(14-05-2024)
import React  from "react";
const Sidebar: React.FC = () => {

  return (
    <>
  <header className="app-header">
        {/* <!-- Start::main-header-container -->  */}
        <div className="main-header-container container-fluid">
          {/* <!-- Start::header-content-left -->  */}
          <div className="header-content-left">
            {/* <!-- Start::header-element -->  */}
            <div className="header-element">
              <div className="horizontal-logo">
                {" "}
                <a  className="header-logo">
                  {" "}
                  <img
                    src="./src/assets/images/brand-logos/desktop-logo.png"
                    alt="logo"
                    className="desktop-logo"
                  />{" "}
                  <img
                    src="./src/assets/images/brand-logos/toggle-logo.png"
                    alt="logo"
                    className="toggle-logo"
                  />
                  <h1 className="desktop-dark">Litmus</h1>{" "}
                  <img
                    src="./src/assets/images/brand-logos/toggle-dark.png"
                    alt="logo"
                    className="toggle-dark"
                  />{" "}
                </a>{" "}
              </div>
            </div>
            {/* <!-- End::header-element --> <!-- Start::header-element -->  */}
            {/* <div className="header-element"> */}
            <div
              className="header-element"
            >
              {/* <!-- Start::header-link -->  */}
              <a
                aria-label="Hide Sidebar"
                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                data-bs-toggle="sidebar"
                href="javascript:void(0);"
              >
                <span></span>
              </a>
              {/* <!-- End::header-link -->  */}
            </div>
            {/* <!-- End::header-element -->  */}
          </div>
          {/* <!-- End::header-content-left --> <!-- Start::header-content-right -->  */}
          <div className="header-content-right">
            {/* <!-- Start::header-element -->  */}
            <div className="header-element header-search">
              {/* <!-- Start::header-link -->  */}
              <a
                className="header-link"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                {" "}
                <i className="bx bx-search-alt-2 header-link-icon"></i>{" "}
              </a>
              {/* <!-- End::header-link -->  */}
            </div>

            <div className="header-element">
              {/* <!-- Start::header-link|dropdown-toggle -->  */}
              <a
                className="header-link dropdown-toggle"
                id="mainHeaderProfile"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <div className="me-sm-2 me-0">
                    {" "}
                    <img
                      src="./src/assets/images/faces/9.jpg"
                      alt="img"
                      width="32"
                      height="32"
                      className="rounded-circle"
                    />{" "}
                  </div>
                  <div className="d-sm-block d-none">
                    <p className="fw-semibold mb-0 lh-1">Json Taylor</p>
                    <span className="op-7 fw-normal d-block fs-11">
                      Web Designer
                    </span>
                  </div>
                </div>
              </a>
              {/* <!-- End::header-link|dropdown-toggle -->  */}
              <ul
                className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end"
                aria-labelledby="mainHeaderProfile"
              >
                <li>
                  <a className="dropdown-item d-flex" >
                    <i className="ti ti-user-circle fs-18 me-2 op-7"></i>
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex" >
                    <i className="ti ti-inbox fs-18 me-2 op-7"></i>Inbox{" "}
                    <span className="badge bg-success-transparent ms-auto">
                      25
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex border-block-end"
                  >
                    <i className="ti ti-clipboard-check fs-18 me-2 op-7"></i>
                    Task Manager
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex"
                  >
                    <i className="ti ti-adjustments-horizontal fs-18 me-2 op-7"></i>
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex border-block-end"
                  >
                    <i className="ti ti-wallet fs-18 me-2 op-7"></i>Bal:
                    $7,12,950
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex" >
                    <i className="ti ti-headset fs-18 me-2 op-7"></i>Support
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex"
                  >
                    <i className="ti ti-logout fs-18 me-2 op-7"></i>Log Out
                  </a>
                </li>
              </ul>
            </div>
            
            {/* <!-- End::header-element --> <!-- Start::header-element --> 
 
 <!-- End::header-element -->  */}
          </div>
          {/* <!-- End::header-content-right -->  */}
        </div>
        {/* <!-- End::main-header-container -->  */}
      </header>
      {/* <!-- /app-header --> <!-- Start::app-sidebar -->  */}
      <aside className="app-sidebar sticky" id="sidebar" >
      {/* <aside
        className={
          showsidebar ? "app-sidebar sticky" : "app-sidebar sticky hide-sidebar"
        }
        id="sidebar"
      > */}
      {/* <!-- Start::main-sidebar-header -->  */}
      <div className="main-sidebar-header">
        {" "}
        <a  className="header-logo">
          {" "}
          <img
            src="./src/assets/images/brand-logos/desktop-logo.png"
            alt="logo"
            className="desktop-logo"
          />{" "}
          <img
            src="./src/assets/images/brand-logos/toggle-logo.png"
            alt="logo"
            className="toggle-logo"
          />{" "}
          <h1 className="text-white desktop-dark">Litmus</h1>{" "}
          <img
            src="./src/assets/images/brand-logos/toggle-dark.png"
            alt="logo"
            className="toggle-dark"
          />{" "}
        </a>{" "}
      </div>
      {/* <!-- End::main-sidebar-header --> <!-- Start::main-sidebar -->  */}
      <div className="main-sidebar" id="sidebar-scroll">
        {/* <!-- Start::nav -->  */}
        <nav className="main-menu-container nav nav-pills flex-column sub-open">
          <div className="slide-left" id="slide-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
            </svg>
          </div>
          <ul className="main-menu">
            {/* <!-- Start::slide__category -->  */}
            <li className="slide__category">
              <span className="category-name">Main</span>
            </li>
            {/* <!-- End::slide__category --> <!-- Start::slide --> 
              <!-- End::slide__category --> <!-- Start::slide -->  */}

            <li className="slide">
              {" "}
              <a  className="side-menu__item">
                {" "}
                <i className="bx bx-store-alt side-menu__icon"></i>{" "}
                <span className="side-menu__label">
                  Organization Dashboard
                </span>{" "}
              </a>{" "}
            </li>
            <li className="slide">
              {" "}
              <a  className="side-menu__item">
                {" "}
                <i className="bx bx-store-alt side-menu__icon"></i>{" "}
                <span className="side-menu__label">Sites</span>{" "}
              </a>{" "}
            </li>

            <li className="slide">
              {" "}
              <a  className="side-menu__item">
                {" "}
                <i className="bx bx-store-alt side-menu__icon"></i>{" "}
                <span className="side-menu__label">Products</span>{" "}
              </a>{" "}
            </li>

            <li className="slide">
              {" "}
              <a  className="side-menu__item">
                {" "}
                <i className="bx bx-store-alt side-menu__icon"></i>{" "}
                <span className="side-menu__label">Solution</span>{" "}
              </a>{" "}
            </li>
            {/* <!-- End::slide -->  */}
          </ul>
          <div className="slide-right" id="slide-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </div>
        </nav>
        {/* <!-- End::nav -->  */}
      </div>
      {/* <!-- End::main-sidebar -->  */}
    </aside>
    </>
  );
};

export default Sidebar;
