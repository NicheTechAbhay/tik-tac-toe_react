/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

const SiteList: React.FC = () => {
    return (
        <>
        <div
    aria-labelledby="offcanvasRightLabel"
    className="offcanvas offcanvas-end"
    id="switcher-canvas"
    tabIndex={-1}
  >
    <div className="offcanvas-header border-bottom">
      <h5
        className="offcanvas-title text-default"
        id="offcanvasRightLabel"
      >
        Switcher
      </h5>
      <button
        aria-label="Close"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        type="button"
      />
    </div>
    <div className="offcanvas-body">
      <nav className="border-bottom border-block-end-dashed">
        <div
          className="nav nav-tabs nav-justified"
          id="switcher-main-tab"
          role="tablist"
        >
          {' '}
          <button
            aria-controls="switcher-home"
            aria-selected="true"
            className="nav-link active"
            data-bs-target="#switcher-home"
            data-bs-toggle="tab"
            id="switcher-home-tab"
            role="tab"
            type="button"
          >
            Theme Styles
          </button>
          {' '}
          <button
            aria-controls="switcher-profile"
            aria-selected="false"
            className="nav-link"
            data-bs-target="#switcher-profile"
            data-bs-toggle="tab"
            id="switcher-profile-tab"
            role="tab"
            type="button"
          >
            Theme Colors
          </button>
          {' '}
        </div>
      </nav>
      <div
        className="tab-content"
        id="nav-tabContent"
      >
        <div
          aria-labelledby="switcher-home-tab"
          className="tab-pane fade show active border-0"
          id="switcher-home"
          role="tabpanel"
          tabIndex={0}
        >
          <div className="">
            <p className="switcher-style-head">
              Theme Color Mode:
            </p>
            <div className="row switcher-style gx-0">
              <div className="col-4">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-light-theme"
                  >
                    {' '}Light{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    defaultChecked
                    id="switcher-light-theme"
                    name="theme-style"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
              <div className="col-4">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-dark-theme"
                  >
                    {' '}Dark{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-dark-theme"
                    name="theme-style"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="switcher-style-head">
              Directions:
            </p>
            <div className="row switcher-style gx-0">
              <div className="col-4">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-ltr"
                  >
                    {' '}LTR{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    defaultChecked
                    id="switcher-ltr"
                    name="direction"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
              <div className="col-4">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-rtl"
                  >
                    {' '}RTL{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-rtl"
                    name="direction"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="switcher-style-head">
              Navigation Styles:
            </p>
            <div className="row switcher-style gx-0">
              <div className="col-4">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-vertical"
                  >
                    {' '}Vertical{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    defaultChecked
                    id="switcher-vertical"
                    name="navigation-style"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
              <div className="col-4">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-horizontal"
                  >
                    {' '}Horizontal{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-horizontal"
                    name="navigation-style"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="page">
    <div className="main-content ">
      <div className="container-fluid">
        <div className="d-md-flex d-block align-items-center justify-content-center my-4 page-header-breadcrumb">
          <h1 className="page-title fw-semibold fs-18 mb-0">
            Your Sites
          </h1>
        </div>
        <div className="row">
          <div className="col-xxl-3 col-md-3">
            <div className="card custom-card">
              <div className="p-3 border-bottom d-block">
                <div className=" border-block-end-dashed">
                  <div className="input-group">
                    {' '}
                    <input
                      aria-describedby="coupons"
                      aria-label="coupon-code"
                      className="form-control form-control-sm"
                      placeholder="Search"
                      type="text"
                    />
                    {' '}
                    <button
                      className="btn btn-primary input-group-text"
                      id="coupons"
                    >
                      <i className="bx bx-search" />
                    </button>
                    {' '}
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="p-3 border-bottom border-block-end-dashed">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="text-black op-7">
                      Site 1
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="text-black op-7">
                      Site 1
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="text-black op-7">
                      Site 1
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="text-black op-7">
                      Site 1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-9 col-md-9">
            <div
              className="card custom-card"
              id="cart-container-delete"
            >
              <div className="card-header">
                <div className="card-title">
                  {' '}Sites{' '}
                </div>
              </div>
              <div className="card-body">
                <button
                  className="btn btn-primary mb-1 btn-wave w-100 mb-3"
                  data-bs-target="#formmodal"
                  data-bs-toggle="modal"
                  data-bs-whatever="@fat"
                  type="button"
                >
                  {' '}
                  <i className="ri-add-fill me-2 align-middle d-inline-block" />
                  Add Site{' '}
                </button>
                <div
                  aria-hidden="true"
                  aria-labelledby="exampleModalLabel"
                  className="modal fade"
                  id="formmodal"
                  tabIndex={-1}
                >
                  <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h6
                          className="modal-title"
                          id="exampleModalLabel"
                        >
                          Create Site
                        </h6>
                        <button
                          aria-label="Close"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          type="button"
                        />
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            {' '}
                            <label
                              className="col-form-label"
                              htmlFor="recipient-name"
                            >
                              Site Name
                            </label>
                            {' '}
                            <input
                              className="form-control"
                              id="recipient-name"
                              type="text"
                            />
                            {' '}
                          </div>
                          <div className="mb-3">
                            <label
                              className="col-form-label"
                              htmlFor="recipient-name"
                            >
                              Type
                            </label>
                            <div className="d-flex mb-2">
                              <div className="alert alert-solid-primary alert-dismissible fade show me-2">
                                {' '}Domain 1{' '}
                                <button
                                  aria-label="Close"
                                  className="btn-close"
                                  data-bs-dismiss="alert"
                                  type="button"
                                >
                                  <i className="bi bi-x" />
                                </button>
                                {' '}
                              </div>
                              <div className="alert alert-solid-primary alert-dismissible fade show me-2">
                                {' '}Domain 1{' '}
                                <button
                                  aria-label="Close"
                                  className="btn-close"
                                  data-bs-dismiss="alert"
                                  type="button"
                                >
                                  <i className="bi bi-x" />
                                </button>
                                {' '}
                              </div>
                            </div>
                            <select
                              className="form-select"
                              id="recipient-name"
                            >
                              <option>
                                Option 1
                              </option>
                              <option>
                                Option 2
                              </option>
                              <option />
                            </select>
                            {' '}
                          </div>
                          <div className="mb-3">
                            {' '}
                            <label
                              className="col-form-label"
                              htmlFor="recipient-name"
                            >
                              Address 1
                            </label>
                            {' '}
                            <input
                              className="form-control"
                              id="recipient-name"
                              type="text"
                            />
                            {' '}
                          </div>
                          <div className="mb-3">
                            {' '}
                            <label
                              className="col-form-label"
                              htmlFor="recipient-name"
                            >
                              Address 2
                            </label>
                            {' '}
                            <input
                              className="form-control"
                              id="recipient-name"
                              type="text"
                            />
                            {' '}
                          </div>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label
                                  className="col-form-label"
                                  htmlFor="recipient-name"
                                >
                                  City
                                </label>
                                <input
                                  className="form-control"
                                  id="recipient-name"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label
                                  className="col-form-label"
                                  htmlFor="recipient-name"
                                >
                                  State
                                </label>
                                <input
                                  className="form-control"
                                  id="recipient-name"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label
                                  className="col-form-label"
                                  htmlFor="recipient-name"
                                >
                                  Country
                                </label>
                                <input
                                  className="form-control"
                                  id="recipient-name"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            {' '}
                            <label
                              className="col-form-label"
                              htmlFor="message-text"
                            >
                              Message:
                            </label>
                            {' '}
                            <textarea
                              className="form-control"
                              id="message-text"
                            />
                            {' '}
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-primary"
                          type="button"
                        >
                          Add Site
                        </button>
                        {' '}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card custom-card-new custom-card-new-2">
                      <div className="card-header justify-content-between">
                        <div className="card-title">
                          {' '}TechForge Solutions
                        </div>
                        <div className="prism-toggle">
                          {' '}
                          <button className="btn btn-sm btn-primary-light">
                            TS
                          </button>
                          {' '}
                        </div>
                      </div>
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item fw-semibold">
                            <i className="bx bx-map align-middle me-2 text-muted" />
                            Address
                            <span className="ms-1 text-muted fw-normal d-inline-block">
                              San Fransisco
                            </span>
                          </li>
                          <li className="list-group-item fw-semibold">
                            <i className="bx bx-briefcase align-middle me-2 text-muted" />
                            Owner
                            <span className="ms-1 text-muted fw-normal d-inline-block">
                              Emily Johnson
                            </span>
                          </li>
                          <li className="list-group-item fw-semibold">
                            <i className="bx bx-user align-middle me-2 text-muted" />
                            Number of users
                            <span className="ms-1 text-muted fw-normal d-inline-block">
                              500
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer text-center">
                        <button
                          className="m-auto text-center btn btn-primary btn-wave waves-effect waves-light"
                          type="button"
                        >
                          Production
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card custom-card-new custom-card-new-2">
                      <div className="card-header justify-content-between">
                        <div className="card-title">
                          {' '}TechForge Solutions
                        </div>
                        <div className="prism-toggle">
                          {' '}
                          <button className="btn btn-sm btn-primary-light">
                            TS
                          </button>
                          {' '}
                        </div>
                      </div>
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item fw-semibold">
                            <i className="bx bx-map align-middle me-2 text-muted" />
                            Address
                            <span className="ms-1 text-muted fw-normal d-inline-block">
                              San Fransisco
                            </span>
                          </li>
                          <li className="list-group-item fw-semibold">
                            <i className="bx bx-briefcase align-middle me-2 text-muted" />
                            Owner
                            <span className="ms-1 text-muted fw-normal d-inline-block">
                              Emily Johnson
                            </span>
                          </li>
                          <li className="list-group-item fw-semibold">
                            <i className="bx bx-user align-middle me-2 text-muted" />
                            Number of users
                            <span className="ms-1 text-muted fw-normal d-inline-block">
                              500
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer text-center">
                        <button
                          className="m-auto text-center btn btn-primary btn-wave waves-effect waves-light"
                          type="button"
                        >
                          Production
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card custom-card-new custom-card-new-2">
                      <div className="card-header justify-content-between">
                        <div className="card-title">
                          {' '}TechForge Solutions
                        </div>
                        <div className="prism-toggle">
                          {' '}
                          <button className="btn btn-sm btn-primary-light">
                            TS
                          </button>
                          {' '}
                        </div>
                      </div>
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item fw-semibold">
                            <i className="bx bx-map align-middle me-2 text-muted" />
                            Address
                            <span className="ms-1 text-muted fw-normal d-inline-block">
                              San Fransisco
                            </span>
                          </li>
                          <li className="list-group-item fw-semibold">
                            <i className="bx bx-briefcase align-middle me-2 text-muted" />
                            Owner
                            <span className="ms-1 text-muted fw-normal d-inline-block">
                              Emily Johnson
                            </span>
                          </li>
                          <li className="list-group-item fw-semibold">
                            <i className="bx bx-user align-middle me-2 text-muted" />
                            Number of users
                            <span className="ms-1 text-muted fw-normal d-inline-block">
                              500
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer text-center">
                        <button
                          className="m-auto text-center btn btn-primary btn-wave waves-effect waves-light"
                          type="button"
                        >
                          Production
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      aria-hidden="true"
      aria-labelledby="searchModal"
      className="modal fade"
      id="searchModal"
      tabIndex={-1}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="input-group">
              <a
                className="input-group-text"
                href="javascript:void(0);"
                id="Search-Grid"
              >
                <i className="fe fe-search header-link-icon fs-18" />
              </a>
              {' '}
              <input
                aria-label="Username"
                className="form-control border-0 px-2"
                placeholder="Search"
                type="search"
              />
              {' '}
              <a
                className="input-group-text"
                href="javascript:void(0);"
                id="voice-search"
              >
                <i className="fe fe-mic header-link-icon" />
              </a>
              {' '}
              <a
                aria-expanded="false"
                className="btn btn-light btn-icon"
                data-bs-toggle="dropdown"
                href="javascript:void(0);"
              >
                {' '}
                <i className="fe fe-more-vertical" />
                {' '}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                  >
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                  >
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="font-weight-semibold text-muted mb-2">
                Are You Looking For...
              </p>
              <span className="search-tags">
                <i className="fe fe-user me-2" />
                People
                <a
                  className="tag-addon"
                  href="javascript:void(0)"
                >
                  <i className="fe fe-x" />
                </a>
              </span>
              {' '}
              <span className="search-tags">
                <i className="fe fe-file-text me-2" />
                Pages
                <a
                  className="tag-addon"
                  href="javascript:void(0)"
                >
                  <i className="fe fe-x" />
                </a>
              </span>
              {' '}
              <span className="search-tags">
                <i className="fe fe-align-left me-2" />
                Articles
                <a
                  className="tag-addon"
                  href="javascript:void(0)"
                >
                  <i className="fe fe-x" />
                </a>
              </span>
              {' '}
              <span className="search-tags">
                <i className="fe fe-server me-2" />
                Tags
                <a
                  className="tag-addon"
                  href="javascript:void(0)"
                >
                  <i className="fe fe-x" />
                </a>
              </span>
            </div>
            <div className="my-4">
              <p className="font-weight-semibold text-muted mb-2">
                Recent Search :
              </p>
              <div className="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                {' '}
                <a href="notifications.html">
                  <span>
                    Notifications
                  </span>
                </a>
                {' '}
                <a
                  aria-label="Close"
                  className="ms-auto lh-1"
                  data-bs-dismiss="alert"
                  href="javascript:void(0);"
                >
                  <i className="fe fe-x text-muted" />
                </a>
                {' '}
              </div>
              <div className="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                {' '}
                <a href="alerts.html">
                  <span>
                    Alerts
                  </span>
                </a>
                {' '}
                <a
                  aria-label="Close"
                  className="ms-auto lh-1"
                  data-bs-dismiss="alert"
                  href="javascript:void(0);"
                >
                  <i className="fe fe-x text-muted" />
                </a>
                {' '}
              </div>
              <div className="p-2 border br-5 d-flex align-items-center text-muted mb-0 alert">
                {' '}
                <a href="mail.html">
                  <span>
                    Mail
                  </span>
                </a>
                {' '}
                <a
                  aria-label="Close"
                  className="ms-auto lh-1"
                  data-bs-dismiss="alert"
                  href="javascript:void(0);"
                >
                  <i className="fe fe-x text-muted" />
                </a>
                {' '}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="btn-group ms-auto">
              {' '}
              <button className="btn btn-sm btn-primary-light">
                Search
              </button>
              {' '}
              <button className="btn btn-sm btn-primary">
                Clear Recents
              </button>
              {' '}
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer mt-auto py-3 bg-white text-center">
      <div className="container">
        {' '}
        <span className="text-muted">
          {' '}Copyright ©{' '}
          <span id="year" />
          {' '}
          <a
            className="text-dark fw-semibold"
            href="javascript:void(0);"
          >
            Litmus
          </a>
          . Powered By{' '}
          <a href="https://www.nichetechsolutions.com/">
            {' '}
            <span className="fw-semibold text-primary text-decoration-underline">
              Nichetech
            </span>
            {' '}
          </a>
          {' '}All rights reserved{' '}
        </span>
        {' '}
      </div>
    </footer>
  </div>
  <div className="scrollToTop">
    {' '}
    <span className="arrow">
      <i className="ri-arrow-up-s-fill fs-20" />
    </span>
    {' '}
  </div>
  <div id="responsive-overlay" />
        </>
    )
}

export default SiteList;