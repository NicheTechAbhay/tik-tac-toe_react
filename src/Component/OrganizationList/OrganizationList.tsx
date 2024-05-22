/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{useState ,useRef, useEffect} from "react";
import * as Yup from "yup";
import './chipbox.css';
import Loader from "../../utils/Loader/Loader"
import { useNavigate } from "react-router-dom";
import {MessageSchema,TypeDropdownSchema,DomainSchema,OrganizationNameSchema} from '../../helper/ValidationHelper'
import {fetchOrganizationAndSiteDetails,organizationSearch,organizationSidebarList,addOrganization , fetchOrganizationTypes} from '../../backend/org_details'
interface OrganizationWithSiteCount {
    org_id: string;
    org_name: string;
    sites_count: number;
  }
interface Typeor {
    id: string;
    name: string;
    created_at: string;
  }
type Organization = {
    id: string;
    name: string;
  };
  interface organizationSidebarList {
    id: number;
    created_at: string;
    description : string;
    name: string;
    type_id: number;
    status: string;
    updated_at: string;
  }
  interface SidebarOrgs {
    data: organizationSidebarList[];
  }
  interface TypesOrg {
    data: Typeor[];
  }
  

const validationSchema = Yup.object().shape({
  organizationName: OrganizationNameSchema,
  domains: Yup.array().of(DomainSchema).min(1, 'At least one domain is required'),
  selectedType:TypeDropdownSchema,
  message:MessageSchema,
});


const OrganizationList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
const history = useNavigate();

    const [organizationName, setOrganizationName] = useState("");
    const [organizationNameError, setOrganizationNameError] = useState("");
    // const [domain, setDomain] = useState("");
    const [domains, setDomains] = useState<any[]>([]);
    const [domainInput, setDomainInput] = useState<any>('');
    const [domainError, setDomainError] = useState("");
    const [typeDropdown, setTypeDropdown] = useState<Typeor[] | null>(null);
    const [selectedType, setSelectedType] = useState<string>('');
    const [typeDropdownError, setTypeDropdownError] = useState("");
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState("");
    const closeModalButtonRef = useRef(null);

    const handleorganizationNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      const newOrganizationName = e.target.value.trimStart();
      setOrganizationName(newOrganizationName);
  
      OrganizationNameSchema.validate(newOrganizationName)
        .then(() => {
          setOrganizationNameError('');
        })
        .catch((err: Yup.ValidationError) => {
          setOrganizationNameError(err.message);
        });
    }
    const handleDomainChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      const newDomain = e.target.value.trim();
      // setDomain(newDomain);
      setDomainInput(newDomain);
      DomainSchema.validate(newDomain)
        .then(() => {
          setDomainError('');
        })
        .catch((err: Yup.ValidationError) => {
          setDomainError(err.message);
        });
    }
    const handleTypeDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
      const newSelectedType  = e.target.value;
      setSelectedType(e.target.value);
      
      TypeDropdownSchema.validate(newSelectedType)
        .then(() => {setTypeDropdownError('')
        }).catch((err: Yup.ValidationError) => {
          console.log(err)
          setTypeDropdownError(err.message);
        });
    }
    
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
      const newMessage = e.target.value.trimStart();
      setMessage(newMessage);
  
      MessageSchema.validate(newMessage)
        .then(() => {
          setMessageError('');
        })
        .catch((err: Yup.ValidationError) => {
          setMessageError(err.message);
        });
    }
    const addDomain = async (domain: string) => {
      if (domains.includes(domain)) {
          setDomainError('Domain already added');
      }else {

        try {
          await DomainSchema.validate(domain);
          setDomains([...domains, domain]);
          setDomainInput('');
          setDomainError('');
        } catch (error) {
          setDomainError(error.message);
        }
      }
  };

  const removeDomain = (domain: string) => {
      setDomains(domains.filter(d => d !== domain));
  };
    const validateForm = async () => {
      try {
        await validationSchema.validate({ organizationName, domains , selectedType , message }, { abortEarly: false });
        setOrganizationNameError("");
        setDomainError("");
        setTypeDropdownError("");
        setMessageError("");
        return true;
      } catch (err) {
        console.log('err',err);
        
        if (err instanceof Yup.ValidationError) {
          const organizationNameErrorMsg = err.inner.find(error => error.path === 'organizationName')?.message || "";
          const domainErrorMsg = err.inner.find(error => error.path === 'domains')?.message || "";
          const typeDropdownErrorMsg = err.inner.find(error => error.path === 'selectedType')?.message || "";
          const messageErrorMsg = err.inner.find(error => error.path === 'message')?.message || "";
          setOrganizationNameError(organizationNameErrorMsg);
          setDomainError(domainErrorMsg);
          setTypeDropdownError(typeDropdownErrorMsg);
          setMessageError(messageErrorMsg);
        }
        return false;
      }
    };
    const handleSubmit = async () => {
      const isValid = await validateForm();
      
      if (isValid) {
        
        const selectedTypeId = typeDropdown.find(type => type.name === selectedType)?.id;
          
        const data = {
          "user_id": 1,
          "user_role": 1,
          "name": organizationName,
          "description": message,
          "type_id": selectedTypeId,
          "status": "Y",
          "domain":domains,
        };
        console.log(domains)
        try {
          setLoading(true)
          const result = await addOrganization(data); 
          console.log(result);
          
          if(result.data != null)
            {
              setLoading(false)
              console.log("Success" , result)
              closeModalButtonRef.current.click();

              setDomainInput('')
              setOrganizationName('')
              setSelectedType('')
              setDomains([])
              setMessage('')
              setOrganizationNameError("");
              setDomainError("");
              setTypeDropdownError("");
              setMessageError("");
              fetchData()
              fetchData1()
            }
        } catch (error) {
          console.error("API call failed:", error);
        }
      }
    }
    // const handleKeyPress = (e: any) => {
    //   if (e.key === 'Enter' && domainInput.trim() !== '') {
    //     e.preventDefault();
    //     addDomain(domainInput.trim());
    // }else 
    //   if (e.key === 'Enter') {
    //     handleSubmit();
    //   }
    // }
    const handleKeyPress = (e :any) => {
      if (e.key === 'Enter') {
        e.preventDefault();
  
        if (domainError === '' && domainInput.trim() !== '') {
          addDomain(domainInput.trim());
        } else {
          handleSubmit();
        }
      }
    };
    //////////////////////////////////////////////

    const [searchTerm, setSearchTerm] = useState<string | null>("");
    const [results, setResults] = useState<Organization[] | null>(null);
    const [orgsWithSites, setOrgsWithSites] = useState<OrganizationWithSiteCount[] | null>(null);
    const [sidebarOrgs, setSidebarOrgs] =useState<SidebarOrgs>({ data: [] });

    const fetchData1 = async () => {
      try {
        setLoading(true)

        const result1 = await organizationSidebarList(searchTerm);
        console.log("organizationSidebarList", result1);


        if (result1.errorCode === 0 && result1.data) {
          setLoading(false)
          setSidebarOrgs({ data: result1.data });
        } else {
          console.log("No organization details found.");
          setSidebarOrgs({ data: [] });
        }
      } catch (error: any) {
        console.error("Error fetching Sidebar details:", error.message);
      }
    };
    useEffect(() => {
        fetchData1();
      }, [searchTerm]);
      const fetchData = async () => {
        try {
          setLoading(true)
          const data = await fetchOrganizationAndSiteDetails();
         
          console.log("Data", data);
          if (data) {
            setLoading(false)
              setOrgsWithSites(data);
          console.log(data);
          
          } else {
            console.log("No organization details found.");
          }
        } catch (error: any) {
          console.error("Error fetching organization details:", error.message);
        }
      };
    useEffect(() => {
           
        
            fetchData();
          }, []);
          useEffect(() => {
            const fetchData = async () => {
              try {
                const data = await fetchOrganizationTypes();
               
                console.log("fetchOrganizationTypes", data);
                if (data && data.data) {
                    setTypeDropdown(data.data);
                
                
                } else {
                  console.log("No organization details found.");
                }
              } catch (error: any) {
                console.error("Error fetching organization details:", error.message);
              }
            };
        
            fetchData();
          }, []);


    const handleSearch = async () => {
              if(searchTerm===""){
                  setResults(null)
              }else{
                  const result = await organizationSearch(searchTerm);
                  console.log("Result", result);
                      if (result.errorCode === 0 && result.data && result.data.length > 0) {
                          setResults(result.data);
                        //   setError(null);
                      } else {
                        //   setError("Error fetching data");
                          setResults(null);
                      }
              }
              
            };
  
    return (
        <>
         {loading && <Loader />}
      {/* Start Switcher */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="switcher-canvas"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">
            Switcher
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <nav className="border-bottom border-block-end-dashed">
            <div
              className="nav nav-tabs nav-justified"
              id="switcher-main-tab"
              role="tablist"
            >
              {" "}
              <button
                className="nav-link active"
                id="switcher-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#switcher-home"
                type="button"
                role="tab"
                aria-controls="switcher-home"
                aria-selected="true"
              >
                Theme Styles
              </button>{" "}
              <button
                className="nav-link"
                id="switcher-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#switcher-profile"
                type="button"
                role="tab"
                aria-controls="switcher-profile"
                aria-selected="false"
              >
                Theme Colors
              </button>{" "}
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active border-0"
              id="switcher-home"
              role="tabpanel"
              aria-labelledby="switcher-home-tab"
              tabIndex={0}
            >
              <div className="">
                <p className="switcher-style-head">Theme Color Mode:</p>
                <div className="row switcher-style gx-0">
                  <div className="col-4">
                    <div className="form-check switch-select">
                      {" "}
                      <label
                        className="form-check-label"
                        htmlFor="switcher-light-theme"
                      >
                        {" "}
                        Light{" "}
                      </label>{" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="theme-style"
                        id="switcher-light-theme"
                        defaultChecked
                      />{" "}
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-check switch-select">
                      {" "}
                      <label
                        className="form-check-label"
                        htmlFor="switcher-dark-theme"
                      >
                        {" "}
                        Dark{" "}
                      </label>{" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="theme-style"
                        id="switcher-dark-theme"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="switcher-style-head">Directions:</p>
                <div className="row switcher-style gx-0">
                  <div className="col-4">
                    <div className="form-check switch-select">
                      {" "}
                      <label className="form-check-label" htmlFor="switcher-ltr">
                        {" "}
                        LTR{" "}
                      </label>{" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="direction"
                        id="switcher-ltr"
                        defaultChecked
                      />{" "}
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-check switch-select">
                      {" "}
                      <label className="form-check-label" htmlFor="switcher-rtl">
                        {" "}
                        RTL{" "}
                      </label>{" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="direction"
                        id="switcher-rtl"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="switcher-style-head">Navigation Styles:</p>
                <div className="row switcher-style gx-0">
                  <div className="col-4">
                    <div className="form-check switch-select">
                      {" "}
                      <label
                        className="form-check-label"
                        htmlFor="switcher-vertical"
                      >
                        {" "}
                        Vertical{" "}
                      </label>{" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="navigation-style"
                        id="switcher-vertical"
                        defaultChecked
                      />{" "}
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-check switch-select">
                      {" "}
                      <label
                        className="form-check-label"
                        htmlFor="switcher-horizontal"
                      >
                        {" "}
                        Horizontal{" "}
                      </label>{" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="navigation-style"
                        id="switcher-horizontal"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Switcher */}
      <div className="page">
        {/* app-header */}
        {/* /app-header */} {/* Start::app-sidebar */}
        {/* End::app-sidebar */} {/* Start::app-content */}
        <div className="main-content ">
          <div className="container-fluid">
            {/* Page Header */}
            <div className="d-md-flex d-block align-items-center justify-content-center my-4 page-header-breadcrumb">
              <h1 className="page-title fw-semibold fs-18 mb-0">
                Your Organizations
              </h1>
            </div>
            {/* Page Header Close */} {/* Start::row-1 */}
            <div className="row">
              <div className="col-xxl-3 col-md-3">
                <div className="card custom-card">
                  <div className="p-3 border-bottom d-block">
                    <div className=" border-block-end-dashed">
                      <div className="input-group">
                        {" "}
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Search"
                          aria-label="coupon-code"
                          aria-describedby="coupons"
                          value={searchTerm ?? ""}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />{" "}
                        <button
                          className="btn btn-primary input-group-text"
                          id="coupons"
                          onClick={handleSearch}
                        >
                          <i className="bx bx-search" />
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                  {/* {results && (
                        <div className="card-body p-0">
                            <div className="p-3 border-bottom border-block-end-dashed">
                        {results.map((org) => (
                            <div className="d-flex align-items-center justify-content-between mb-3">
                            <div key={org.id} className="text-black op-7">{org.name}</div>
                          </div>
                        ))}
                        </div>
                        </div>
                    )} */}
                    {sidebarOrgs && (
                        <div className="card-body p-0">
                        <div className="p-3 border-bottom border-block-end-dashed">
                        {sidebarOrgs.data.map(org => (
                                <div className="d-flex align-items-center justify-content-between mb-3"  key={org.id}>
                                <div className="text-black op-7">{org.name}</div>
                            </div>
                        ))}
                        </div>
                        </div>
                    )}
    
                </div>
              </div>
              <div className="col-xxl-9 col-md-9">
                <div className="card custom-card" id="cart-container-delete">
                  <div className="card-header">
                    <div className="card-title">All Organizations </div>
                  </div>
                  <div className="card-body">
                    <button
                      type="button"
                      className="btn btn-primary mb-1 btn-wave w-100 mb-3"
                      data-bs-toggle="modal"
                      data-bs-target="#formmodal"
                      data-bs-whatever="@fat"
                    >
                      {" "}
                      <i className="ri-add-fill me-2 align-middle d-inline-block" />
                      Add Organization{" "}
                    </button>
                    <div
                      className="modal fade"
                      id="formmodal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered ">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h6 className="modal-title" id="exampleModalLabel">
                              Create Organization
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              ref={closeModalButtonRef}
                            />
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="mb-3">
                                {" "}
                                <label
                                  htmlFor="recipient-name"
                                  className="col-form-label"
                                >
                                  Organization Name
                                </label>{" "}
                                <input
                                  type="text"
                                  className="form-control"
                                  id="recipient-name"
                                  onChange={handleorganizationNameChange}
                                  onKeyDown={handleKeyPress}
                                  value={organizationName}
                                />{" "}
                                {organizationNameError && <div className="text-danger">{organizationNameError}</div>}
                              </div>
                              <div className="mb-3">
                                {" "}
                                <label
                                  htmlFor="recipient-name"
                                  className="col-form-label"
                                >
                                  Domains
                                </label>{" "}
                                <input
                                    type="text"
                                    className="form-control"
                                    id="recipient-name"
                                    onChange={handleDomainChange}
                                    onKeyDown={handleKeyPress}
                                    value={domainInput}
                                />
                            <div className="chip-input-container">
                                {domains.map((domain, index) => (
                                    <div key={index} className="chip">
                                        {domain}
                                        <button type="button" className="close" onClick={() => removeDomain(domain)}>
                                            &times;
                                        </button>
                                    </div>
                                ))}
                                </div>
                                {/* <input
                                  type="text"
                                  className="form-control"
                                  id="recipient-name"
                                  onChange={handleDomainChange}
                                  onKeyDown={handleKeyPress}
                                  value={domain}
                                />*/}
                                {" "} 
                                {domainError && <div className="text-danger">{domainError}</div>}
                              </div>
                              <div className="mb-3">
                                {" "}
                                <label
                                  htmlFor="recipient-name"
                                  className="col-form-label"
                                >
                                  Type
                                </label>{" "}
                                <select 
                                // className="form-select" 
                                className={`form-select ${typeDropdownError ? 'is-invalid' : ''}`} 
                                id="recipient-name"
                                value={selectedType}
                                onChange={handleTypeDropdownChange}
                                >
                                  <option value="">Select Type</option>
                                 {typeDropdown &&
                                  typeDropdown.map((type) => (
                                    <option key={type.id} value={type.name}>
                                      {type.name}
                                    </option>
                                  ))}
                                </select>{" "}
                                {typeDropdownError && <div className="text-danger">{typeDropdownError}</div>}
                              </div>
                              <div className="mb-3">
                                {" "}
                                <label
                                  htmlFor="message-text"
                                  className="col-form-label"
                                >
                                  Message:
                                </label>{" "}
                                <textarea
                                  className="form-control"
                                  id="message-text"
                                  defaultValue={""}
                                  onChange={handleMessageChange}
                                  onKeyDown={handleKeyPress}
                                  value={message}
                                />{" "}
                                {messageError && <div className="text-danger">{messageError}</div>}
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            {" "}
                            <button type="button" onClick={handleSubmit} className="btn btn-primary">
                              Add Organization
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                    {orgsWithSites && orgsWithSites.map(org => (
                        <div className="col-md-4" style={{cursor : 'pointer'}}  key={org.org_id} onClick={() => {localStorage.setItem("org_id" , org.org_id) ; localStorage.setItem("org_name" , org.org_name); history('/organization-dashboard')}}>
                        <div className="card custom-card custom-card-new">
                            <a className="card-anchor"  />
                            <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="me-3">
                                <span className="avatar avatar-md">
                                    <img
                                    alt="img"
                                    src="./src/assets/images/faces/15.jpg"
                                    />
                                </span>
                                </div>
                                <div>
                                <p className="card-text mb-0 fs-14 fw-semibold">
                                    {org.org_name}
                                </p>
                                <div className="card-title text-muted fs-12 mb-0">
                                    {org.sites_count} sites
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
    
                    </div>
                  </div>
                </div>
                <div className="card custom-card d-none" id="cart-empty-cart">
                  <div className="card-header">
                    <div className="card-title"> Empty Cart </div>
                  </div>
                  <div className="card-body">
                    <div className="cart-empty text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-muted"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z" />
                        <path d="M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z" />
                        <path d="M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z" />
                        <path d="M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z" />
                      </svg>
                      <h3 className="fw-bold mb-1">Your Cart is Empty</h3>
                      <h5 className="mb-3">Add some items to make me happy :)</h5>
                      <a
                        href="#"
                        className="btn btn-primary btn-wave m-3"
                        data-abc="true"
                      >
                        continue shopping <i className="bi bi-arrow-right ms-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End::row-1 */}
          </div>
        </div>
        {/* End::app-content */}
        <div
          className="modal fade"
          id="searchModal"
          tabIndex={-1}
          aria-labelledby="searchModal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="input-group">
                  <a
                    href=""
                    className="input-group-text"
                    id="Search-Grid"
                  >
                    <i className="fe fe-search header-link-icon fs-18" />
                  </a>{" "}
                  <input
                    type="search"
                    className="form-control border-0 px-2"
                    placeholder="Search"
                    aria-label="Username"
                  />{" "}
                  <a
                    href=""
                    className="input-group-text"
                    id="voice-search"
                  >
                    <i className="fe fe-mic header-link-icon" />
                  </a>{" "}
                  <a
                    href=""
                    className="btn btn-light btn-icon"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    <i className="fe fe-more-vertical" />{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
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
                    <a href="" className="tag-addon">
                      <i className="fe fe-x" />
                    </a>
                  </span>{" "}
                  <span className="search-tags">
                    <i className="fe fe-file-text me-2" />
                    Pages
                    <a href="" className="tag-addon">
                      <i className="fe fe-x" />
                    </a>
                  </span>{" "}
                  <span className="search-tags">
                    <i className="fe fe-align-left me-2" />
                    Articles
                    <a href="" className="tag-addon">
                      <i className="fe fe-x" />
                    </a>
                  </span>{" "}
                  <span className="search-tags">
                    <i className="fe fe-server me-2" />
                    Tags
                    <a href="" className="tag-addon">
                      <i className="fe fe-x" />
                    </a>
                  </span>
                </div>
                <div className="my-4">
                  <p className="font-weight-semibold text-muted mb-2">
                    Recent Search :
                  </p>
                  <div className="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                    {" "}
                    <a href="notifications.html">
                      <span>Notifications</span>
                    </a>{" "}
                    <a
                      className="ms-auto lh-1"
                      href=""
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <i className="fe fe-x text-muted" />
                    </a>{" "}
                  </div>
                  <div className="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                    {" "}
                    <a href="alerts.html">
                      <span>Alerts</span>
                    </a>{" "}
                    <a
                      className="ms-auto lh-1"
                      href=""
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <i className="fe fe-x text-muted" />
                    </a>{" "}
                  </div>
                  <div className="p-2 border br-5 d-flex align-items-center text-muted mb-0 alert">
                    {" "}
                    <a href="mail.html">
                      <span>Mail</span>
                    </a>{" "}
                    <a
                      className="ms-auto lh-1"
                      href=""
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <i className="fe fe-x text-muted" />
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="btn-group ms-auto">
                  {" "}
                  <button className="btn btn-sm btn-primary-light">
                    Search
                  </button>{" "}
                  <button className="btn btn-sm btn-primary">Clear Recents</button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Start */}
        <footer className="footer mt-auto py-3 bg-white text-center">
          <div className="container">
            {" "}
            <span className="text-muted">
              {" "}
              Copyright © <span id="year" />{" "}
              <a href="" className="text-dark fw-semibold">
                Litmus
              </a>
              . Powered By{" "}
              <a href="https://www.nichetechsolutions.com/">
                {" "}
                <span className="fw-semibold text-primary text-decoration-underline">
                  Nichetech
                </span>{" "}
              </a>{" "}
              All rights reserved{" "}
            </span>{" "}
          </div>
        </footer>
        {/* Footer End */}
      </div>
      <div className="scrollToTop">
        {" "}
        <span className="arrow">
          <i className="ri-arrow-up-s-fill fs-20" />
        </span>{" "}
      </div>
      <div id="responsive-overlay" />
      
    </>
    
        
        
      );
}
export default OrganizationList



