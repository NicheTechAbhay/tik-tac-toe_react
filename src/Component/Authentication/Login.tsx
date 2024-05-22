import { Login } from '../../backend/auth'
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useNavigate} from 'react-router-dom';
import Loader from "../../utils/Loader/Loader";
import swal from "sweetalert";
import {emailSchema,passwordSchema} from '../../helper/ValidationHelper'


const validationSchema = Yup.object().shape({
  email: emailSchema,
  password: passwordSchema
});
const Login1: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [hide, setHide] = useState("password");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    const storedEmail = localStorage.getItem('rememberedEmail');
    const storedPassword = localStorage.getItem('rememberedPassword');
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value.trim();
    setEmail(newEmail);

    emailSchema.validate(newEmail)
      .then(() => {
        setEmailError('');
      })
      .catch((err: Yup.ValidationError) => {
        setEmailError(err.message);
      });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value.trim();
    setPassword(newPassword);

    passwordSchema.validate(newPassword)
      .then(() => {
        setPasswordErr('');
      })
      .catch((err: Yup.ValidationError) => {
        setPasswordErr(err.message);
      });
  };

  const togglePasswordVisibility = () => {
    setHide(hide === "password" ? "text" : "password");
  };

  const handleRememberMeChange = (e: any) => {
    // setRememberMe(!rememberMe);
    setRememberMe(e.target.checked);
  };

  const validateForm = async () => {
    try {
      await validationSchema.validate({ email, password }, { abortEarly: false });
      setEmailError("");
      setPasswordErr("");
      return true;
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const emailErrorMsg = err.inner.find(error => error.path === 'email')?.message || "";
        const passwordErrorMsg = err.inner.find(error => error.path === 'password')?.message || "";
        setEmailError(emailErrorMsg);
        setPasswordErr(passwordErrorMsg);
      }
      return false;
    }
  };

  const handleSubmit = async () => {
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
      localStorage.setItem('rememberedPassword', password);
    } else {
      localStorage.removeItem('rememberedEmail');
      localStorage.removeItem('rememberedPassword');
    }
    const isValid = await validateForm();
    if (isValid) {
      setLoading(true);
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('rememberMe');
      }
      const result = await Login(email, password);
      if (result.errorCode === 0) {
        setLoading(false);
        console.log('Data signed in successfully:', result.data);
        setError("");
        navigate('/organization-list');
      } else {
        setLoading(false);
        swal({
          icon: 'error',
          text: result.message,
        });
        setError(result.message);
      }
      console.log(result);
    }
  };
  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <div className="canvas-green">
      {loading && <Loader />}
      <div className="container ">
        <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
            <div className="my-5 d-flex justify-content-center">
              <a href="index.html">
                <h1 className="text-white desktop-logo">Litmus</h1>
                <img src="../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
              </a>
            </div>
            <div className="card custom-card">
              <div className="card-body p-5">
                <p className="h5 fw-semibold mb-2 text-center">Sign In</p>
                <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome back!</p>
                <div className="row gy-3">
                  <div className="col-xl-12">
                    <label htmlFor="signin-email" className="form-label text-default">Email</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="signin-email"
                      placeholder="Enter Email"
                      onChange={handleEmailChange}
                      onKeyDown={handleKeyPress}
                      maxLength={320}
                      value={email}
                    />
                    {emailError && <div className="text-danger">{emailError}</div>}
                  </div>
                  <div className="col-xl-12 mb-2">
                    <label htmlFor="signin-password" className="form-label text-default d-block">
                      Password
                      {/* <a href="reset-password-basic.html" className="float-end text-danger">Forget password?</a> */}
                    </label>
                    <div className="input-group">
                      <input
                        type={hide}
                        className="form-control form-control-lg"
                        id="signin-password"
                        placeholder="password"
                        onKeyDown={handleKeyPress}
                        onChange={handlePasswordChange}
                        value={password}
                        maxLength={18}
                      />
                      <button className="btn btn-light" type="button" onClick={togglePasswordVisibility} id="button-addon2">
                        {hide === "password" ? <i className="ri-eye-off-line align-middle"></i> : <i className="ri-eye-line align-middle"></i>}
                      </button>
                    </div>
                    {passwordErr && <div className="text-danger">{passwordErr}</div>}
                  </div>
                  <div className="col-xl-12 mt-2 d-grid">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMeCheckbox"
                        checked={rememberMe}
                        onKeyDown={handleKeyPress}
                        onChange={handleRememberMeChange}
                      />
                      <label className="form-check-label text-muted fw-normal" htmlFor="rememberMeCheckbox">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-12 mt-2 d-grid">
                    <button type="button" className="btn btn-lg btn-primary" onClick={handleSubmit}>
                      Sign In
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login1;


