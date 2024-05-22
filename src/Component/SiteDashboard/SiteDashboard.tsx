/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

const SiteDashboard: React.FC = () => {
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
          <div className="navigation-menu-styles">
            <p className="switcher-style-head">
              Vertical & Horizontal Menu Styles:
            </p>
            <div className="row switcher-style gx-0 pb-2 gy-2">
              <div className="col-4">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-menu-click"
                  >
                    {' '}Menu Click{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-menu-click"
                    name="navigation-menu-styles"
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
                    htmlFor="switcher-menu-hover"
                  >
                    {' '}Menu Hover{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-menu-hover"
                    name="navigation-menu-styles"
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
                    htmlFor="switcher-icon-click"
                  >
                    {' '}Icon Click{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-icon-click"
                    name="navigation-menu-styles"
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
                    htmlFor="switcher-icon-hover"
                  >
                    {' '}Icon Hover{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-icon-hover"
                    name="navigation-menu-styles"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
            </div>
          </div>
          <div className="sidemenu-layout-styles">
            <p className="switcher-style-head">
              Sidemenu Layout Styles:
            </p>
            <div className="row switcher-style gx-0 pb-2 gy-2">
              <div className="col-sm-6">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-default-menu"
                  >
                    {' '}Default Menu{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    defaultChecked
                    id="switcher-default-menu"
                    name="sidemenu-layout-styles"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-closed-menu"
                  >
                    {' '}Closed Menu{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-closed-menu"
                    name="sidemenu-layout-styles"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-icontext-menu"
                  >
                    {' '}Icon Text{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-icontext-menu"
                    name="sidemenu-layout-styles"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-icon-overlay"
                  >
                    {' '}Icon Overlay{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-icon-overlay"
                    name="sidemenu-layout-styles"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-detached"
                  >
                    {' '}Detached{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-detached"
                    name="sidemenu-layout-styles"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-double-menu"
                  >
                    {' '}Double Menu{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-double-menu"
                    name="sidemenu-layout-styles"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="switcher-style-head">
              Page Styles:
            </p>
            <div className="row switcher-style gx-0">
              <div className="col-4">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-regular"
                  >
                    {' '}Regular{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    defaultChecked
                    id="switcher-regular"
                    name="page-styles"
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
                    htmlFor="switcher-classic"
                  >
                    {' '}Classic{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-classic"
                    name="page-styles"
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
                    htmlFor="switcher-modern"
                  >
                    {' '}Modern{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-modern"
                    name="page-styles"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="switcher-style-head">
              Layout Width Styles:
            </p>
            <div className="row switcher-style gx-0">
              <div className="col-4">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-full-width"
                  >
                    {' '}Full Width{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    defaultChecked
                    id="switcher-full-width"
                    name="layout-width"
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
                    htmlFor="switcher-boxed"
                  >
                    {' '}Boxed{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-boxed"
                    name="layout-width"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="switcher-style-head">
              Menu Positions:
            </p>
            <div className="row switcher-style gx-0">
              <div className="col-4">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-menu-fixed"
                  >
                    {' '}Fixed{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    defaultChecked
                    id="switcher-menu-fixed"
                    name="menu-positions"
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
                    htmlFor="switcher-menu-scroll"
                  >
                    {' '}Scrollable{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-menu-scroll"
                    name="menu-positions"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="switcher-style-head">
              Header Positions:
            </p>
            <div className="row switcher-style gx-0">
              <div className="col-4">
                <div className="form-check switch-select">
                  {' '}
                  <label
                    className="form-check-label"
                    htmlFor="switcher-header-fixed"
                  >
                    {' '}Fixed{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    defaultChecked
                    id="switcher-header-fixed"
                    name="header-positions"
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
                    htmlFor="switcher-header-scroll"
                  >
                    {' '}Scrollable{' '}
                  </label>
                  {' '}
                  <input
                    className="form-check-input"
                    id="switcher-header-scroll"
                    name="header-positions"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-labelledby="switcher-profile-tab"
          className="tab-pane fade border-0"
          id="switcher-profile"
          role="tabpanel"
          tabIndex={0}
        >
          <div>
            <div className="theme-colors">
              <p className="switcher-style-head">
                Menu Colors:
              </p>
              <div className="d-flex switcher-style pb-2">
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-white"
                    data-bs-placement="top"
                    data-bs-toggle="tooltip"
                    id="switcher-menu-light"
                    name="menu-colors"
                    title="Light Menu"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-dark"
                    data-bs-placement="top"
                    data-bs-toggle="tooltip"
                    defaultChecked
                    id="switcher-menu-dark"
                    name="menu-colors"
                    title="Dark Menu"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-primary"
                    data-bs-placement="top"
                    data-bs-toggle="tooltip"
                    id="switcher-menu-primary"
                    name="menu-colors"
                    title="Color Menu"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-gradient"
                    data-bs-placement="top"
                    data-bs-toggle="tooltip"
                    id="switcher-menu-gradient"
                    name="menu-colors"
                    title="Gradient Menu"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-transparent"
                    data-bs-placement="top"
                    data-bs-toggle="tooltip"
                    id="switcher-menu-transparent"
                    name="menu-colors"
                    title="Transparent Menu"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
              <div className="px-4 pb-3 text-muted fs-11">
                Note:If you want to change color Menu dynamically change from below Theme Primary color picker
              </div>
            </div>
            <div className="theme-colors">
              <p className="switcher-style-head">
                Header Colors:
              </p>
              <div className="d-flex switcher-style pb-2">
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-white"
                    data-bs-placement="top"
                    data-bs-toggle="tooltip"
                    defaultChecked
                    id="switcher-header-light"
                    name="header-colors"
                    title="Light Header"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-dark"
                    data-bs-placement="top"
                    data-bs-toggle="tooltip"
                    id="switcher-header-dark"
                    name="header-colors"
                    title="Dark Header"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-primary"
                    data-bs-placement="top"
                    data-bs-toggle="tooltip"
                    id="switcher-header-primary"
                    name="header-colors"
                    title="Color Header"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-gradient"
                    data-bs-placement="top"
                    data-bs-toggle="tooltip"
                    id="switcher-header-gradient"
                    name="header-colors"
                    title="Gradient Header"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-transparent"
                    data-bs-placement="top"
                    data-bs-toggle="tooltip"
                    id="switcher-header-transparent"
                    name="header-colors"
                    title="Transparent Header"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
              <div className="px-4 pb-3 text-muted fs-11">
                Note:If you want to change color Header dynamically change from below Theme Primary color picker
              </div>
            </div>
            <div className="theme-colors">
              <p className="switcher-style-head">
                Theme Primary:
              </p>
              <div className="d-flex flex-wrap align-items-center switcher-style">
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-primary-1"
                    id="switcher-primary"
                    name="theme-primary"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-primary-2"
                    id="switcher-primary1"
                    name="theme-primary"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-primary-3"
                    id="switcher-primary2"
                    name="theme-primary"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-primary-4"
                    id="switcher-primary3"
                    name="theme-primary"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-primary-5"
                    id="switcher-primary4"
                    name="theme-primary"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select ps-0 mt-1 color-primary-light">
                  <div className="theme-container-primary" />
                  <div className="pickr-container-primary" />
                </div>
              </div>
            </div>
            <div className="theme-colors">
              <p className="switcher-style-head">
                Theme Background:
              </p>
              <div className="d-flex flex-wrap align-items-center switcher-style">
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-bg-1"
                    id="switcher-background"
                    name="theme-background"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-bg-2"
                    id="switcher-background1"
                    name="theme-background"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-bg-3"
                    id="switcher-background2"
                    name="theme-background"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-bg-4"
                    id="switcher-background3"
                    name="theme-background"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select me-3">
                  {' '}
                  <input
                    className="form-check-input color-input color-bg-5"
                    id="switcher-background4"
                    name="theme-background"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select ps-0 mt-1 tooltip-static-demo color-bg-transparent">
                  <div className="theme-container-background" />
                  <div className="pickr-container-background" />
                </div>
              </div>
            </div>
            <div className="menu-image mb-3">
              <p className="switcher-style-head">
                Menu With Background Image:
              </p>
              <div className="d-flex flex-wrap align-items-center switcher-style">
                <div className="form-check switch-select m-2">
                  {' '}
                  <input
                    className="form-check-input bgimage-input bg-img1"
                    id="switcher-bg-img"
                    name="theme-background"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select m-2">
                  {' '}
                  <input
                    className="form-check-input bgimage-input bg-img2"
                    id="switcher-bg-img1"
                    name="theme-background"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select m-2">
                  {' '}
                  <input
                    className="form-check-input bgimage-input bg-img3"
                    id="switcher-bg-img2"
                    name="theme-background"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select m-2">
                  {' '}
                  <input
                    className="form-check-input bgimage-input bg-img4"
                    id="switcher-bg-img3"
                    name="theme-background"
                    type="radio"
                  />
                  {' '}
                </div>
                <div className="form-check switch-select m-2">
                  {' '}
                  <input
                    className="form-check-input bgimage-input bg-img5"
                    id="switcher-bg-img4"
                    name="theme-background"
                    type="radio"
                  />
                  {' '}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between canvas-footer flex-wrap">
          {' '}
          <a
            className="btn btn-primary m-1"
            href=""
          >
            Buy Now
          </a>
          {' '}
          <a
            className="btn btn-secondary m-1"
            href=""
          >
            Our Portfolio
          </a>
          {' '}
          <a
            className="btn btn-danger m-1"
            href="javascript:void(0);"
            id="reset-all"
          >
            Reset
          </a>
          {' '}
        </div>
      </div>
    </div>
  </div>
  <div className="page">
    <header className="app-header">
      <div className="main-header-container container-fluid">
        <div className="header-content-left">
          <div className="header-element">
            <div className="horizontal-logo">
              {' '}
              <a
                className="header-logo"
                href="index.html"
              >
                {' '}
                <img
                  alt="logo"
                  className="desktop-logo"
                  src="../assets/images/brand-logos/desktop-logo.png"
                />
                {' '}
                <img
                  alt="logo"
                  className="toggle-logo"
                  src="../assets/images/brand-logos/toggle-logo.png"
                />
                <h1 className="desktop-dark">
                  Litmus
                </h1>
                {' '}
                <img
                  alt="logo"
                  className="toggle-dark"
                  src="../assets/images/brand-logos/toggle-dark.png"
                />
                {' '}
              </a>
              {' '}
            </div>
          </div>
          <div className="header-element">
            <a
              aria-label="Hide Sidebar"
              className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
              data-bs-toggle="sidebar"
              href="javascript:void(0);"
            >
              <span />
            </a>
          </div>
        </div>
        <div className="header-content-right">
          <div className="header-element header-search">
            <a
              className="header-link"
              data-bs-target="#searchModal"
              data-bs-toggle="modal"
              href="javascript:void(0);"
            >
              {' '}
              <i className="bx bx-search-alt-2 header-link-icon" />
              {' '}
            </a>
          </div>
          <div className="header-element">
            <a
              aria-expanded="false"
              className="header-link dropdown-toggle"
              data-bs-auto-close="outside"
              data-bs-toggle="dropdown"
              href="#"
              id="mainHeaderProfile"
            >
              <div className="d-flex align-items-center">
                <div className="me-sm-2 me-0">
                  {' '}
                  <img
                    alt="img"
                    className="rounded-circle"
                    height="32"
                    src="../assets/images/faces/9.jpg"
                    width="32"
                  />
                  {' '}
                </div>
                <div className="d-sm-block d-none">
                  <p className="fw-semibold mb-0 lh-1">
                    Json Taylor
                  </p>
                  <span className="op-7 fw-normal d-block fs-11">
                    Web Designer
                  </span>
                </div>
              </div>
            </a>
            <ul
              aria-labelledby="mainHeaderProfile"
              className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end"
            >
              <li>
                <a
                  className="dropdown-item d-flex"
                  href="profile.html"
                >
                  <i className="ti ti-user-circle fs-18 me-2 op-7" />
                  Profile
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex"
                  href="mail.html"
                >
                  <i className="ti ti-inbox fs-18 me-2 op-7" />
                  Inbox{' '}
                  <span className="badge bg-success-transparent ms-auto">
                    25
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex border-block-end"
                  href="to-do-list.html"
                >
                  <i className="ti ti-clipboard-check fs-18 me-2 op-7" />
                  Task Manager
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex"
                  href="mail-settings.html"
                >
                  <i className="ti ti-adjustments-horizontal fs-18 me-2 op-7" />
                  Settings
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex border-block-end"
                  href="javascript:void(0);"
                >
                  <i className="ti ti-wallet fs-18 me-2 op-7" />
                  Bal: $7,12,950
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex"
                  href="chat.html"
                >
                  <i className="ti ti-headset fs-18 me-2 op-7" />
                  Support
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex"
                  href="sign-in-cover.html"
                >
                  <i className="ti ti-logout fs-18 me-2 op-7" />
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <aside
      className="app-sidebar sticky"
      id="sidebar"
    >
      <div className="main-sidebar-header">
        {' '}
        <a
          className="header-logo"
          href="index.html"
        >
          {' '}
          <img
            alt="logo"
            className="desktop-logo"
            src="../assets/images/brand-logos/desktop-logo.png"
          />
          {' '}
          <img
            alt="logo"
            className="toggle-logo"
            src="../assets/images/brand-logos/toggle-logo.png"
          />
          {' '}
          <h1 className="text-white desktop-dark">
            Litmus
          </h1>
          {' '}
          <img
            alt="logo"
            className="toggle-dark"
            src="../assets/images/brand-logos/toggle-dark.png"
          />
          {' '}
        </a>
        {' '}
      </div>
      <div
        className="main-sidebar"
        id="sidebar-scroll"
      >
        <nav className="main-menu-container nav nav-pills flex-column sub-open">
          <div
            className="slide-left"
            id="slide-left"
          >
            <svg
              fill="#7b8191"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
            </svg>
          </div>
          <ul className="main-menu">
            <li className="slide__category">
              <span className="category-name">
                Main
              </span>
            </li>
            <li className="slide">
              {' '}
              <a
                className="side-menu__item"
                href="icons.html"
              >
                {' '}
                <i className="bx bx-store-alt side-menu__icon" />
                {' '}
                <span className="side-menu__label">
                  Organization Dashboard
                </span>
                {' '}
              </a>
              {' '}
            </li>
            <li className="slide">
              {' '}
              <a
                className="side-menu__item"
                href="icons.html"
              >
                {' '}
                <i className="bx bx-store-alt side-menu__icon" />
                {' '}
                <span className="side-menu__label">
                  Sites
                </span>
                {' '}
              </a>
              {' '}
            </li>
            <li className="slide">
              {' '}
              <a
                className="side-menu__item"
                href="icons.html"
              >
                {' '}
                <i className="bx bx-store-alt side-menu__icon" />
                {' '}
                <span className="side-menu__label">
                  Products
                </span>
                {' '}
              </a>
              {' '}
            </li>
            <li className="slide">
              {' '}
              <a
                className="side-menu__item"
                href="icons.html"
              >
                {' '}
                <i className="bx bx-store-alt side-menu__icon" />
                {' '}
                <span className="side-menu__label">
                  Solution
                </span>
                {' '}
              </a>
              {' '}
            </li>
          </ul>
          <div
            className="slide-right"
            id="slide-right"
          >
            <svg
              fill="#7b8191"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
            </svg>
          </div>
        </nav>
      </div>
    </aside>
    <div className="main-content app-content">
      <div className="container-fluid">
        <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
          <div>
            <p className="fw-semibold fs-18 mb-0">
              Dashboard (Arvind Mill)
            </p>
            <span className="fs-semibold text-muted">
              Track your sales activity, leads and deals here.
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12 col-xl-12">
            <div className="row">
              <div className="col-xl-12">
                <div className="row">
                  <div className="col-xxl-3 col-lg-3 col-md-3">
                    <div className="card custom-card overflow-hidden">
                      <div className="card-body">
                        <div className="d-flex align-items-top justify-content-between">
                          <div>
                            {' '}
                            <span className="avatar avatar-md avatar-rounded bg-primary">
                              {' '}
                              <i className="ti ti-atom fs-16" />
                              {' '}
                            </span>
                            {' '}
                          </div>
                          <div className="flex-fill ms-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                              <div>
                                <p className="text-muted mb-0">
                                  No. of Users
                                </p>
                                <h4 className="fw-semibold mt-1">
                                  890
                                </h4>
                              </div>
                              <div id="crm-total-customers" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-3 col-md-3">
                    <div className="card custom-card overflow-hidden">
                      <div className="card-body">
                        <div className="d-flex align-items-top justify-content-between">
                          <div>
                            {' '}
                            <span className="avatar avatar-md avatar-rounded bg-primary">
                              {' '}
                              <i className="ti ti-atom fs-16" />
                              {' '}
                            </span>
                            {' '}
                          </div>
                          <div className="flex-fill ms-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                              <div>
                                <p className="text-muted mb-0">
                                  No. of Licences
                                </p>
                                <h4 className="fw-semibold mt-1">
                                  890
                                </h4>
                              </div>
                              <div id="crm-total-customers" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-3 col-md-3">
                    <div className="card custom-card overflow-hidden">
                      <div className="card-body">
                        <div className="d-flex align-items-top justify-content-between">
                          <div>
                            {' '}
                            <span className="avatar avatar-md avatar-rounded bg-secondary">
                              {' '}
                              <i className="ti ti-users fs-16" />
                              {' '}
                            </span>
                            {' '}
                          </div>
                          <div className="flex-fill ms-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                              <div>
                                <p className="text-muted mb-0">
                                  Number of Products
                                </p>
                                <h4 className="fw-semibold mt-1">
                                  52
                                </h4>
                              </div>
                              <div id="crm-total-revenue" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-3 col-md-3">
                    <div className="card custom-card overflow-hidden">
                      <div className="card-body">
                        <div className="d-flex align-items-top justify-content-between">
                          <div>
                            {' '}
                            <span className="avatar avatar-md avatar-rounded bg-success">
                              {' '}
                              <i className="ti ti-wave-square fs-16" />
                              {' '}
                            </span>
                            {' '}
                          </div>
                          <div className="flex-fill ms-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                              <div>
                                <p className="text-muted mb-0">
                                  No. of Sendbox
                                </p>
                                <h4 className="fw-semibold mt-1">
                                  12
                                </h4>
                              </div>
                              <div id="crm-conversion-ratio" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="card custom-card">
                  <div className="card-header justify-content-between">
                    <div className="card-title">
                      {' '}Recent Orders{' '}
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-3">
                        <a href="javascript:void(0);">
                          <div className="d-flex algn-items-center">
                            <div className="lh-1">
                              {' '}
                              <span className="avatar avatar-md">
                                {' '}
                                <img
                                  alt=""
                                  src="../assets/images/faces/1.jpg"
                                />
                                {' '}
                              </span>
                              {' '}
                            </div>
                            <div className="flex-fill ms-2">
                              <p className="fw-semibold mb-0">
                                2500-4168-2082
                              </p>
                              <p className="fs-12 text-muted mb-0">
                                01/01/2024
                              </p>
                              <p className="fs-12 text-muted mb-0">
                                2 hr ago
                              </p>
                            </div>
                            <div>
                              {' '}
                              <h6>
                                {' '}
                                <span className="badge bg-primary badge-width">
                                  Active
                                </span>
                                {' '}
                              </h6>
                              {' '}
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="javascript:void(0);">
                          <div className="d-flex algn-items-center">
                            <div className="lh-1">
                              {' '}
                              <span className="avatar avatar-md">
                                {' '}
                                <img
                                  alt=""
                                  src="../assets/images/faces/2.jpg"
                                />
                                {' '}
                              </span>
                              {' '}
                            </div>
                            <div className="flex-fill ms-2">
                              <p className="fw-semibold mb-0">
                                2500-4168-2082
                              </p>
                              <p className="fs-12 text-muted mb-0">
                                01/01/2024
                              </p>
                              <p className="fs-12 text-muted mb-0">
                                2 hr ago
                              </p>
                            </div>
                            <div>
                              {' '}
                              <h6>
                                {' '}
                                <span className="badge bg-primary badge-width">
                                  Active
                                </span>
                                {' '}
                              </h6>
                              {' '}
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="javascript:void(0);">
                          <div className="d-flex algn-items-center">
                            <div className="lh-1">
                              {' '}
                              <span className="avatar avatar-md">
                                {' '}
                                <img
                                  alt=""
                                  src="../assets/images/faces/3.jpg"
                                />
                                {' '}
                              </span>
                              {' '}
                            </div>
                            <div className="flex-fill ms-2">
                              <p className="fw-semibold mb-0">
                                2500-4168-2082
                              </p>
                              <p className="fs-12 text-muted mb-0">
                                01/01/2024
                              </p>
                              <p className="fs-12 text-muted mb-0">
                                2 hr ago
                              </p>
                            </div>
                            <div>
                              {' '}
                              <h6>
                                {' '}
                                <span className="badge bg-danger badge-width">
                                  Expired
                                </span>
                                {' '}
                              </h6>
                              {' '}
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="javascript:void(0);">
                          <div className="d-flex algn-items-center">
                            <div className="lh-1">
                              {' '}
                              <span className="avatar avatar-md">
                                {' '}
                                <img
                                  alt=""
                                  src="../assets/images/faces/4.jpg"
                                />
                                {' '}
                              </span>
                              {' '}
                            </div>
                            <div className="flex-fill ms-2">
                              <p className="fw-semibold mb-0">
                                2500-4168-2082
                              </p>
                              <p className="fs-12 text-muted mb-0">
                                01/01/2024
                              </p>
                              <p className="fs-12 text-muted mb-0">
                                2 hr ago
                              </p>
                            </div>
                            <div>
                              {' '}
                              <h6>
                                {' '}
                                <span className="badge bg-warning badge-width">
                                  Renew
                                </span>
                                {' '}
                              </h6>
                              {' '}
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="javascript:void(0);">
                          <div className="d-flex algn-items-center">
                            <div className="lh-1">
                              {' '}
                              <span className="avatar avatar-md">
                                {' '}
                                <img
                                  alt=""
                                  src="../assets/images/faces/5.jpg"
                                />
                                {' '}
                              </span>
                              {' '}
                            </div>
                            <div className="flex-fill ms-2">
                              <p className="fw-semibold mb-0">
                                2500-4168-2082
                              </p>
                              <p className="fs-12 text-muted mb-0">
                                01/01/2024
                              </p>
                              <p className="fs-12 text-muted mb-0">
                                2 hr ago
                              </p>
                            </div>
                            <div>
                              {' '}
                              <h6>
                                {' '}
                                <span className="badge bg-warning badge-width">
                                  Renew
                                </span>
                                {' '}
                              </h6>
                              {' '}
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="mb-0">
                        <a href="javascript:void(0);">
                          <div className="d-flex algn-items-center">
                            <div className="lh-1">
                              {' '}
                              <span className="avatar avatar-md">
                                {' '}
                                <img
                                  alt=""
                                  src="../assets/images/faces/6.jpg"
                                />
                                {' '}
                              </span>
                              {' '}
                            </div>
                            <div className="flex-fill ms-2">
                              <p className="fw-semibold mb-0">
                                2500-4168-2082
                              </p>
                              <p className="fs-12 text-muted mb-0">
                                01/01/2024
                              </p>
                              <p className="fs-12 text-muted mb-0">
                                2 hr ago
                              </p>
                            </div>
                            <div>
                              {' '}
                              <h6>
                                {' '}
                                <span className="badge bg-warning badge-width">
                                  Renew
                                </span>
                                {' '}
                              </h6>
                              {' '}
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-12 col-xl-12">
            <div className="row">
              <div className="col-xxl-12 col-xl-12">
                <div className="row">
                  <div className="col-xl-6 col-xl-6">
                    <div className="card custom-card">
                      <div className="card-header justify-content-between">
                        <div className="card-title">
                          {' '}Location of sites and users{' '}
                        </div>
                      </div>
                      <div className="card-body p-0 overflow-hidden">
                        <div className="new-div">
                          <img
                            src="../assets/images/map.png"
                            style={{
                              width: '100%'
                            }}
                          />
                        </div>
                        <div className="row row-cols-12 border-top border-block-start-dashed">
                          <div className="col p-0">
                            <div className="ps-4 py-3 pe-3 text-center border-end border-inline-end-dashed">
                              <span className="text-muted fs-12 mb-1 crm-lead-legend mobile d-inline-block">
                                Newyork{' '}
                              </span>
                              <div>
                                <span className="fs-16 fw-semibold">
                                  1,624
                                </span>
                                {' '}
                              </div>
                            </div>
                          </div>
                          <div className="col p-0">
                            <div className="p-3 text-center border-end border-inline-end-dashed">
                              <span className="text-muted fs-12 mb-1 crm-lead-legend desktop d-inline-block">
                                Chicago{' '}
                              </span>
                              <div>
                                <span className="fs-16 fw-semibold">
                                  1,267
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col p-0">
                            <div className="p-3 text-center border-end border-inline-end-dashed">
                              <span className="text-muted fs-12 mb-1 crm-lead-legend laptop d-inline-block">
                                New Jersey{' '}
                              </span>
                              <div>
                                <span className="fs-16 fw-semibold">
                                  1,153
                                </span>
                                {' '}
                              </div>
                            </div>
                          </div>
                          <div className="col p-0">
                            <div className="p-3 text-center">
                              <span className="text-muted fs-12 mb-1 crm-lead-legend tablet d-inline-block">
                                Austin{' '}
                              </span>
                              <div>
                                <span className="fs-16 fw-semibold">
                                  679
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="card custom-card">
                      <div className="card-header">
                        <div className="card-title">
                          {' '}List of Entitlement{' '}
                        </div>
                      </div>
                      <div className="card-body">
                        <ul className="list-group">
                          <li className="list-group-item">
                            {' '}Max Production Sites
                            <span className=" float-end ">
                              1,982
                            </span>
                            {' '}
                          </li>
                          <li className="list-group-item">
                            {' '}Max Pilot Sites{' '}
                            <span className=" float-end ">
                              214
                            </span>
                            {' '}
                          </li>
                          <li className="list-group-item">
                            {' '}Max Sandbox Sites{' '}
                            <span className=" float-end ">
                              262
                            </span>
                            {' '}
                          </li>
                          <li className="list-group-item">
                            {' '}Litmus Edge Download{' '}
                            <span className=" float-end ">
                              395
                            </span>
                            {' '}
                          </li>
                          <li className="list-group-item">
                            {' '}Litmus Edge Manager Download{' '}
                            <span className=" float-end ">
                              79
                            </span>
                            {' '}
                          </li>
                          <li className="list-group-item">
                            {' '}Max Pilot Sites{' '}
                            <span className=" float-end ">
                              214
                            </span>
                            {' '}
                          </li>
                          <li className="list-group-item">
                            {' '}Max Sandbox Sites{' '}
                            <span className=" float-end ">
                              262
                            </span>
                            {' '}
                          </li>
                          <li className="list-group-item">
                            {' '}Max Sandbox Sites{' '}
                            <span className=" float-end ">
                              262
                            </span>
                            {' '}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-12 col-xl-12">
                    <div className="card custom-card overflow-hidden">
                      <div className="card-header justify-content-between">
                        <div className="card-title">
                          {' '}Activity Logs{' '}
                        </div>
                        <div className="dropdown">
                          <a
                            aria-expanded="false"
                            className="p-2 fs-12 text-muted"
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            {' '}View All
                            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                            {' '}
                          </a>
                          <ul
                            className="dropdown-menu"
                            role="menu"
                          >
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Today
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                This Week
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Last Week
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <div className="table-responsive">
                          <table className="table table-hover text-nowrap">
                            <tbody>
                              <tr>
                                <th scope="row">
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {' '}
                                      <span className="avatar avatar-md p-1 bg-light avatar-rounded">
                                        {' '}
                                        <img
                                          alt=""
                                          src="../assets/images/company-logos/attach-file.png"
                                          style={{
                                            height: 'auto',
                                            width: '20px'
                                          }}
                                        />
                                        {' '}
                                      </span>
                                      {' '}
                                    </div>
                                    <div>
                                      <p className="fw-semibold mb-0">
                                        {' '}John Doe created a new site named 'Project Alpha' within the organization 'XYZ Inc.'
                                      </p>
                                    </div>
                                  </div>
                                </th>
                                <td>
                                  24,Nov 2021
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {' '}
                                      <span className="avatar avatar-md p-1 bg-light avatar-rounded">
                                        {' '}
                                        <img
                                          alt=""
                                          src="../assets/images/company-logos/attach-file.png"
                                          style={{
                                            height: 'auto',
                                            width: '20px'
                                          }}
                                        />
                                        {' '}
                                      </span>
                                      {' '}
                                    </div>
                                    <div>
                                      <p className="fw-semibold mb-0">
                                        Sarah Thompson updated the support entitlements for 'ABC Corporation,' increasing the number of hosted sandboxes allowed to be deployed from 5 to 10.
                                      </p>
                                    </div>
                                  </div>
                                </th>
                                <td>
                                  13,Jan 2020
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {' '}
                                      <span className="avatar avatar-md p-1 bg-light avatar-rounded">
                                        {' '}
                                        <img
                                          alt=""
                                          src="../assets/images/company-logos/attach-file.png"
                                          style={{
                                            height: 'auto',
                                            width: '20px'
                                          }}
                                        />
                                        {' '}
                                      </span>
                                      {' '}
                                    </div>
                                    <div>
                                      <p className="fw-semibold mb-0">
                                        David Brown deleted a site named 'Project Delta' within the organization '123 Industries,' removing all associated users and licenses.
                                      </p>
                                    </div>
                                  </div>
                                </th>
                                <td>
                                  06,Sep 2020
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {' '}
                                      <span className="avatar avatar-md p-1 bg-light avatar-rounded">
                                        {' '}
                                        <img
                                          alt=""
                                          src="../assets/images/company-logos/attach-file.png"
                                          style={{
                                            height: 'auto',
                                            width: '20px'
                                          }}
                                        />
                                        {' '}
                                      </span>
                                      {' '}
                                    </div>
                                    <div>
                                      <p className="fw-semibold mb-0">
                                        David Brown deleted a site named 'Project Delta' within the organization '123 Industries,' removing all associated users and licenses.
                                      </p>
                                    </div>
                                  </div>
                                </th>
                                <td>
                                  19,Mar 2020
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
            </div>
          </div>
          <div className="modal-footer">
            <div className="btn-group ms-auto">
              {' '}
              <button className="btn btn-sm btn-primary">
                Search
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

export default SiteDashboard;