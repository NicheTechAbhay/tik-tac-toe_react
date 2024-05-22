import { useState } from "react";
import * as Yup from "yup";


const ValidateYup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState([]);
  const [birthDate, setBirthDate] = useState("");

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is Required")
      .matches(/^[a-zA-Z\s]+$/, "Please Enter Valid Name"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string()
      //   .required("Email is Required")
      .matches(
        /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      ),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required(),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol"
      )
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .min(18, "You must be at least 18 years old")
      .max(100, "You cannot be older than 100 years")
      .required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    interests: Yup.array()
      .min(1, "Select at least one interest")
      .required("Select at least one interest"),
    birthDate: Yup.date().required("Date of birth is required"),
  });

  const handleChange = async (e) => {
    const { name, value, type, checked } = e.target;
    let fieldValue = value;

    // For checkbox inputs
    if (type === "checkbox") {
      fieldValue = checked
        ? [...interests, name]
        : interests.filter((interest) => interest !== name);
      setInterests(fieldValue);
    }

    try {
      await validationSchema.fields[name].validate(fieldValue);
      setErrors({ ...errors, [name]: "" });
    } catch (error) {
      setErrors({ ...errors, [name]: error.message });
    }

    switch (name) {
      case "firstName":
        setFirstName(fieldValue.trimStart());
        break;
      case "lastName":
        setLastName(fieldValue);
        break;
      case "email":
        setEmail(fieldValue);
        break;
      case "phoneNumber":
        setPhoneNumber(fieldValue);
        break;
      case "password":
        setPassword(fieldValue);
        break;
      case "confirmPassword":
        setConfirmPassword(fieldValue);
        break;
      case "age":
        setAge(fieldValue);
        break;
      case "gender":
        setGender(fieldValue);
        break;
      case "birthDate":
        setBirthDate(fieldValue);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword,
      age,
      gender,
      interests,
      birthDate,
    };

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData);
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="Enter your first name"
          onChange={handleChange}
        />
        {errors.firstName && <div className="errorss">{errors.firstName}</div>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Enter your last name"
          onChange={handleChange}
        />
        {errors.lastName && <div className="errorss">{errors.lastName}</div>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {errors.email && <div className="errorss">{errors.email}</div>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          placeholder="Enter your phone number"
          onChange={handleChange}
        />
        {errors.phoneNumber && (
          <div className="errorss">{errors.phoneNumber}</div>
        )}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
        {errors.password && <div className="errorss">{errors.password}</div>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm your password"
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <div className="errorss">{errors.confirmPassword}</div>
        )}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={age}
          placeholder="Enter your age"
          onChange={handleChange}
        />
        {errors.age && <div className="errorss">{errors.age}</div>}
      </div>

      <div>
        <label>Gender:</label>
        <select name="gender" value={gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <div className="errorss">{errors.gender}</div>}
      </div>
      {/* 
      <div>
        <label>Interests:</label>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleCheckboxChange}
          />
          Coding
        </label>
        <label>
          <input
            type="checkbox"
            name="sports"
            checked={interests.includes("sports")}
            onChange={handleCheckboxChange}
          />
          Sports
        </label>
        <label>
          <input
            type="checkbox"
            name="reading"
            checked={interests.includes("reading")}
            onChange={handleCheckboxChange}
          />
          Reading
        </label>
        {errors.interests && <div className="errorss">{errors.interests}</div>}
      </div> */}
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="birthDate"
          value={birthDate}
          placeholder="Enter your date of birth"
          onChange={handleChange}
        />
        {errors.birthDate && <div className="errorss">{errors.birthDate}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ValidateYup;
