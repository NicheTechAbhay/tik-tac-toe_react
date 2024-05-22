/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, Key , useRef} from "react";
import * as Yup from "yup";
import { getUserRole } from '../../backend/org_details'
import Loader from "../../utils/Loader/Loader";
import swal from "sweetalert";
import { emailSchema, roleSchema, nameSchema } from '../../helper/ValidationHelper'
import { orgDashboardCounts, orgUserList, orgEntitlementList } from '../../backend/dashboard'
import Sidebar from "../Sidebar/Sidebar";
import {addUserToOrganization } from '../../backend/org_user'

// Validation Schemas
interface OrgUser {
  id: Key | null | undefined;
  firstname: any;
  lastname: any;
  email: React.ReactNode;
  user_role: React.ReactNode;
}
interface Entitlement {
  id: number;
  entitlementName: string;
  entitlementValue: number;
  created_at: string;
  entitlement_name_id: number;
  entitlement_value_id: number;
  licence_tier_id: number;
  org_id: number;
  site_id: number;
  support_level_id: number;
}
interface roles {
  id: string;
  name: string;
  created_at: string;
}
const validationSchema = Yup.object().shape({
  email: emailSchema,
  firstName: nameSchema,
  lastName: nameSchema,
  role: roleSchema,
});
const OrganizationDashboard: React.FC = () => {
  const org_id:any = localStorage.getItem("org_id");
  const orgName = localStorage.getItem("org_name");
  const closeModalButtonRef = useRef<HTMLButtonElement>(null);


  const [orgData, setOrgData] = useState<{ entitlementCount: number, errorCode: number, sitesDetailCount: number, userCount: number } | null>(null);
  const [orgUserData, setOrgUserData] = useState<OrgUser[]>([]);
  const [entitlementListData, setEntitlementListData] = useState<Entitlement[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await orgDashboardCounts(org_id);
        setLoading(false)
        if (data) {
          setOrgData(data);
          //  console.log('orgDashboardCounts',data);

        } else {
          console.log("No organization details found.");
        }
      } catch (error: any) {
        console.error("Error fetching organization details:", error.message);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data :any = await orgUserList(org_id);
        setLoading(false)
        if (data) {
          setOrgUserData(data.userList);
          console.log('orgUserList', data);

        } else {
          console.log("No organization details found.");
        }
      } catch (error: any) {
        console.error("Error fetching organization details:", error.message);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await orgEntitlementList(org_id);
        setLoading(false)
        if (data && data.entitlementList) {
          setEntitlementListData(data.entitlementList);
          console.log('orgEntitlementList', data);

        } else {
          console.log("No organization details found.");
        }
      } catch (error: any) {
        console.error("Error fetching organization details:", error.message);
      }
    };

    fetchData();
  }, []);
  const [changeFlage, setChangeFlage] = useState<boolean>(false);

  console.log("vvvv" , changeFlage);
  
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [role, setRole] = useState("");
  
  const [roleError, setRoleError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [roles, setRoles] = useState<roles[] | null>(null);
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        setLoading(true)

        const result1 = await getUserRole(); // Replace with your actual API call
        console.log("getUserRole", result1.data);
        if (result1 && result1.data) {
        setLoading(false)

          setRoles(result1.data);
        }
      } catch (error: any) {
        console.error("Error fetching roles:", error.message);
      }
    };
    console.log('roles', roles)
    fetchRoles();
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value.trim();
    setEmail(newEmail);

    emailSchema.validate(newEmail)
      .then(() => setEmailError(''))
      .catch((err: Yup.ValidationError) => setEmailError(err.message));
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFirstName = e.target.value.trim().replace(/[^a-zA-Z]/g, '');
    setFirstName(newFirstName);

    nameSchema.validate(newFirstName)
      .then(() => setFirstNameError(''))
      .catch((err: Yup.ValidationError) => setFirstNameError(err.message));
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLastName = e.target.value.trim().replace(/[^a-zA-Z]/g, '');
    setLastName(newLastName);

    nameSchema.validate(newLastName)
      .then(() => setLastNameError(''))
      .catch((err: Yup.ValidationError) => setLastNameError(err.message));
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRole = e.target.value;
    setRole(newRole);

    roleSchema.validate(newRole)
      .then(() => setRoleError(''))
      .catch((err: Yup.ValidationError) => setRoleError(err.message));
  };
  const handleEdit = ( user :any) => {
    setChangeFlage(false);

    setEmail(user.email);
    setFirstName(user.firstname);
    setLastName(user.lastname);
    setRole(user.id);
  } 
  const handleFiledClear = () => {
  
    setEmailError("");
    setFirstNameError("");
    setLastNameError("");
    setRoleError("");
  } 

  const handleAddUser = () => {

    setEmail("");
    setFirstName("");
    setLastName("");
    setRole("");
    setChangeFlage(true)
  }


  const handleDelete = (id: number) => {
    swal({
      title: "Confirm Remove",
      text: "Are you sure you want to remove?",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete: any) => {
      if (willDelete) {
        // dispatch(dispatchLoadingStatus(true));
        const formData2 = new FormData();
        // formData2.append("token", token);
        formData2.append("id", id.toString());
        console.log("SUCCESS DELETE")
        swal(" Record deleted!", { icon: "success" });

      }
    });
  };
  const validateForm = async () => {
    try {
      await validationSchema.validate({ email, firstName, lastName, role, }, { abortEarly: false });
      setEmailError("");
      setFirstNameError("");
      setLastNameError("");
      setRoleError("");
      return true;
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const emailErrorMsg = err.inner.find(error => error.path === 'email')?.message || "";
        const firstNameErrorMsg = err.inner.find(error => error.path === 'firstName')?.message || "";
        const lastNameErrorMsg = err.inner.find(error => error.path === 'lastName')?.message || "";
        const roleErrorMsg = err.inner.find(error => error.path === 'role')?.message || "";

        setEmailError(emailErrorMsg);
        setFirstNameError(firstNameErrorMsg);
        setLastNameError(lastNameErrorMsg);
        setRoleError(roleErrorMsg);
      }
      return false;
    }
  };

  const handleSubmit = async () => {
    const isValid = await validateForm();
    if (isValid) {
      setLoading(true);
      console.log(email, firstName, lastName, role)
      console.log('isValid', isValid)
      setLoading(false);

      const userData = {
          "email": email,
          "firstname": firstName,
          "lastname": lastName,
     
      };

    

    
      try {
        setLoading(true)
       
        const result = await  addUserToOrganization(userData ) ; 
        console.log(result && result);
        
        if(result.data != null)
          {

            setLoading(false)
            if (closeModalButtonRef.current) {
              closeModalButtonRef.current.click();
            }

          
          }
      }
       catch (error) {
        console.error("API call failed:", error);
      }
   
    } else {
      console.log('isValid', isValid)
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <>
      {loading && <Loader />}
      <div>
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
          <>
            <Sidebar />
          </>

          <div className="main-content app-content">
            <div className="container-fluid">
              <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
                <div>
                  <p className="fw-semibold fs-18 mb-0">
                    Dashboard ({orgName})
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
                        <div className="col-xxl-4 col-lg-4 col-md-4">
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
                                        Number of Sites
                                      </p>
                                      <h4 className="fw-semibold mt-1">
                                        {/* 890 */}
                                        {orgData ? orgData.sitesDetailCount : 0}
                                      </h4>
                                    </div>
                                    <div id="crm-total-customers" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-lg-4 col-md-4">
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
                                        Number of Users
                                      </p>
                                      <h4 className="fw-semibold mt-1">
                                        {/* 52 */}
                                        {orgData ? orgData.userCount : 0}
                                      </h4>
                                    </div>
                                    <div id="crm-total-revenue" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-lg-4 col-md-4">
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
                                        No. of Entitlements
                                      </p>
                                      <h4 className="fw-semibold mt-1">
                                        {/* 12 */}
                                        {orgData ? orgData.entitlementCount : 0}
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
                    <div className="col-xl-12">
                      <div className="card custom-card">
                        <div className="card-header justify-content-between">
                          <div className="card-title">
                            {' '}User Management{' '}
                          </div>
                          <div className="d-flex flex-wrap gap-2">
                            {' '}
                            <button
                              className="btn btn-primary mb-1 btn-wave mb-3"
                              data-bs-target="#formmodal"
                              data-bs-toggle="modal"
                              data-bs-whatever="@fat"
                              type="button"
                              onClick={()=> handleAddUser()}
                              ref={closeModalButtonRef}

                             
                            >
                              {' '}
                              <i className="ri-add-fill me-2 align-middle d-inline-block" />
                              Add User
                            </button>
                            <div
                              aria-hidden="true"
                              aria-labelledby="exampleModalLabel"
                              className="modal fade"
                              id="formmodal"
                              tabIndex={-1}
                            >
                              <div className="modal-dialog modal-dialog-centered mt-2">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h6
                                      className="modal-title"
                                      id="exampleModalLabel"
                                    >
                                     {changeFlage === true ? "Add User" : "Edit User"}
                                    </h6>
                                    <button
                                      aria-label="Close"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      type="button"
                                      onClick={()=> handleFiledClear()}
                                    />
                                  </div>
                                  <div className="modal-body py-2">
                                    <form>
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="mb-1">
                                            {' '}
                                            <label
                                              className="col-form-label"
                                              htmlFor="recipient-name"
                                            >
                                              Email
                                            </label>
                                            <input
                                              className="form-control"
                                              id="recipient-name"
                                              type="text"
                                              onChange={handleEmailChange}
                                              onKeyDown={handleKeyPress}
                                              maxLength={320}
                                              value={email}
                                            />
                                            {emailError && <div className="text-danger">{emailError}</div>}
                                            {' '}
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="mb-1">
                                            <label
                                              className="col-form-label"
                                              htmlFor="recipient-name"
                                            >
                                              First Name
                                            </label>
                                            <input
                                              className="form-control"
                                              id="recipient-name"
                                              type="text"
                                              onChange={handleFirstNameChange}
                                              onKeyDown={handleKeyPress}
                                              maxLength={255}
                                              value={firstName}
                                            />
                                            {firstNameError && <div className="text-danger">{firstNameError}</div>}
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="mb-1">
                                            <label
                                              className="col-form-label"
                                              htmlFor="recipient-name"
                                            >
                                              Last Name
                                            </label>
                                            <input
                                              className="form-control"
                                              id="recipient-name"
                                              type="text"
                                              onChange={handleLastNameChange}
                                              onKeyDown={handleKeyPress}
                                              maxLength={255}
                                              value={lastName}
                                            />
                                            {lastNameError && <div className="text-danger">{lastNameError}</div>}
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div className="mb-2">
                                            <label
                                              className="col-form-label"
                                              htmlFor="recipient-name"
                                            >
                                              Role
                                            </label>
                                            <select
                                              className="form-select"
                                              id="recipient-name"
                                              onChange={handleRoleChange}
                                              value={role}
                                            >
                                              <option value="">Select a role</option>
                                              {roles && roles.map((role) => (
                                                <option key={role.id} value={role.id}>{role.name}</option>
                                              ))}
                                            </select>
                                            {roleError && <div className="text-danger">{roleError}</div>}
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                  <div className="modal-footer py-2 px-3">
                                    <button
                                      className="btn btn-primary m-0"
                                      type="button"
                                      onClick={handleSubmit}
                                    >
                                      {changeFlage === true ? "Add User" : "Edit User"}
                                    </button>
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive">
                            <div className="mb-2 float-end">
                              {' '}
                              <input
                                aria-label=".form-control-sm example"
                                className="form-control form-control-sm"
                                placeholder="Search Here"
                                type="text"
                              />
                              {' '}
                            </div>
                            <table className="table text-nowrap table-hover border table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col">
                                    Name
                                  </th>
                                  <th scope="col">
                                    Mail
                                  </th>
                                  <th scope="col">
                                    Organization
                                  </th>
                                  <th scope="col">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {orgUserData && orgUserData.length > 0 ? orgUserData.map((user) => (
                                  <tr key={user.id}>
                                    <td>
                                      <div className="d-flex align-items-center fw-semibold">
                                        {" "}
                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                          {" "}
                                          <img
                                            src="./src/assets/images/faces/4.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </span>
                                        {`${user.firstname} ${user.lastname}`}{' '}
                                      </div>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>
                                      {" "}
                                      <h5>
                                        <span className="badge bg-info-transparent">
                                          ORG {user.user_role}
                                        </span>
                                      </h5>
                                    </td>
                                    <td>
                                      <div className="hstack gap-2 fs-15">
                                        {" "}
                                        <a
                                          aria-label="anchor"
                                          data-bs-target="#formmodal"
                                          data-bs-toggle="modal"
                                          data-bs-whatever="@fat"
                                          className="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-primary-light"
                                        >
                                          <i className="ri-edit-line" onClick={() => handleEdit(user )} />
                                        </a>{" "}
                                        <a
                                          aria-label="anchor"
                                          href="javascript:void(0);"
                                          className="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-danger-light"
                                          onClick={() =>
                                            // handleDelete(data.QuestionID)
                                            handleDelete(1)
                                          }
                                        >
                                          <i className="ri-delete-bin-2-line" />
                                        </a>{" "}
                                      </div>
                                    </td>
                                  </tr>
                                )) : <tr className="bg-white border-0">
                                  {" "}
                                  <td colSpan={4} className="border-0">
                                    {" "}
                                    <div className="col-md-12 w-100 mt-4">
                                      <p className="text-center">No Data Found</p>{" "}
                                    </div>
                                  </td>
                                </tr>}

                              </tbody>
                            </table>
                          </div>
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
                                  src="./src/assets/images/map.png"
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
                                {entitlementListData && entitlementListData.map((entitlement) => (
                                  <li key={entitlement.id} className="list-group-item">
                                    {' '}{entitlement.entitlementName}
                                    <span className="float-end">{entitlement.entitlementValue}</span>
                                  </li>
                                ))}
                                {/* <li className="list-group-item">
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
                                </li> */}
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
                                                src="./src/assets/images/company-logos/attach-file.png"
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
                                            <p className="fw-semibold mb-0 white-space-break">
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
                                                src="./src/assets/images/company-logos/attach-file.png"
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
                                            <p className="fw-semibold mb-0 white-space-break">
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
                                                src="./src/assets/images/company-logos/attach-file.png"
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
                                            <p className="fw-semibold mb-0 white-space-break">
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
                                                src="./src/assets/images/company-logos/attach-file.png"
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
                                            <p className="fw-semibold mb-0 white-space-break">
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
      </div>
    </>
  )
};

export default OrganizationDashboard;